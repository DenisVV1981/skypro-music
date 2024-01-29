// import logo from './logo.svg';
import React, { Fragment, useState }  from 'react';
import GlobalStyle from './App.globalstyles.js';
import { AppRoutes } from './routes.jsx';
import { UserContext} from './components/Context/Context.jsx';

function App() {
 
  const [user, setUser] = useState( window.localStorage.getItem("user"));
  
  return (
    <Fragment>
      <UserContext.Provider value={user}>
          <AppRoutes  setUser={setUser} />
          <GlobalStyle />
      </UserContext.Provider>
    </Fragment>
  );
}

export default App;
