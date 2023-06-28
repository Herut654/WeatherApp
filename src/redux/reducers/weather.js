const weatherReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_CURRENT_WEATHER':
            return {
                ...state, current: action.payload
            }
        default:
            return state
    }
}

export default weatherReducer

