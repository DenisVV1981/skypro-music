
import {TRACKS_SEARCH} from '../actions/types/search.js';

const initialState = {
    searchPattern: "",
    sortOrder: null,    
};

export function searchReducer(state = initialState, action) {
    switch(action.type){
        case TRACKS_SEARCH: {
            const {pattern} = action.payload;

            return {
                searchPattern: pattern,
                sortOrder: state.sortOrder,    
            };
        }
        default: 
            return state;
    };
};

