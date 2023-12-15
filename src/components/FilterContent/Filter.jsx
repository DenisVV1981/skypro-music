import * as S from './Filter.styles';
import React from 'react'




// вместо использования переменной props, декомпозировал его свойства на отдельные параметры
export default function Filter({onClickCallback, filtername, visible, items}) {
    return (
        <S.FilterButton onClick={onClickCallback}>
            <div>{filtername}</div>
        
            {visible && (
                <S.FilterPanel>
                    <div>
                    <S.FilterList>
                        {items.map( (item)=>{ return <li> {item} </li> } )}
                    </S.FilterList>
                    </div>
                </S.FilterPanel>
            )}
        </S.FilterButton>
    );
};