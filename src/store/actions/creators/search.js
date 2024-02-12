import { TRACKS_SEARCH } from "../types/search";

export const trackSearch = (pattern) => ({
    type: TRACKS_SEARCH,
    payload: {pattern},
 });