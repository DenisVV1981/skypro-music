
import * as S from '../../App.styles';

import Player from '../../components/Player/Player.jsx';
import Volume from '../../components/Volume/Volume.jsx';
import SidebarUserInfo from '../../components/SideBar/SidebarUserInfo.jsx';
import SidebarContent from '../../components/SideBar/SidebarContent.jsx';
import PlaylistContent from '../../components/PlaylistContent/PlaylistContent.jsx';
import MainNavigation from '../../components/Navigation/MainNavigation.jsx';
import FilterPanel from '../../components/FilterContent/FilterPanel.jsx';
import SearchContent from '../../components/SearchContent/SearchContent.jsx';



export const MainPage = ({user, onAuthButtonClick, trackList, trackToPlay, setTrackToPlay, sceleton})=> {
return (
   
    <S.Wrapper>
    <S.Container>
      <S.Main>
        <MainNavigation user={user} onAuthButtonClick={onAuthButtonClick}/>
        <S.MainCenterblock>
            <SearchContent/>
          <S.CenterblockH2>Треки</S.CenterblockH2>
            <FilterPanel/>
            <PlaylistContent sceleton={sceleton} trackList={trackList} setTrackToPlay={setTrackToPlay}/>
        </S.MainCenterblock>
        <S.MainSidebar>
            < SidebarUserInfo />
            < SidebarContent />
        </S.MainSidebar>
      </S.Main>
      {trackToPlay && (
        <S.Bar>
          <S.BarContent>
            <S.BarPlayProgress></S.BarPlayProgress>
            <S.BarPlayerBlock>
                <Player trackToPlay={trackToPlay}/>
                <Volume/>
            </S.BarPlayerBlock>
          </S.BarContent>
        </S.Bar>
        )}
      <S.Footer></S.Footer>
    </S.Container>
  </S.Wrapper>
);
};