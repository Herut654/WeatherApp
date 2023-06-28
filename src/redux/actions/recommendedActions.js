import axios from 'axios'
import { URL, API_KEY } from '../actions'

export const getRecommendedCities = cityName => async dispatch => {
    const response = await axios.get(`${URL}locations/v1/cities/autocomplete?q=${cityName}&apikey=${API_KEY}`)
    await dispatch({ type: 'GET_RECOMMENDED', payload: response.data.map(recommended => ({ cityName: recommended.LocalizedName, key: recommended.Key, country: recommended.Country.LocalizedName })) })
}

export const setInputValue = cityName => {
    return {
        type: 'SET_CITY', payload: cityName
    }
}

export const getSelectedCity = location => {
    return {
        type: 'GET_LOCATION', payload: location
    }
}

export const clearRecommendedList = () => {
    return {
        type: 'CLEAR_RECOMMENDED'
    }
}