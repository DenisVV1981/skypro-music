// import {useState, useEffect} from 'react';
import PlaylistSceletonRow from './PlaylistSceletonRow';
import * as S from './PlayList.styles';

function PlaylistContent({sceleton, trackList, setTrackToPlay}) {
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setSceleton(false);
  //   }, 5000  );
  // });

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
      
      {!sceleton && (
        <S.ContentPlayList>
          {trackList.map((song) => {
            return <S.PlaylistItem onClick={()=>{setTrackToPlay(song)}} key={song.id}>
              <S.PlaylistTrack>
                <S.TrackTitle>
                  <S.TrackTitleImage>
                    <S.trackTitleSvg alt="music">
                      <use xlinkHref ="img/icon/sprite.svg#icon-note"></use>
                    </S.trackTitleSvg>
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
                    <use xlinkHref ="img/icon/sprite.svg#icon-like"></use>
                  </S.TrackTimeSvg>
                  <span>{song.time}</span>
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