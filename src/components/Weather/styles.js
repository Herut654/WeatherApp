import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
  card: {
    margin: "auto",
    marginTop: "10px",
    padding: "15px",
    minWidth: "200px",
    maxWidth: "300px",
    borderRadius: "10px",
    boxShadow: "5px 19px 38px rgba(0,0,0,0.30)",
    '&:hover': {
      border: "1px solid #666",

   }
  },
  cityName: {
    fontWeight: 400,
    fontSize: "2.1em",
  },
  favIcon: {
    color: "#FF0000",
  },
  icon: {
    paddingLeft: "10px",
  },
  weatherStatus: {
    fontSize: "16px",
    color: "rgb(170, 170, 170)",
  },
  weatherTemp: {
    fontWeight: 100,
    fontSize: "2.9em",
  },
  media: {
    paddingTop: '100%',
  },
})