import axios from 'axios'
import { URL, API_KEY } from '../actions'
import { getForecasts } from '../actions/forecastsActions';

export const getWeather = locationKey => async dispatch => {
    try {
        await dispatch(getCurrentWeather(locationKey))
        await dispatch(getForecasts(locationKey))
    } catch (error) {
        console.log(error.message)
    }
}

export const getCurrentWeather = locationKey => async dispatch => {
    try {
        const response = await axios.get(`${URL}/currentconditions/v1/${locationKey}?apikey=${API_KEY}`)
        await dispatch({ type: 'GET_CURRENT_WEATHER', payload: response.data[0] })
    } catch (error) {
        console.log(error.message)
    }
}