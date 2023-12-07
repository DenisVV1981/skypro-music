import './Filter.css';
import React from 'react'

function Filter(props) {
    return (
        <React.Fragment>
            <div onClick={props.onClickCallback} className="filter__button button-author _btn-text">
                
                <div>{props.filtername}</div>
            
                {props.visible && (
                    <div class="filter-panel">
                        <ul class="filter-list">
                            {props.items.map((item)=>{
                                return <li> {item} </li>
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </React.Fragment>
    );
};



export default Filter;