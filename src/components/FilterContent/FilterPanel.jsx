import './FilterPanel.css';
import Filter from './Filter.jsx';

function FilterPanel() {
return (
    <div className="centerblock__filter filter">
    <div className="filter__title">Искать по:</div>

    <Filter filtername="исполнителю" items={["яблоко", "банан", "карица полей"]}></Filter>
    <Filter filtername="году выпуска" items={["1991", "2005", "2021"]}></Filter>
    <Filter filtername="жанру" items={["Pop", "Rock", "Jazz"]}></Filter>

    {/* <div className="filter__button button-author _btn-text">
      исполнителю
    </div>
    <div className="filter__button button-year _btn-text">
      году выпуска
    </div>
    <div className="filter__button button-genre _btn-text">жанру</div> */}

  </div>
);

}

export default FilterPanel;