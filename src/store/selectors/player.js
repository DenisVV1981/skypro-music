export const trackToPlaySelector = (store) => store.player.trackToPlay;

export const trackStateSelector  = (store) => store.player.isPlaying;

export const isShuffleOnSelector  = (store) => store.player.shuffledTracks !== null;

