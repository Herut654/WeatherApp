import axios from 'axios';
import { URL, API_KEY } from '../actions';
import { getWeather } from '../actions/weatherActions';

export const getLocation = cityName => async dispatch => {
    const response = await axios.get(`${URL}locations/v1/cities/autocomplete?q=${cityName}&apikey=${API_KEY}`)
    await dispatch({ type: 'GET_LOCATION', payload: { cityName: response.data[0].LocalizedName, key: response.data[0].Key } })
    await dispatch(getWeather(response.data[0].Key))
}
