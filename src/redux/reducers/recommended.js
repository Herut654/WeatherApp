const initialState = {
    cityName: '',
    locations: []
}
const recommendedReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CITY':
            return {
                ...state, cityName: action.payload
            }
        case 'GET_RECOMMENDED':
            return {
                ...state, locations: action.payload
            }
        case 'CLEAR_RECOMMENDED':
            return {
                ...state, cityName: '', locations: []
            }
        default:
            return state
    }
}

export default recommendedReducer