const forecastsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_FORECASTS':
            return {
                ...state, forecasts: action.payload
            }
        default:
            return state
    }
}

export default forecastsReducer

