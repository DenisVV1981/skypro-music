import './Filter.css';
import {useState} from 'react';

function Filter(props) {

    const [visible, setVisible] = useState(false);
    const toggleVisibility = () => {setVisible(!visible);};

    return (
        <div>
            <div onClick={toggleVisibility} className="filter__button button-author _btn-text">
                {props.filtername}
            </div>
            {visible && (
                <div >
                    <ul>
                        {props.items.map((item)=>{
                            return <li> {item} </li>
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};



export default Filter;