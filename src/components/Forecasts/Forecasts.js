import React from 'react';
import useStyles from "./styles";
import { Card, Grid, Container, CardMedia } from '@material-ui/core';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { converter, padNum } from '../../helpers';

const Forecasts = () => {
  const classes = useStyles();
  const forecasts = useSelector(state => state.forecasts.forecasts)
  const convertTempUnits = useSelector(state => state.temperature)

  return (
    <Container >
      <Grid container  >
        {forecasts.map((forecast, index) =>
          <Card key={index} className={classes.card}>
            <Grid className={classes.day}>{moment(forecast.Date).format('ddd')}</Grid>
            <Grid container className={classes.date}>{moment(forecast.Date).format("MMM Do YY")}</Grid>
            <br />
            <Grid container>
              <Grid container className={classes.time}>DAY</Grid>
              <Grid item xs={8} >
                <Grid>{convertTempUnits ? `${forecast.Temperature.Maximum.Value}\xB0` : converter(forecast.Temperature.Maximum.Value)}</Grid>
                <Grid className={classes.weatherStatus}>{forecast.Day.IconPhrase}</Grid>
              </Grid>
              <Grid item xs={4}>
                <CardMedia className={classes.media} image={`https://developer.accuweather.com/sites/default/files/${padNum(forecast.Day.Icon)}-s.png`} />
              </Grid>
            </Grid>
            <br />
            <Grid container>
              <Grid container className={classes.time}>NIGHT</Grid>
              <Grid item xs={8}>
                <Grid>{convertTempUnits ? `${forecast.Temperature.Minimum.Value}\xB0` : converter(forecast.Temperature.Minimum.Value)}</Grid>
                <Grid className={classes.weatherStatus}>{forecast.Night.IconPhrase}</Grid>
              </Grid>
              <Grid item xs={4}>
                <CardMedia className={classes.media} image={`https://developer.accuweather.com/sites/default/files/${padNum(forecast.Night.Icon)}-s.png`} />
              </Grid>
            </Grid>
          </Card>
        )}
      </Grid>
    </Container>
  )
}

export default Forecasts
