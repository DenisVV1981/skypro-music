import {  useEffect } from 'react';
import * as S from './Player.styles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { trackStateSelector, trackToPlaySelector } from '../../store/selectors/tracklist';
import { playTrack, pauseTrack } from '../../store/actions/creators/player';

export default function Player({audioRef, handlePrev, handleNext, handleShuffle, handleStart, handleStop, toggleLoop, isLooping}) {
  const trackToPlay = useSelector(trackToPlaySelector);
  const isPlaying = useSelector(trackStateSelector);

  const dispatch = useDispatch();

  const loadedHandleStart = () => {
    dispatch(playTrack(trackToPlay));
    handleStart();
  };

  useEffect(() => {
    audioRef.current.load();
    audioRef.current.addEventListener("loadedmetadata", loadedHandleStart);

    return () => {
      audioRef.current.removeEventListener("loadedmetadata", loadedHandleStart);
    }

  }, [trackToPlay]);

  const handlePlay = () => {
    if (isPlaying) {
      handleStop();
      dispatch(pauseTrack(trackToPlay));
    } else {
      handleStart();
      dispatch(playTrack(trackToPlay));
    }
  };

return (
    <S.BarPlayer>
                <S.PlayerControls>
                  <S.PlayerButtonPrev onClick={handlePrev}>
                    <S.PreviosSvg alt="prev">
                      <use xlinkHref ="img/icon/sprite.svg#icon-prev"></use>
                    </S.PreviosSvg>
                  </S.PlayerButtonPrev>
                  <S.PlayerButtonPlay onClick={handlePlay}>
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

