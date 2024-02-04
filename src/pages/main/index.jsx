import * as S from '../../App.styles';
import SidebarContent from '../../components/SideBar/SidebarContent.jsx';
import PlaylistContent from '../../components/PlaylistContent/PlaylistContent.jsx';
import FilterPanel from '../../components/FilterContent/FilterPanel.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { tracksSelector } from '../../store/selectors/tracklist.js';
import { useEffect } from 'react';
import { getTrackList } from '../../api.js';
import { addTracks } from '../../store/actions/creators/playlist.js';
import { useState } from 'react';

export const MainPage = ()=> {
  const dispatch = useDispatch();
  const [sceleton, setSceleton] = useState(true);

  const fetchData = async () => {
console.log("вызвали fetch data");
    try {
      const tracks = await getTrackList();
      dispatch(addTracks({
        list: tracks
      }));
      setSceleton(false);
    } catch (error) {
      console.log(error);
      setSceleton(false);
      dispatch(addTracks({
        errorMessage: "Не удалось загрузить плейлист, попробуйте позже."
      }));
    }
  };

  // const isLike = useSelector(trackLikeSelector);
  useEffect(() => {
    console.log("вызвали main page");
    fetchData();
  }, [])

  const trackList = useSelector(tracksSelector);
    return (
      <S.MainBlock>
    <S.MainCenter>
        <S.CenterblockH2>Треки</S.CenterblockH2>
          <FilterPanel/>
          <PlaylistContent fetchCallback={fetchData} trackList={trackList} sceleton={sceleton}/>
    </S.MainCenter>
      <S.MainSidebar>
          < SidebarContent />
      </S.MainSidebar>
    </S.MainBlock>

);
};