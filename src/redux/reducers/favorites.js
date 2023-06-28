const favoritesReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'ADD_FAVORITE':
            return [...state, action.payload]
        case 'REMOVE_FAVORITE':
            return state.filter((item) => item.id !== action.payload)
        default:
            return state
    }
}

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('favorites')
        if (serializedState === null) {
            return []
        }
        return JSON.parse(serializedState)
    } catch (error) {
        return undefined
    }
}

const intialState = loadState()

export default favoritesReducer