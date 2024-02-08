import { TRACKS_SEARCH, TRACKS_SORT } from "../types/search";

export const trackSearch = (pattern) => ({
    type: TRACKS_SEARCH,
    payload: {pattern},
 });
 
 export const trackSort = (ascending) => ({
    type: TRACKS_SORT,
    payload: {ascending},
 });
 