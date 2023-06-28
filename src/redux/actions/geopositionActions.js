import axios from 'axios'
import { URL, API_KEY } from '../actions';
import { getLocation } from '../actions/locationActions';
import { getWeather } from '../actions/weatherActions';

export const getGeoposition = (latitude, longitude) => async (dispatch, getState) => {
    try {
        const response = await axios.get(`${URL}locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${latitude},${longitude}`)
        await dispatch({ type: 'GET_LOCATION', payload: { cityName: response.data.ParentCity.LocalizedName, key: response.data.ParentCity.Key } })
        await dispatch(getWeather(getState().location.key))
    } catch (error) {
        console.log(error.message)
        dispatch(getLocation("Tel Aviv"))
    }
}