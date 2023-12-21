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
    const fetchData = async () => {

      try {
        const tracks = await getTrackList();
        setTrackList({
          list: tracks
        });
        setSceleton(false);
      } catch (error) {
        console.log(error);
        setSceleton(false);
        setTrackList({
          errorMessage: "Не удалось загрузить плейлист, попробуйте позже."
        });
      }
      
    }
  
    fetchData()
  }, [])



  return (
    <Fragment>
      <AppRoutes  sceleton={sceleton} trackList={trackList} trackToPlay={trackToPlay} setTrackToPlay={setTrackToPlay}/>
      <GlobalStyle />
    </Fragment>
  );
}

export default App;
