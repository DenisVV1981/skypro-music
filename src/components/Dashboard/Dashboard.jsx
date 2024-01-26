import { Outlet } from "react-router-dom";
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import * as S from '../../App.styles';
import MainNavigation from '../Navigation/MainNavigation.jsx';
import ProgressBar from '../ProgressPlayerBar/ProgressPlayerBar.jsx';
import Player from '../Player/Player.jsx';
import Volume from '../Volume/Volume.jsx';
import { trackToPlaySelector } from "../../store/selectors/tracklist.js";
import SearchContent from "../SearchContent/SearchContent.jsx";
import SidebarUserInfo from "../SideBar/SidebarUserInfo.jsx";

export const Dashboard = ({logout}) => {

  const trackToPlay = useSelector(trackToPlaySelector);

  const audioRef = useRef(null); 

  const handleStart = () => {
   audioRef.current.play();
  };
 
  const handleStop = () => {
   audioRef.current.pause();
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
          <S.MainCenterblockHeader>
            <SearchContent/>
            <SidebarUserInfo logout={logout}/>
          </S.MainCenterblockHeader>
          <Outlet />
        </S.MainCenterblock>
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