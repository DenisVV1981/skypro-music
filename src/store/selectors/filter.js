export const filterSelector = (store) => {
    return store.filter;
};

export const filterAvailableValuesSelector = (store) => {
    return {
        genres: store.playlist.tracks.map((track) => track.genre).filter(onlyUnique).sort(),
        authors: store.playlist.tracks.map((track) => track.author).filter(onlyUnique).sort(),
        releaseYears: store.playlist.tracks.map((track) => track.release_date?.substring(0, 4)?? "-").filter(onlyUnique).sort(),
    };
};

function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
}

export const isFilterOn = (store) => {
    return {
    }
}