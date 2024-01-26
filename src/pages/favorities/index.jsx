import * as S from '../../App.styles';
import FilterPanel from '../../components/FilterContent/FilterPanel';
import PlaylistContent from '../../components/PlaylistContent/PlaylistContent';

export const Favorities = ({sceleton})=> {

return (
   
<S.MainBlock>
    <S.MainCenter>
        <S.CenterblockH2>Мои треки</S.CenterblockH2>
        <FilterPanel/>
        <PlaylistContent  sceleton={sceleton}/>
    </S.MainCenter>
</S.MainBlock>
);
};