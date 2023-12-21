// import logo from './logo.svg';
import React, { Fragment, useEffect, useState }  from 'react';
import GlobalStyle from './App.globalstyles.js';

import { AppRoutes } from './routes.jsx';
import { getTrackList } from './api';


function App() {
  const [trackList, setTrackList] = useState([]);
  const [trackToPlay, setTrackToPlay] = useState();
  const [sceleton, setSceleton] = useState(true);

  useEffect(() => {
    getTrackList().then((tracks) => {
      setTrackList(tracks);
      setSceleton(false);
    });
  }, []);

//  function mysetTrackToPlay(track) {
// console.log(track);
// setTrackToPlay(track);
//  };

  return (
    <Fragment>
      <AppRoutes  sceleton={sceleton} trackList={trackList} trackToPlay={trackToPlay} setTrackToPlay={setTrackToPlay}/>
      <GlobalStyle />
    </Fragment>
  );
}

export default App;
