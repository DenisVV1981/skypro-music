
import Filter from './Filter.jsx';
import {useState} from 'react';
import * as S from './FilterPanel.styles.js';
import { useDispatch, useSelector } from 'react-redux';
import { authorFilterTrack, genreFilterTrack, releaseDateFilterTrack } from '../../store/actions/creators/filter.js';
import { filterAvailableValuesSelector, filterSelector } from '../../store/selectors/filter.js';


export default function FilterPanel() {
  const storeFilter = useSelector(filterSelector);
  const storeFilterAvailableValues = useSelector(filterAvailableValuesSelector);

  const dispatch = useDispatch();

  const [visibleFilter, setVisible] = useState(null);
  
  const toggleVisibility = (value) => {
    if(value === visibleFilter){
      setVisible(null);
    }
    else{
      setVisible(value);  
    }
  };

  const filterSelected = (filterName, filterValue) => {
  
    if (filterName === "author") {
      dispatch(authorFilterTrack(filterValue));
    } else if(filterName === "year") {
      dispatch(releaseDateFilterTrack(filterValue));
    } else  {
      dispatch(genreFilterTrack(filterValue));
    }
  };

  return (
    <S.CenterblockFilter>
    <S.FilterTitle>Искать по:</S.FilterTitle>

    <Filter 
      onFilterSelected={(filterItem) => filterSelected("author", filterItem)}
      onClickCallback={() => toggleVisibility("author")} 
      visible={visibleFilter === "author"}
      filtername="исполнителю" 
      selectedValues={storeFilter.authorFilter}
      items={storeFilterAvailableValues.authors}></Filter>

    <Filter
      onFilterSelected={(filterItem) => filterSelected("year", filterItem)}
      onClickCallback={() => toggleVisibility("year")} 
      visible={visibleFilter === "year"}
      filtername="году выпуска" 
      selectedValues={storeFilter.releaseDateFilter}
      items={storeFilterAvailableValues.releaseYears}></Filter>

    <Filter
      onFilterSelected={(filterItem) => filterSelected("genre", filterItem)}
      onClickCallback={() => toggleVisibility("genre")} 
      visible={visibleFilter === "genre"}
      filtername="жанру" 
      selectedValues={storeFilter.genreFilter}
      items={storeFilterAvailableValues.genres}></Filter>
  </S.CenterblockFilter>
);

}
