const temperatureReducer = (state = false, action) => {
    switch (action.type) {
        case 'CONVERT_TEMPERATURE_UNITS':
            return !state
        default:
            return state
    }
}

export default temperatureReducer