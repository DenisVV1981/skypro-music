import * as S from '../../App.styles';
import SidebarContent from '../../components/SideBar/SidebarContent.jsx';
import PlaylistContent from '../../components/PlaylistContent/PlaylistContent.jsx';
import FilterPanel from '../../components/FilterContent/FilterPanel.jsx';
import { useGetMainTracksQuery } from '../../services/playerAPI.js';

export const MainPage = ()=> {
  const {data, error, isLoading} = useGetMainTracksQuery();

  return (
    <S.MainBlock>
      <S.MainCenter>  
        <S.CenterblockH2>Треки</S.CenterblockH2>
        <FilterPanel/>
        <PlaylistContent trackList={data} sceleton={isLoading} errorMessage={error}/>
      </S.MainCenter>
      <S.MainSidebar>
        < SidebarContent />
      </S.MainSidebar>
    </S.MainBlock>
  );
};