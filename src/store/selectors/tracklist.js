const trackSelector = (store) => {
    const tracks = store.playlist.tracks;
    const filter = store.filter;
    // создать новый массив треков, отфильтрованный по filtr и вернуть новый массив
    return tracks.filter((track) => {
        let isAuthor = filter.authorFilter.length === 0
        ? true
        : filter.authorFilter.indexOf(track.author) !== -1;
        let isGenre = filter.genreFilter.length === 0
        ? true
        : filter.genreFilter.indexOf(track.genre) !== -1;
        let isReleaseDate =  filter.releaseDateFilter.length === 0
        ? true
        : filter.releaseDateFilter.indexOf(track.release_date?.substring(0, 4) ?? "-") !== -1;
        return  isAuthor && isGenre && isReleaseDate ;
    });
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

export const trackLikeSelector  = (store) => store.playerIsLike.isLike;

export const isShuffleOnSelector  = (store) => store.playlist.shuffledTracks !== null;

