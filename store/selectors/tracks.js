const trackSelector = (store) => store.tracks;

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

export const tracksSelector = (store) => trackIdsSelector(store).map((id) => trackByIdSelector(store, id));