import React from 'react';
import Search from '../Search/Search';
import Weather from '../Weather/Weather';
import Forecasts from '../Forecasts/Forecasts';
import { useSelector } from 'react-redux';
import { CircularProgress} from '@material-ui/core';

const Home = () => {
    const currentWeather = useSelector(state => state.weather.current)
    const forecasts = useSelector(state => state.forecasts.forecasts)

    return (
        <div>
            <Search />
            {!currentWeather || !forecasts ? <div style={{display: 'flex', justifyContent: 'center'}}><CircularProgress status="loading"/></div> : (
                <div >
                    <Weather />
                    <Forecasts />
                </div>
            )}
        </div>
    )
}

export default Home
