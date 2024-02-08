const trackSelector = (store) => {
    let tracks = store.playlist.tracks;
    const filter = store.filter;
    const search = store.search;
    // создать новый массив треков, отфильтрованный по filtr и вернуть новый массив
    tracks = tracks.filter((track) => {
        let isAuthor = filter.authorFilter.length === 0
        ? true
        : filter.authorFilter.indexOf(track.author) !== -1;
        let isGenre = filter.genreFilter.length === 0
        ? true
        : filter.genreFilter.indexOf(track.genre) !== -1;
        let isReleaseDate =  filter.releaseDateFilter.length === 0
        ? true
        : filter.releaseDateFilter.indexOf(track.release_date?.substring(0, 4) ?? "-") !== -1;
        let isSearchMatching =  search.searchPattern === ""
        ? true
        : track.name.toUpperCase().includes(search.searchPattern.toUpperCase());

        return  isAuthor && isGenre && isReleaseDate && isSearchMatching;
    });

    // сортировка
    if(search.sortOrder !== null){
        const direction = search.sortOrder ? 1 : -1;
        tracks = tracks.sort((a, b) => (a.release_date > b.release_date) ? direction : -1*direction)
    }

    return tracks;
};

const trackErrorSelector = (store) => store.playlist.tracksError;

const trackFavoriteSelector = (store) => {
    
    let tracks = store?.playlist?.favoriteTracks;
    if(tracks === null || tracks === undefined) {
        return tracks;
    }
    const search = store.search;
    if(search === null) {
        return tracks;
    }
    
    tracks = tracks.filter((track) => {
        let isSearchMatching =  search.searchPattern === ""
        ? true
        : track.name.toUpperCase().includes(search.searchPattern.toUpperCase());

        return  isSearchMatching;
    });

    // сортировка
    if(search.sortOrder !== null){
        const direction = search.sortOrder ? 1 : -1;
        tracks = tracks.sort((a, b) => (a.release_date > b.release_date) ? direction : -1*direction)
    }

    return tracks;
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

