// import logo from './logo.svg';
import './App.css';
import Player from './components/Player/Player.jsx';
import Volume from './components/Volume/Volume.jsx';
import SidebarUserInfo from './components/SideBar/SidebarUserInfo.jsx';
import SidebarContent from './components/SideBar/SidebarContent.jsx';
import PlaylistContent from './components/PlaylistContent/PlaylistContent.jsx';
import MainNavigation from './components/Navigation/MainNavigation.jsx';
import FilterContent from './components/FilterContent/Filter.jsx';
import SearchContent from './components/SearchContent/SearchContent.jsx';


function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <MainNavigation/>
          <div className="main__centerblock centerblock">
              <SearchContent/>
            <h2 className="centerblock__h2">Треки</h2>
              <FilterContent/>
              <PlaylistContent/>
          </div>
          <div className="main__sidebar sidebar">
              < SidebarUserInfo />
              < SidebarContent />
          </div>
        </main>
        <div className="bar">
          <div className="bar__content">
            <div className="bar__player-progress"></div>
            <div className="bar__player-block">
                <Player/>
                <Volume/>
            </div>
          </div>
        </div>
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
