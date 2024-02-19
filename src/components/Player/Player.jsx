import {  useEffect } from 'react';
import * as S from './Player.styles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isShuffleOnSelector, trackStateSelector, trackToPlaySelector } from '../../store/selectors/player';
import { playTrack, pauseTrack, nextTrack, prevTrack, shuffleTrack, changeTrackLike } from '../../store/actions/creators/player';
import { useAddFavoriteTrackMutation, useDeleteFavoriteTrackMutation } from '../../services/playerAPI';

export default function Player({audioRef, handleStart, handleStop, toggleLoop, isLooping}) {
  const trackToPlay = useSelector(trackToPlaySelector);
  const tracks = useSelector(store => store.player.tracks);
  const isPlaying = useSelector(trackStateSelector);
  const isLike = useSelector((store) => store.player.isLike);
  const isShuffleOn = useSelector(isShuffleOnSelector);

  const [addFavoriteTrack] = useAddFavoriteTrackMutation();
  const [deleteFavoriteTrack] = useDeleteFavoriteTrackMutation();
  const dispatch = useDispatch();

  const loadedHandleStart = () => {
    dispatch(playTrack(trackToPlay, tracks));
    handleStart();
  };

  const handleEnded = () => {
    if(!isLooping){
      handleStop();
      dispatch(nextTrack(trackToPlay));
    }
  };

  useEffect(() => {
    
    audioRef.current.load();
    audioRef.current.addEventListener("loadedmetadata", loadedHandleStart);
    audioRef.current.addEventListener("ended", handleEnded);

    return () => {
      audioRef?.current?.removeEventListener("loadedmetadata", loadedHandleStart);
      audioRef?.current?.removeEventListener("ended", handleEnded);
    }

  }, [trackToPlay]);

  const handlePlay = () => {
    if (isPlaying) {
      handleStop();
      dispatch(pauseTrack(trackToPlay));
    } else {
      handleStart();
      dispatch(playTrack(trackToPlay, tracks));
    }
  };
  
  const handleNextTrack = () => {
    dispatch(nextTrack(trackToPlay));
  }
  const handlePrevTrack = () => {
    if(audioRef.current.currentTime < 5){
      dispatch(prevTrack(trackToPlay));
    }
    else{ 
      audioRef.current.currentTime = 0;
    }
  }
  const handleShuffleTrack = () => { 
    dispatch(shuffleTrack());
  }

  const handleLike = (event) => {
      event.stopPropagation();
      if(isLike){
        deleteFavoriteTrack(trackToPlay.id);
      } else {
        addFavoriteTrack(trackToPlay.id);
      }
      dispatch(changeTrackLike(!isLike));
  };
return (
    <S.BarPlayer>
                <S.PlayerControls>
                  <S.PlayerButtonPrev onClick={handlePrevTrack}>
                    <S.PreviosSvg alt="prev">
                      <use xlinkHref ="/img/icon/sprite.svg#icon-prev"></use>
                    </S.PreviosSvg>
                  </S.PlayerButtonPrev>
                  <S.PlayerButtonPlay onClick={handlePlay}>
                    <S.PlaySvg alt="play">
                      <use xlinkHref ={isPlaying ? "/img/icon/sprite.svg#icon-pause":"/img/icon/sprite.svg#icon-play"}></use>
                    </S.PlaySvg>
                  </S.PlayerButtonPlay>
                  <S.PlayerButtonNext onClick={handleNextTrack}>
                    <S.NextSvg alt="next">
                      <use xlinkHref ="/img/icon/sprite.svg#icon-next"></use>
                    </S.NextSvg>
                  </S.PlayerButtonNext>
                  <S.PlayerButtonRepeat onClick={toggleLoop}>
                    <S.RepeatSvg alt="repeat">
                      <use xlinkHref ={isLooping ? "/img/icon/sprite.svg#icon-repeat-active" : "/img/icon/sprite.svg#icon-repeat"}></use>
                    </S.RepeatSvg>
                  </S.PlayerButtonRepeat>
                  <S.PlayerButtonShuffle onClick={handleShuffleTrack}>
                    <S.ShuffleSvg alt="shuffle">
                      <use xlinkHref ={isShuffleOn ? "/img/icon/sprite.svg#icon-shuffle-active" : "/img/icon/sprite.svg#icon-shuffle"}></use>
                    </S.ShuffleSvg>
                  </S.PlayerButtonShuffle>
                </S.PlayerControls>

                <S.PlayerTrackPlay>
                  <S.TrackPlayContain>
                    <S.TrackPlayImg>
                      <S.TrackPlaySvg alt="music">
                        <use xlinkHref ="/img/icon/sprite.svg#icon-note"></use>
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
                      <S.TrackPlayLikeSvg alt={isLike ? "like" : "dislike"}>
                        <use onClick={handleLike} xlinkHref ={isLike ? "/img/icon/sprite.svg#icon-like" : "/img/icon/sprite.svg#icon-dislike" }></use>
                      </S.TrackPlayLikeSvg>
                    </S.TrackPlayLike>
                  </S.TrackPlayLikeDis>
                </S.PlayerTrackPlay>
    </S.BarPlayer>
);    
}

