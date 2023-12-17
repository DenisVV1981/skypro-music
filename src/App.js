// import logo from './logo.svg';
import React, { Fragment }  from 'react';
import GlobalStyle from './App.globalstyles.js';

import { AppRoutes } from './routes.jsx';


function App() {

  return (
    <Fragment>
      <AppRoutes />
      <GlobalStyle />
    </Fragment>
  );
}

export default App;
