// import logo from './logo.svg';
import './App.css';
import Player from './components/Player/Player.jsx';
import Volume from './components/Volume/Volume.jsx';
import SidebarUserInfo from './components/SideBar/SidebarUserInfo.jsx';
import SidebarContent from './components/SideBar/SidebarContent.jsx';
import PlaylistContent from './components/Playlist/PlaylistContent.jsx';
import MainNavigation from './components/Navigation/MainNavigation.jsx';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          < MainNavigation />
          <div className="main__centerblock centerblock">
            <div className="centerblock__search search">
              <svg className="search__svg">
                <use xlinkHref ="img/icon/sprite.svg#icon-search"></use>
              </svg>
              <input
                className="search__text"
                type="search"
                placeholder="Поиск"
                name="search"
              />
            </div>
            <h2 className="centerblock__h2">Треки</h2>
            <div className="centerblock__filter filter">
              <div className="filter__title">Искать по:</div>
              <div className="filter__button button-author _btn-text">
                исполнителю
              </div>
              <div className="filter__button button-year _btn-text">
                году выпуска
              </div>
              <div className="filter__button button-genre _btn-text">жанру</div>
            </div>
             < PlaylistContent />
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
              < Player />

              < Volume />
            </div>
          </div>
        </div>
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
