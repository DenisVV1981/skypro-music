import * as S from './Filter.styles';
import React from 'react'

// вместо использования переменной props, декомпозировал его свойства на отдельные параметры
export default function Filter({onClickCallback, filtername, visible, items, onFilterSelected, selectedValues}) {

  const handleItemClick = (filterValue) => {
    return (event) => {
        onFilterSelected(filterValue);
        event.stopPropagation();
    }
  };
    return (
        <S.FilterButton onClick={onClickCallback}>
            <div>{filtername}({selectedValues.length})</div>
        
            {visible && (
                <S.FilterPanel>
                    <div>
                    <S.FilterList>
                        {items.map((item)=>{ return <li id={item} style={selectedValues.indexOf(item) === -1 ? {} : {color: "purple"}}  onClick={handleItemClick(item)}> {item} </li> } )}
                    </S.FilterList>
                    </div>
                </S.FilterPanel>
            )}
        </S.FilterButton>
    );
};

