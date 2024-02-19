
import Filter from './Filter.jsx';
import {useState} from 'react';
import * as S from './FilterPanel.styles.js';
import { useDispatch, useSelector } from 'react-redux';
import { authorFilterTrack, genreFilterTrack, releaseDateFilterTrack } from '../../store/actions/creators/filter.js';
import { useGetMainTracksQuery } from '../../services/playerAPI.js';

export default function FilterPanel() {

  function onlyUnique(value, index, array) {
      return array.indexOf(value) === index;
  };

  const {data} = useGetMainTracksQuery();

  const storeFilter = useSelector((store) => store.filter);
  const storeFilterAvailableValues = useSelector(() => {
    return {
        genres: data?.map((track) => track.genre).filter(onlyUnique).sort(),
        authors: data?.map((track) => track.author).filter(onlyUnique).sort(),
    };
  });

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
      <S.FilterTitleLeft>
        
        <S.FilterTitle>Искать по: </S.FilterTitle>

        <Filter 
          onFilterSelected={(filterItem) => filterSelected("author", filterItem)}
          onClickCallback={() => toggleVisibility("author")} 
          visible={visibleFilter === "author"}
          filtername="исполнителю" 
          selectedValues={storeFilter.authorFilter}
          items={storeFilterAvailableValues.authors}>
        </Filter>
          
        <Filter
          onFilterSelected={(filterItem) => filterSelected("genre", filterItem)}
          onClickCallback={() => toggleVisibility("genre")} 
          visible={visibleFilter === "genre"}
          filtername="жанру" 
          selectedValues={storeFilter.genreFilter}
          items={storeFilterAvailableValues.genres}>
        </Filter>

      </S.FilterTitleLeft>
    
      <S.FilterTitleRight>

        
      <S.FilterTitle>Сортировка: </S.FilterTitle>
        <Filter
          onFilterSelected={(filterItem) => filterSelected("year", filterItem)}
          onClickCallback={() => toggleVisibility("year")} 
          visible={visibleFilter === "year"}
          filtername={storeFilter.releaseDateOrder} 
          selectedValues={storeFilter.releaseDateOrder === "По умолчанию" ? [] : [storeFilter.releaseDateOrder]}
          items={["По умолчанию", "Сначала старые", "Сначала новые"]}></Filter>
      </S.FilterTitleRight>
 
      
  </S.CenterblockFilter>
);

}
