import * as S from '../../App.styles';
import SidebarContent from '../../components/SideBar/SidebarContent.jsx';
import PlaylistContent from '../../components/PlaylistContent/PlaylistContent.jsx';
import FilterPanel from '../../components/FilterContent/FilterPanel.jsx';

export const MainPage = ({ sceleton})=> {
  
    return (
      <S.MainBlock>
    <S.MainCenter>
        <S.CenterblockH2>Треки</S.CenterblockH2>
          <FilterPanel/>
          <PlaylistContent sceleton={sceleton}/>
    </S.MainCenter>
      <S.MainSidebar>
          < SidebarContent />
      </S.MainSidebar>
    </S.MainBlock>

);
};