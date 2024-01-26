import * as S from '../../App.styles';
import SidebarContent from '../../components/SideBar/SidebarContent.jsx';
import PlaylistContent from '../../components/PlaylistContent/PlaylistContent.jsx';
import FilterPanel from '../../components/FilterContent/FilterPanel.jsx';


import { useRef } from 'react';

export const MainPage = ({ sceleton})=> {

  const audioRef = useRef(null); 

  const handleStart = () => {
   audioRef.current.play();
  };
 
  const handleStop = () => {
   audioRef.current.pause();
  };

    return (
      <S.MainBlock>
    <S.MainCenter>
        <S.CenterblockH2>Треки</S.CenterblockH2>
          <FilterPanel/>
          <PlaylistContent 
            sceleton={sceleton}
            handleStart={handleStart}
            handleStop={handleStop}/>
    </S.MainCenter>
      <S.MainSidebar>
          < SidebarContent />
      </S.MainSidebar>
    </S.MainBlock>

);
};