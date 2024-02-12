import PlaylistSceletonRow from './PlaylistSceletonRow';
import * as S from './PlayList.styles';
import { useDispatch, useSelector } from 'react-redux';
import { trackStateSelector, trackToPlaySelector } from '../../store/selectors/tracklist';

import { playTrack, pauseTrack, changeTrackLike } from '../../store/actions/creators/player';
import { useAddFavoriteTrackMutation, useDeleteFavoriteTrackMutation } from '../../services/playerAPI';

function PlaylistContent({sceleton, trackList, errorMessage,  isFavorite=false}) {
 
  const storeFilter = useSelector((store) => store.filter);
  const storeSearch = useSelector((store) => store.search);

  const trackSelector = (tracks, filter, search) => {

    // создать новый массив треков, отфильтрованный по filtr и вернуть новый массив
    if(!tracks){
      return tracks;
    }
    tracks = tracks.filter((track) => {
        let isAuthor = filter.authorFilter.length === 0
        ? true
        : filter.authorFilter.indexOf(track.author) !== -1;
        let isGenre = filter.genreFilter.length === 0
        ? true
        : filter.genreFilter.indexOf(track.genre) !== -1;
        
        let isSearchMatching =  search.searchPattern === ""
        ? true
        : track.name.toUpperCase().includes(search.searchPattern.toUpperCase());

        return  isAuthor && isGenre && isSearchMatching;
    });

    // сортировка
    console.log(filter.releaseDateOrder);
    if(filter.releaseDateOrder !== null && filter.releaseDateOrder !== "По умолчанию"){
        const direction = filter.releaseDateOrder === "Сначала старые" ? 1 : -1;
        tracks = tracks.sort((a, b) => (a.release_date > b.release_date) ? direction : -1*direction)
    }

    return tracks;
  };
  trackList = trackSelector(trackList, storeFilter, storeSearch);
  
  const [addFavoriteTrack, { isLoading: addIsLoading  }] = useAddFavoriteTrackMutation();
  const [deleteFavoriteTrack, { isLoading: deleteIsLoading }] = useDeleteFavoriteTrackMutation();

  const dispatch = useDispatch();
  const trackToPlay = useSelector(trackToPlaySelector);
  const trackIsPlaying = useSelector(trackStateSelector);

  const handleTrackClick = (song) => {

    if(song.id === trackToPlay?.id){
      if (trackIsPlaying) {
        dispatch(pauseTrack(song));
      } else {
        dispatch(playTrack(song));
      }
    }
    else{
      dispatch(playTrack(song));
    }
    dispatch(changeTrackLike(song.isLike));
  };

  const handleLike = (song) => {
    return (event) => {
      event.stopPropagation();
      console.log(song);
      if(song.isLike || isFavorite){
        deleteFavoriteTrack(song.id);
      } else {
        addFavoriteTrack(song.id);
      }
      if(song.id === trackToPlay?.id){
        dispatch(changeTrackLike(!song.isLike));
      }

    }
  };

  return (
    <S.CenterblockContent>
      <S.ContentTitle>
        <S.PlaylistTitleCol $width='447'>Трек</S.PlaylistTitleCol>
        <S.PlaylistTitleCol $width='321'>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol>
        <S.PlaylistTitleCol $width='245'>АЛЬБОМ</S.PlaylistTitleCol>
        <S.PlaylistTitleCol $width='60' $extrastyle="text-align: end;">
          <S.PlaylistTitleSvg alt="time">
            <use xlinkHref ="/img/icon/sprite.svg#icon-watch"></use>
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
      
      {!sceleton && errorMessage && (
        <div>{errorMessage}</div>
      )}
      {!sceleton && trackList?.length===0 &&(
        <div>

        <h2>В этом плейлисте нет треков</h2></div>
      )}
      {!sceleton && trackList && (
        <S.ContentPlayList>
          {trackList.map((song) => {
            return <S.PlaylistItem onClick={()=>{handleTrackClick(song)}} key={song.id}>
              <S.PlaylistTrack>
                <S.TrackTitle>
                  <S.TrackTitleImage>

                    { song.id !== trackToPlay?.id && (
                    <S.TrackTitleSvg alt="music">
                      <use xlinkHref ="/img/icon/sprite.svg#icon-note"></use>
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
                    <use onClick={handleLike(song)} xlinkHref ={isFavorite || song.isLike ? "/img/icon/sprite.svg#icon-like" : "/img/icon/sprite.svg#icon-dislike" }></use>
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