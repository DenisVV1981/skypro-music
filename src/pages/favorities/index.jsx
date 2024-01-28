import * as S from '../../App.styles';
import React, {useEffect, useState}  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilterPanel from '../../components/FilterContent/FilterPanel';
import PlaylistContent from '../../components/PlaylistContent/PlaylistContent';
import { getFavoriteTrackList } from '../../api';
import { addFavoriteTracks } from '../../store/actions/creators/playlist';
import { tracksFavoriteSelector } from '../../store/selectors/tracklist';



export const Favorities = ()=> {
const dispatch = useDispatch();
const [sceleton, setSceleton] = useState(true);

const trackList = useSelector(tracksFavoriteSelector);

    useEffect(() => {
        const fetchData = async () => {
    
          try {
            const tracks = await getFavoriteTrackList();
            dispatch(addFavoriteTracks({
              list: tracks
            }));
            setSceleton(false);
          } catch (error) {
            console.log(error);
            setSceleton(false);
            dispatch(addFavoriteTracks({
              errorMessage: "Не удалось загрузить плейлист, попробуйте позже."
            }));
          }
          
        };
      
        fetchData();
      }, [])

return (
   
<S.MainBlock>
    <S.MainCenter>
        <S.CenterblockH2>Мои треки</S.CenterblockH2>
        <FilterPanel/>
        <PlaylistContent trackList = {trackList} sceleton={sceleton}/>
    </S.MainCenter>
</S.MainBlock>
);
};