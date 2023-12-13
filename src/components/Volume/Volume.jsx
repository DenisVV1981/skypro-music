import * as S from './Volume.styles'

export default function Volume() {
    return (
<S.BarVolumeBlock>
      <S.VolumeContent>
          <S.VolumeImg>
                <S.VolumeSvg alt="volume">
                      <use xlinkHref ="img/icon/sprite.svg#icon-volume"></use>
                </S.VolumeSvg>
            </S.VolumeImg>
            <S.VoluneProgress>
                <S.VoluneProgressLine
                      type="range"
                      name="range"
                />
            </S.VoluneProgress>
        </S.VolumeContent>
</S.BarVolumeBlock>
    );
}
