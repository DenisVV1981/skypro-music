import {  useEffect } from 'react';
import * as S from './Player.styles';
import React from 'react';


export default function Player({audioRef, handlePrev,handleNext,handleShuffle, trackToPlay, handleStart, togglePlay, isPlaying, toggleLoop, isLooping}) {

  
  const loadedHandleStart = () => {
    handleStart();
  };

  useEffect(() => {
    audioRef.current.load();
    audioRef.current.addEventListener("loadedmetadata", loadedHandleStart);

    return () => {
      audioRef.current.removeEventListener("loadedmetadata", loadedHandleStart);
    }

  }, [trackToPlay]);

return (
    <S.BarPlayer>
                <S.PlayerControls>
                  <S.PlayerButtonPrev onClick={handlePrev}>
                    <S.PreviosSvg alt="prev">
                      <use xlinkHref ="img/icon/sprite.svg#icon-prev"></use>
                    </S.PreviosSvg>
                  </S.PlayerButtonPrev>
                  <S.PlayerButtonPlay onClick={togglePlay}>
                    <S.PlaySvg alt="play">
                      <use xlinkHref ={isPlaying ? "img/icon/sprite.svg#icon-pause":"img/icon/sprite.svg#icon-play"}></use>
                    </S.PlaySvg>
                  </S.PlayerButtonPlay>
                  <S.PlayerButtonNext onClick={handleNext}>
                    <S.NextSvg alt="next">
                      <use xlinkHref ="img/icon/sprite.svg#icon-next"></use>
                    </S.NextSvg>
                  </S.PlayerButtonNext>
                  <S.PlayerButtonRepeat onClick={toggleLoop}>
                    <S.RepeatSvg alt="repeat">
                      <use xlinkHref ={isLooping ? "img/icon/sprite.svg#icon-repeat-active" : "img/icon/sprite.svg#icon-repeat"}></use>
                    </S.RepeatSvg>
                  </S.PlayerButtonRepeat>
                  <S.PlayerButtonShuffle onClick={handleShuffle}>
                    <S.ShuffleSvg alt="shuffle">
                      <use xlinkHref ="img/icon/sprite.svg#icon-shuffle"></use>
                    </S.ShuffleSvg>
                  </S.PlayerButtonShuffle>
                </S.PlayerControls>

                <S.PlayerTrackPlay>
                  <S.TrackPlayContain>
                    <S.TrackPlayImg>
                      <S.TrackPlaySvg alt="music">
                        <use xlinkHref ="img/icon/sprite.svg#icon-note"></use>
                      </S.TrackPlaySvg>
                    </S.TrackPlayImg>
                    <S.TrackPlayAuthor>
                      <S.TrackPlayAuthorLink href="http://">{trackToPlay.name}</S.TrackPlayAuthorLink>
                    </S.TrackPlayAuthor>
                    <S.TrackPlayAlbum>
                      <S.TrackPlayAlbumLink href="http://">{trackToPlay.author}</S.TrackPlayAlbumLink>
                    </S.TrackPlayAlbum>
                  </S.TrackPlayContain>

                  <S.TrackPlayLikeDis>
                    <S.TrackPlayLike>
                      <S.TrackPlayLikeSvg alt="like">
                        <use xlinkHref ="img/icon/sprite.svg#icon-like"></use>
                      </S.TrackPlayLikeSvg>
                    </S.TrackPlayLike>
                    <S.TrackPlayDislike>
                      <S.TrackPlayDislikeSvg alt="dislike">
                        <use xlinkHref ="img/icon/sprite.svg#icon-dislike"></use>
                      </S.TrackPlayDislikeSvg>
                    </S.TrackPlayDislike>
                  </S.TrackPlayLikeDis>
                </S.PlayerTrackPlay>
    </S.BarPlayer>
);    
}

