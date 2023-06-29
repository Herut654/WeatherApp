import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Routes from './routes';
import { useDispatch } from 'react-redux';
import { getGeoposition } from './redux/actions/geopositionActions';
import { Paper } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const App = () => {
  const dispatch = useDispatch()
  
  const TelAviv = {
    latitude: 32.0853,
    longitude: 34.7818
  }

  const [toggleDark, settoggleDark] = useState(false);
  const theme = createTheme({
    palette: {
      type: toggleDark ? "dark" : "light",
    },
  })

  useEffect(() => {
    dispatch(getGeoposition(TelAviv.latitude, TelAviv.longitude))
  })

  return (
    <ThemeProvider theme={theme} >
      <Paper style={{ minHeight: "100vh" }}>
        <Header toggleDark={toggleDark}
          settoggleDark={settoggleDark} />
        <Routes />
      </Paper>
    </ThemeProvider>
  )
}

export default App
