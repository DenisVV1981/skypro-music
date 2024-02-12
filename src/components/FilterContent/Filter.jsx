import * as S from './Filter.styles';
import React from 'react'

// вместо использования переменной props, декомпозировал его свойства на отдельные параметры
export default function Filter({onClickCallback, filtername, visible, items, onFilterSelected, selectedValues}) {

  const handleItemClick = (filterValue) => {
    return (event) => {
        event.stopPropagation();
        onFilterSelected(filterValue);
    }
  };
    return (
        <S.FilterTop>
            <S.FilterButton onClick={onClickCallback}>
                <div>{filtername}</div>
            
                {visible && (
                    <S.FilterPanel>
                        <S.FilterList>
                            {items.map((item)=>{ return <li id={item} style={selectedValues.indexOf(item) === -1 ? {} : {color: "rgb(182, 114, 255)"}}  onClick={handleItemClick(item)}> {item} </li> } )}
                        </S.FilterList>
                    </S.FilterPanel>
                )}
            </S.FilterButton>
            { selectedValues.length > 0 &&(<S.FilterCounter>{selectedValues.length}</S.FilterCounter>)} 
            {/* { !selectedValues.length  &&(<div style={{width: `30px`}}></div>)}  */}
        </S.FilterTop>
    );
};

