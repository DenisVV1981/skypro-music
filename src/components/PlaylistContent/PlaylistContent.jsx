import {useState, useEffect} from 'react';
import PlaylistSceletonRow from './PlaylistSceletonRow';
import * as S from './PlayList.styles';

function PlaylistContent() {
  const [sceleton, setSceleton] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setSceleton(false);
    }, 5000  );
  });

 const playList = [
  {
    "id":1,
    "title":"Guilt",
    "author": "Nero",
    "album": "Welcome Reality",
    "time":"4:44"
  },
  {
    "id":2,
    "title":"Elektro",
    "author": "Dynoro, Outwork, Mr. Gee",
    "album": "Elektro",
    "time":"2:22"
  },
  {
    "id":3,
    "title":"I’m Fire",
    "author": "Ali Bakgor",
    "album": "I’m Fire",
    "time":"5:20"
  }, 
  {
    "id":4,
    "title":"Non Stop",
    "title2": "(Remix)",
    "author": "Стоункат, Psychopath",
    "album": "Non Stop",
    "time":"4:15"
  },
  {
    "id":5,
    "title":"Run Run",
    "title2": "(feat. AR/CO)",
    "author": "Jaded, Will Clarke, AR/CO",
    "album": "Run Run",
    "time":"2:54"
  },
  {
    "id":6,
    "title":"Eyes on Fire",
    "title2": "(Zeds Dead Remix)",
    "author": "Blue Foundation, Zeds Dead",
    "album": "Eyes on Fire",
    "time":"5:20"
  },
 ];

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
          {playList.map((song) => {
            return <S.PlaylistItem key={song.id}>
              <S.PlaylistTrack>
                <S.TrackTitle>
                  <S.TrackTitleImage>
                    <S.trackTitleSvg alt="music">
                      <use xlinkHref ="img/icon/sprite.svg#icon-note"></use>
                    </S.trackTitleSvg>
                  </S.TrackTitleImage>
                  <S.TrackTitleText>
                    <S.TrackTitleLink href="http://">{song.title}
                      <S.TrackTitleSpan>{song.title2}</S.TrackTitleSpan></S.TrackTitleLink>
                  </S.TrackTitleText>
                </S.TrackTitle>
                <S.TrackAuthor>
                  <S.TrackAuthorLink href="http://">{song.author}</S.TrackAuthorLink>
                </S.TrackAuthor>
                <S.TrackAlbum>
                  <S.TrackAlbumLink href="http://">{song.album}</S.TrackAlbumLink>
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