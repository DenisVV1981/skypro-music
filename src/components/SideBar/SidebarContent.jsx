import './SidebarContent.css';
import {useState, useEffect} from 'react';

function SidebarContent() {

  const [sceleton, setSceleton] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setSceleton(false);
    },  10000 );
  });

    return ( <div>

{sceleton && (
        <div className="sidebar__block sceleton ">
          <div className="sidebar__list">
            <div className="sidebar__item">
            </div>
            <div className="sidebar__item">
            </div>
            <div className="sidebar__item">
            </div>
          </div>
        </div>   
      )}

      {!sceleton && (
            <div className="sidebar__block">
              <div className="sidebar__list">
                <div className="sidebar__item">
                  <a className="sidebar__link" href="#">
                    <img
                      className="sidebar__img"
                      src="img/playlist01.png"
                      alt="day's playlist"
                    />
                  </a>
                </div>
                <div className="sidebar__item">
                  <a className="sidebar__link" href="#">
                    <img
                      className="sidebar__img"
                      src="img/playlist02.png"
                      alt="day's playlist"
                    />
                  </a>
                </div>
                <div className="sidebar__item">
                  <a className="sidebar__link" href="#">
                    <img
                      className="sidebar__img"
                      src="img/playlist03.png"
                      alt="day's playlist"
                    />
                  </a>
                </div>
              </div>
            </div>
      )} 
      
    </div>   
    );
}

export default SidebarContent;