import * as S from '../../App.styles';

import Player from '../../components/Player/Player.jsx';
import Volume from '../../components/Volume/Volume.jsx';
import SidebarUserInfo from '../../components/SideBar/SidebarUserInfo.jsx';
import SidebarContent from '../../components/SideBar/SidebarContent.jsx';
import PlaylistContent from '../../components/PlaylistContent/PlaylistContent.jsx';
import MainNavigation from '../../components/Navigation/MainNavigation.jsx';
import FilterPanel from '../../components/FilterContent/FilterPanel.jsx';
import SearchContent from '../../components/SearchContent/SearchContent.jsx';
import ProgressBar from '../../components/ProgressPlayerBar/ProgressPlayerBar.jsx';

import { useState, useRef } from 'react';

import { useSelector } from 'react-redux';
import { trackToPlaySelector } from '../../store/selectors/tracklist.js';

export const MainPage = ({ sceleton, logout})=> {
  const trackToPlay = useSelector(trackToPlaySelector);

  const audioRef = useRef(null); 

  const handleStart = () => {
   audioRef.current.play();
  };
 
  const handleStop = () => {
   audioRef.current.pause();
  };

  const handlePrev = () => {
    alert('Еще не реализовано');
  };
  const handleNext = () => {
    alert('Еще не реализовано');
  };
  const handleShuffle = () => {
    alert('Еще не реализовано');
  };
 
  const [isLooping, setIsLooping] = useState(false);
  
  const toggleLoop = () => {
   audioRef.current.loop = !isLooping;
   setIsLooping(!isLooping);
  };
  
  const [currentTime, setCurrentTime] = useState(0);
  const [formattedCurrentTime, setFormattedCurrentTime] = useState("");
  const [formatttedDuration, setFormatttedDuration] = useState("");

  const changeCurrentTime = (newTime) => {
  audioRef.current.currentTime = newTime;
  };

  const currentTimeChanged = (event)=>{
    setCurrentTime(event.target.currentTime);
    let sec =  Math.floor(event?.target?.currentTime ?? 0);
    setFormattedCurrentTime(Math.floor(sec / 60).toString().padStart(2, '0') + ':' + (sec % 60).toString().padStart(2, '0')  + ' / ');
    sec = Math.floor(event?.target?.duration ?? 0);
    setFormatttedDuration(Math.floor(sec / 60).toString().padStart(2, '0')  + ':' + (sec % 60).toString().padStart(2, '0') );
  }; 

return (
   
    <S.Wrapper>
     
    <S.Container>
      <S.Main>
        <MainNavigation  logout={logout}/>
        <S.MainCenterblock>
            <SearchContent/>
          <S.CenterblockH2>Треки</S.CenterblockH2>
            <FilterPanel/>
            <PlaylistContent 
              sceleton={sceleton}
              handleStart={handleStart}
              handleStop={handleStop}/>
        </S.MainCenterblock>
        <S.MainSidebar>
            < SidebarUserInfo logout={logout}/>
            < SidebarContent />
        </S.MainSidebar>
      </S.Main>
      {trackToPlay && (
        <S.Bar>
          <S.BarContent>
            <S.BarPlayProgressTimer>
              {formattedCurrentTime}{formatttedDuration}
            </S.BarPlayProgressTimer>
            <ProgressBar audioRef={audioRef} currentTime={currentTime} changeCurrentTime={changeCurrentTime}/>
            <S.BarPlayerBlock>
                <audio ref={audioRef} onTimeUpdate={(event) => currentTimeChanged(event)}>
                  <source src={trackToPlay.track_file} type='audio/mpeg'/>
                </audio>
                <Player 
                  audioRef={audioRef}
                  toggleLoop={toggleLoop}
                  handleStart={handleStart}
                  handleStop={handleStop}
                  isLooping={isLooping}
                  handlePrev={handlePrev}
                  handleNext={handleNext}
                  handleShuffle={handleShuffle}
                />
                <Volume audioRef={audioRef}/>
            </S.BarPlayerBlock>
          </S.BarContent>
        </S.Bar>
        )}
      <S.Footer></S.Footer>
    </S.Container>
  </S.Wrapper>
);
};