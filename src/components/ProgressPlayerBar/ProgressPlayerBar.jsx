import * as S from './ProgressPlayerBar.styles'

export default function ProgressBar({audioRef, currentTime, changeCurrentTime}) {
  const duration = isNaN(audioRef.current?.duration ?? 0) ? 0 : audioRef.current?.duration;
  //console.log(audioRef.current?.duration);
    return ( audioRef.current &&
      <S.ProgressInput
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        step={0.01}
        onChange={(event) => changeCurrentTime(event.target.value)}
        $color="blueviolet"
      />
    );
  }