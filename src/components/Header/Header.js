import React from 'react'
import useStyles from "./styles";
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useSelector, useDispatch } from 'react-redux';
import { convertUnits } from '../../redux/actions'

const Header = ({ toggleDark, settoggleDark }) => {
    const classes = useStyles();
    const favorites = useSelector(state => state.favoritesArray)
    const TempConversion = useSelector(state => state.temperature)
    const dispatch = useDispatch()

    const handleModeChange = () => {
        settoggleDark(!toggleDark);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title} >
                    <IconButton color="inherit" href="/">Weather</IconButton>
                </Typography>
                <IconButton aria-label="search" color="inherit" onClick={e => dispatch(convertUnits())}>{TempConversion ? '\xB0C' : '\xB0F'}</IconButton>
                <IconButton onClick={handleModeChange} color="inherit">
                    {toggleDark ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
                {favorites.length > 0 ?
                    <IconButton color="inherit" href="/favorites" >
                        <FavoriteIcon fontSize="large" className={classes.fav} /><span className={classes.favNum}>{favorites.length}</span>
                    </IconButton> : <IconButton color="inherit" href="/favorites" >
                        <FavoriteIcon fontSize="medium" />
                    </IconButton>
                }
            </Toolbar>
        </AppBar>
    )
}

export default Header
