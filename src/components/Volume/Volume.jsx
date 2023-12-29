import * as S from './Volume.styles'
import { useState } from 'react';
export default function Volume({audioRef}) {

    const [volumeValue, setVolumeValue] = useState(0.5);

    const toggleVolume = (e) => {
     audioRef.current.volume = e.target.value / 100;
     setVolumeValue(audioRef.current.volume);
    };
   

    return (
<S.BarVolumeBlock>
      <S.VolumeContent> 
          <S.VolumeImg >
                <S.VolumeSvg alt="volume">
                      <use xlinkHref ="img/icon/sprite.svg#icon-volume"></use>
                </S.VolumeSvg>
            </S.VolumeImg>
            <S.VoluneProgress>
                <S.VoluneProgressLine onClick={toggleVolume}
                      type="range"
                      name="range"
                />
            </S.VoluneProgress>
        </S.VolumeContent>
</S.BarVolumeBlock>
    );
}
