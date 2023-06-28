import axios from 'axios';
import { URL, API_KEY } from '../actions';

export const getForecasts = locationKey => async dispatch => {
    const response = await axios.get(`${URL}/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}`)
    await dispatch({ type: 'GET_FORECASTS', payload: response.data.DailyForecasts })
}