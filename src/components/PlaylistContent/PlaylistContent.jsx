import PlaylistSceletonRow from './PlaylistSceletonRow';
import * as S from './PlayList.styles';
import { useDispatch, useSelector } from 'react-redux';
import { trackStateSelector, trackToPlaySelector } from '../../store/selectors/tracklist';

import { playTrack, pauseTrack } from '../../store/actions/creators/player';

function PlaylistContent({sceleton, trackList}) {
  const dispatch = useDispatch();
  const trackToPlay = useSelector(trackToPlaySelector);
  const trackIsPlaying = useSelector(trackStateSelector);

  const handleTrackClick = (song) => {

    if(song.id === trackToPlay?.id){
      if (trackIsPlaying) {
        dispatch(pauseTrack(song));
        // handleStop();
      } else {
        dispatch(playTrack(song));
      }
    }
    else{
      dispatch(playTrack(song));
    }
  };

  const user = JSON.parse(window.localStorage.getItem("user"));

  return (
    <S.CenterblockContent>
      <S.ContentTitle>
        <S.PlaylistTitleCol $width='447'>Трек</S.PlaylistTitleCol>
        <S.PlaylistTitleCol $width='321'>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol>
        <S.PlaylistTitleCol $width='245'>АЛЬБОМ</S.PlaylistTitleCol>
        <S.PlaylistTitleCol $width='60' $extrastyle="text-align: end;">
          <S.PlaylistTitleSvg alt="time">
            <use xlinkHref ="img/icon/sprite.svg#icon-watch"></use>
          </S.PlaylistTitleSvg>
        </S.PlaylistTitleCol>
      </S.ContentTitle>
      
      {sceleton && (
        <S.ContentPlayList >
          <PlaylistSceletonRow key={1}/>
          <PlaylistSceletonRow key={2}/>
          <PlaylistSceletonRow key={3}/>
          <PlaylistSceletonRow key={4}/>
          <PlaylistSceletonRow key={5}/>
          <PlaylistSceletonRow key={6}/>
          <PlaylistSceletonRow key={7}/>
        </S.ContentPlayList>
      )}
      
      {!sceleton && trackList.errorMessage && (
        <div>{trackList.errorMessage}</div>
      )}

      {!sceleton && trackList.list && (
        <S.ContentPlayList>
          {trackList.list.map((song) => {
            return <S.PlaylistItem onClick={()=>{handleTrackClick(song)}} key={song.id}>
              <S.PlaylistTrack>
                <S.TrackTitle>
                  <S.TrackTitleImage>

                    { song.id !== trackToPlay?.id && (
                    <S.TrackTitleSvg alt="music">
                      <use xlinkHref ="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackTitleSvg>)}

                    { song.id === trackToPlay?.id && trackIsPlaying && (<S.TrackTitlePlaySvg alt="music"/>)}

                    { song.id === trackToPlay?.id && !trackIsPlaying && (<S.TrackTitlePauseSvg alt="music"/>)}

                  </S.TrackTitleImage>
                  <S.TrackTitleText>
                    <S.TrackTitleLink>{song.name}
                      <S.TrackTitleSpan>{song.title2}</S.TrackTitleSpan>
                    </S.TrackTitleLink>
                  </S.TrackTitleText>
                </S.TrackTitle>
                <S.TrackAuthor>
                  <S.TrackAuthorLink>{song.author}</S.TrackAuthorLink>
                </S.TrackAuthor>
                <S.TrackAlbum>
                  <S.TrackAlbumLink>{song.album}</S.TrackAlbumLink>
                </S.TrackAlbum>
                <div> 
                  <S.TrackTimeSvg alt="time">
                    <use xlinkHref ={song.stared_user?.filter(item => item.id === user.id).length > 0 ? "img/icon/sprite.svg#icon-like" : "img/icon/sprite.svg#icon-dislike" }></use>
                  </S.TrackTimeSvg>
                  <span>{Math.floor(song.duration_in_seconds / 60).toString().padStart(2, '0') + ':' + (song.duration_in_seconds % 60).toString().padStart(2, '0')}</span>
                </div>
              </S.PlaylistTrack>
            </S.PlaylistItem>
          })}

        </S.ContentPlayList>
      )}
    </S.CenterblockContent>
  );
}

export default PlaylistContent;