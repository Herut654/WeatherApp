export const addFavorite = (id, name) => {
    return {
        type: 'ADD_FAVORITE',
        payload: { id: id, name: name }
    }
}

export const removeFavorite = id => {
    return {
        type: 'REMOVE_FAVORITE', payload: id
    }
}