import './FilterPanel.css';
import Filter from './Filter.jsx';
import {useState} from 'react';

function FilterPanel() {

  const [visibleFilter, setVisible] = useState(null);
  const toggleVisibility = (value) => {
    if(value === visibleFilter){
      setVisible(null);
    }
    else{
      setVisible(value);  
    }
  };

  return (
    <div className="centerblock__filter filter">
    <div className="filter__title">Искать по:</div>

    <Filter 
      onClickCallback={() => toggleVisibility("author")} 
      visible={visibleFilter === "author"}
      filtername="исполнителю" 
      items={["Nero", "Hero", "fEREro", "Dynoro, Outwork, Mr. Gee", "Jaded, Will Clarke, AR/CO", "Ali Bakgor", "Ali Bakgor", "Ali Bakgor", "Ali Bakgor", "Ali Bakgor"]}></Filter>

    <Filter
      onClickCallback={() => toggleVisibility("year")} 
      visible={visibleFilter === "year"}
      filtername="году выпуска" 
      items={["1991", "2005", "2021", "2022", "2023", "2024", "2025"]}></Filter>

    <Filter
      onClickCallback={() => toggleVisibility("genre")} 
      visible={visibleFilter === "genre"}
      filtername="жанру" 
      items={["Pop", "Rock", "Jazz"]}></Filter>
  </div>
);

}

export default FilterPanel;