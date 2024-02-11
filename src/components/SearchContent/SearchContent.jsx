import { useState } from 'react';
import * as S from './SearchContent.styles';
import { useDispatch } from 'react-redux';
import { trackSearch } from '../../store/actions/creators/search';

export default function SearchContent() {
  
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchTracks(value);
    }
  };

  const searchTracks = (pattern) => {
    dispatch(trackSearch(pattern));
    
  };
  
return (
    <S.CenterblockSearch>
    <S.SearchSvg>
      <use xlinkHref ="/img/icon/sprite.svg#icon-search"></use>
    </S.SearchSvg>
    <S.SearchText
      value={value} onInput={e => setValue(e.target.value)}
      onKeyDown={handleKeyDown} 
      type="search"
      placeholder="Поиск"
      name="search"
    />
  </S.CenterblockSearch>
);
}