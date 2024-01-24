// import logo from './logo.svg';
import React, { Fragment, useEffect, useState }  from 'react';
import GlobalStyle from './App.globalstyles.js';


import { AppRoutes } from './routes.jsx';
import { getTrackList } from './api';
import { UserContext} from './components/Context/Context.jsx';
import { useDispatch } from 'react-redux';
import { addTracks } from './store/actions/creators/playlist.js';


function App() {
  const [sceleton, setSceleton] = useState(true);
  const [user, setUser] = useState( window.localStorage.getItem("user"));
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {

      try {
        const tracks = await getTrackList();
        dispatch(addTracks({
          list: tracks
        }));
        setSceleton(false);
      } catch (error) {
        console.log(error);
        setSceleton(false);
        dispatch(addTracks({
          errorMessage: "Не удалось загрузить плейлист, попробуйте позже."
        }));
      }
      
    };
  
    fetchData();
  }, [])



  return (
    <Fragment>
      <UserContext.Provider value={user}>
          <AppRoutes  setUser={setUser} sceleton={sceleton}/>
          <GlobalStyle />
      </UserContext.Provider>
    </Fragment>
  );
}

export default App;
