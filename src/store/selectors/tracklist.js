const trackSelector = (store) => {
    return store.playlist.tracks;
};

const trackErrorSelector = (store) => store.playlist.tracksError;

const trackFavoriteSelector = (store) => {
    return store.playlist.favoriteTracks;
};

const trackErrorFavoriteSelector = (store) => store.playlist.favoriteTracksError;

export const trackIdsSelector = (store) => trackSelector(store)?.allIds || [];

export const trackByIdSelector = (store, id) => {
    const trackStore = trackSelector(store);

    if(!trackStore){
        return {};
    }

    const trackItem = trackStore.byIds[id];
    return {
        ...trackItem,
        id,
    }
};

export const tracksSelector = (store) => {
    return {
        list: trackSelector(store),
        errorMessage: trackErrorSelector(store),
    }
};

export const tracksFavoriteSelector = (store) => {
    return {
        list: trackFavoriteSelector(store),
        errorMessage:trackErrorFavoriteSelector(store),
    }
};

export const trackToPlaySelector = (store) => {
    return store.playlist.trackToPlay;
};

export const trackStateSelector  = (store) => store.player.isPlaying;

export const isShuffleOnSelector  = (store) => store.playlist.shuffledTracks !== null;