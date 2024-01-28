import * as S from '../../App.styles';
import SidebarContent from '../../components/SideBar/SidebarContent.jsx';
import PlaylistContent from '../../components/PlaylistContent/PlaylistContent.jsx';
import FilterPanel from '../../components/FilterContent/FilterPanel.jsx';
import { useSelector } from 'react-redux';
import { tracksSelector } from '../../store/selectors/tracklist.js';

export const MainPage = ({sceleton})=> {
  
  const trackList = useSelector(tracksSelector);
    return (
      <S.MainBlock>
    <S.MainCenter>
        <S.CenterblockH2>Треки</S.CenterblockH2>
          <FilterPanel/>
          <PlaylistContent trackList={trackList} sceleton={sceleton}/>
    </S.MainCenter>
      <S.MainSidebar>
          < SidebarContent />
      </S.MainSidebar>
    </S.MainBlock>

);
};