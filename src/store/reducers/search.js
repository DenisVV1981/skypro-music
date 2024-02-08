
import {TRACKS_SEARCH, TRACKS_SORT} from '../actions/types/search.js';

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
        case TRACKS_SORT: {
            const {ascending} = action.payload;
            return {
                searchPattern: state.searchPattern, 
                sortOrder: ascending,    
            };
        }
        
        default: 
            return state;
    };
};

