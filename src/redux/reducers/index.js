import { combineReducers } from 'redux'

import favoritesReducer from './favorites'
import locationReducer from './location'
import weatherReducer from './weather';
import forecastsReducer from './forecasts';
import geopositionReducer from './geoposition';
import temperatureReducer from './temperature';
import recommendedReducer from './recommended'

const reducers = combineReducers({
    temperature: temperatureReducer,
    favoritesArray: favoritesReducer,
    location: locationReducer,
    weather: weatherReducer,
    forecasts: forecastsReducer,
    geoposition: geopositionReducer,
    recommended: recommendedReducer,
})

export default reducers