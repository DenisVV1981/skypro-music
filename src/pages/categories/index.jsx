import { useParams } from 'react-router-dom';

export const Categories = ()=> {
    const params = useParams();

    return (
    <div>
        <h1>Подборки {params.id}</h1>
    </div>
);
};