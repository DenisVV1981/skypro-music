import * as S from '../../App.styles';

import PlaylistContent from '../../components/PlaylistContent/PlaylistContent';
import { useGetSelectionTracksQuery } from '../../services/playerAPI.js';

import { useParams } from 'react-router-dom';

export const Categories = ()=> {
    const params = useParams();
    const {data, error, isLoading} = useGetSelectionTracksQuery(params.id);
    
    function getTitle(pageId) {
        switch(pageId){
            case "1":
                return "Классическая музыка";
            case "2":
                return "Электронная музыка";
            default: 
                return "Рок музыка";
        }
    };

    return (
        <S.MainBlock>
            <S.MainCenter>
                <S.CenterblockH2>{getTitle(params.id)}</S.CenterblockH2>
                <PlaylistContent trackList={data} sceleton={isLoading} errorMessage={error}/>
            </S.MainCenter>
            <S.MainSidebar></S.MainSidebar>
        </S.MainBlock>
    );
};