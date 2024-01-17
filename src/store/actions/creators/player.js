import { PLAY_TRACK, PAUSE_TRACK, NEXT_TRACK  } from "../types/player.js";


 export const playTrack = (track) => ({
    type: PLAY_TRACK,
    payload: {track},
 });
 
 export const pauseTrack = (track) => ({
    type: PAUSE_TRACK,
    payload: {track},
 });

 export const nextTrack = (track) => ({
   type: NEXT_TRACK,
   payload: {track},
 });