import * as S from '../../App.styles';
import PlaylistContent from '../../components/PlaylistContent/PlaylistContent';
import { useGetFavoriteTracksQuery } from '../../services/playerAPI.js';



export const Favorities = ()=> {
  const {data, error, isLoading} = useGetFavoriteTracksQuery();

  return (
   
  <S.MainBlock>
    <S.MainCenter>
      <S.CenterblockH2>Мои треки</S.CenterblockH2>
      <PlaylistContent isFavorite={true} trackList={data} sceleton={isLoading} errorMessage={error}/>
    </S.MainCenter>
      <S.MainSidebar>
      </S.MainSidebar>
  </S.MainBlock>
);
};