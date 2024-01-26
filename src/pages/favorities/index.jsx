import * as S from '../../App.styles';
import {  useRef } from 'react';
import FilterPanel from '../../components/FilterContent/FilterPanel';
import PlaylistContent from '../../components/PlaylistContent/PlaylistContent';

export const Favorities = ({sceleton})=> {
    
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
        <S.CenterblockH2>Мои треки</S.CenterblockH2>
        <FilterPanel/>
        <PlaylistContent 
            sceleton={sceleton}
            handleStart={handleStart}
            handleStop={handleStop}/>
    </S.MainCenter>
</S.MainBlock>
);
};