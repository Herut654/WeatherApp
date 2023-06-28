import React from 'react';
import useStyles from "./styles";
import { Card, Grid, IconButton, Container, CardMedia } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, removeFavorite } from '../../redux/actions/favoritesActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { converter, padNum } from '../../helpers';

const Weather = () => {
    const classes = useStyles();
    const dispatch = useDispatch()

    const location = useSelector(state => state.location);
    const currentWeather = useSelector(state => state.weather.current)
    const favorites = useSelector(state => state.favoritesArray)
    const convertTempUnits = useSelector(state => state.temperature)
    const icon = padNum(currentWeather.WeatherIcon)

    return (
        <Container>
            <Card className={classes.card}>
                <Grid container alignItems="center">
                    <Grid item xs={9} className={classes.cityName}>
                        {location.cityName}
                    </Grid>
                    <Grid item xs={3} className={classes.icon}>
                        {favorites.some(({ id }) => id === location.key) ?
                            <IconButton onClick={() => dispatch(
                                removeFavorite(location.key, location.cityName))}><FavoriteIcon className={classes.favIcon} />
                            </IconButton> :
                            <IconButton onClick={() => dispatch(
                                addFavorite(location.key, location.cityName))}><FavoriteIcon />
                            </IconButton>
                        }
                    </Grid>
                </Grid>
                <div>Currently</div>
                <br />
                <Grid className={classes.weatherStatus}>
                    {currentWeather.WeatherText}
                </Grid>
                <Grid container alignItems="center">
                    <Grid item xs={9} className={classes.weatherTemp}>
                        {convertTempUnits ? `${Math.trunc(currentWeather.Temperature.Imperial.Value)}\xB0F` : `${converter(currentWeather.Temperature.Imperial.Value)}C`}
                    </Grid>
                    <Grid item xs={3} >
                        <CardMedia className={classes.media} image={`https://developer.accuweather.com/sites/default/files/${icon}-s.png`} />
                    </Grid>
                </Grid>
            </Card>
        </Container>
    )
}

export default Weather
