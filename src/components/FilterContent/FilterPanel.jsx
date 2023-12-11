
import Filter from './Filter.jsx';
import {useState} from 'react';
import * as S from './FilterPanel.styles.js';


export default function FilterPanel() {

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
    <S.CenterblockFilter>
    <S.FilterTitle>Искать по:</S.FilterTitle>

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
  </S.CenterblockFilter>
);

}
