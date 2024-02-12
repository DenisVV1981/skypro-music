import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { refreshToken } from "../store/actions/creators/api";

const DATA_TAG = { type: "tracks", id: "LIST" };

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.access

      console.debug('Использую токен из стора', { token })

      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      headers.set('accept', `application/json`)
      return headers;
    },
  })

  // Делаем запрос
  const result = await baseQuery(args, api, extraOptions)
  console.debug('Результат первого запроса', { result })

  if (result?.error?.status !== 401) {
    return result
  }

  // Функция которая отчищает данные о юзере в сторе и отправляет на страницу логина
  const forceLogout = () => {
    console.debug('Принудительная авторизация!')
    api.dispatch(refreshToken(null))
    window.location.assign('/login')
  }

  // Функция getState возвращает состояние redux стейта целиком, ее нам предоставляет rtk query, она прилетает параметром запроса в функцию
  const { auth } = api.getState()
  console.debug('Данные пользователя в сторе', { auth })
  // Если в сторе нет refresh токена, то помочь пользователю мы уже ничем не сможем, разлогиниваем его и отправляем авторизоваться руками
  if (!auth.refresh) {
    return forceLogout()
  }

  // Делаем запрос за новым access токеном в API обновления токена
  const refreshResult = await baseQuery(
    {
      url: '/user/token/refresh/',
      method: 'POST',
      body: {
        refresh: auth.refresh,
      },
    },
    api,
    extraOptions,
  )

  console.error('Результат запроса на обновление токена', { refreshResult })

  if (!refreshResult.data.access) {
    return forceLogout()
  }

  api.dispatch(refreshToken(refreshResult.data.access))

  const retryResult = await baseQuery(args, api, extraOptions)

  if (retryResult?.error?.status === 401) {
    console.error("получили 401 повторно");
    return forceLogout()
  }

  console.debug('Повторный запрос завершился успешно')

  return retryResult
}


export const playerApi = createApi({
  reducerPath: "playerApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getMainTracks: builder.query({
        query: () => "/catalog/track/all/",
        transformResponse: (response) => {
            let user =JSON.parse(window.localStorage.getItem("user"));
            return response.map((item) => {
                return {
                    ...item, 
                    isLike: item.stared_user?.filter(item => item.id === user.id).length > 0,
                 };
            });
            
          },
        providesTags: (result = []) => [
          DATA_TAG,
        ],
    }),
    getFavoriteTracks: builder.query({
        query: () => "/catalog/track/favorite/all/",
        transformResponse: (response) => {
            return response.map((item) => {
                return {
                    ...item, 
                    isLike: true,
                 };
            });
            
          },
        providesTags: (result = []) => [
          DATA_TAG,
        ],
    }),
    getSelectionTracks: builder.query({
        query: ( id ) => `/catalog/selection/${id}/`,
        transformResponse: (response) => {
            let user =JSON.parse(window.localStorage.getItem("user"));
            return response.items.map((item) => {
                let mappedTrack = {
                    isLike: item.stared_user?.filter(item => item.id === user.id).length > 0,
                    ...item, 
                 };
                 delete mappedTrack.stared_user;
                return mappedTrack;
            });
            
          },
        providesTags: (result = []) => [
          DATA_TAG,
        ],
    }),

    addFavoriteTrack: builder.mutation({
        query: ( id ) => ({
            url: `/catalog/track/${id}/favorite/`,
            method: "POST",
        }),
        invalidatesTags: [DATA_TAG],
    }),

    deleteFavoriteTrack: builder.mutation({
        query: ( id ) => ({
            url: `/catalog/track/${id}/favorite/`,
            method: "DELETE",
        }),
        invalidatesTags: [DATA_TAG],
    }),

  }),
  
});

export const { 
    useGetMainTracksQuery,
    useGetFavoriteTracksQuery,
    useGetSelectionTracksQuery,
    
    useAddFavoriteTrackMutation,
    useDeleteFavoriteTrackMutation,
 } = playerApi;