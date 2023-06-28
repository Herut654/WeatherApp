import React from 'react';
import useStyles from "./styles";
import { TextField, Box, Grid, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../../redux/actions/weatherActions';
import { getRecommendedCities, clearRecommendedList, getSelectedCity, setInputValue } from '../../redux/actions/recommendedActions'

const Search = () => {
    const classes = useStyles();
    const recommended = useSelector(state => state.recommended);
    const dispatch = useDispatch();
    
    const handleChange = async event => {
        const value = event.target.value
        dispatch(setInputValue(value))
        if (value.length > 0) {
            await dispatch(getRecommendedCities(value))
        } else {
            dispatch(clearRecommendedList())
        }
    }

    const selectCity = async selectedLocation => {
        dispatch(clearRecommendedList())
        await dispatch(getSelectedCity(selectedLocation))
        await dispatch(getWeather(selectedLocation.key))
    }

    return (
        <Box align="center" className={classes.searchBox}>
            <TextField
                value={recommended.cityName}
                type="text"
                onChange={handleChange}
                label="Enter City"
            />
            <Grid className={classes.recommendedBox}>
                {recommended.locations.map((location, index) =>
                    <Typography className={classes.location} key={index} onClick={() => selectCity(location)}>
                        {location.cityName} , {location.country}
                    </Typography>
                )}
            </Grid>
        </Box>
    )
}

export default Search
