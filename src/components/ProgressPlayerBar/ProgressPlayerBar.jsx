import * as S from './ProgressPlayerBar.styles'

export default function ProgressBar({audioRef, currentTime, changeCurrentTime}) {

    return ( audioRef.current &&
      <S.ProgressInput
        type="range"
        min={0}
        max={audioRef.current.duration}
        value={currentTime}
        step={0.01}
        onChange={(event) => changeCurrentTime(event.target.value)}
        $color="blueviolet"
      />
    );
  }