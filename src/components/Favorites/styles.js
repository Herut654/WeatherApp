import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
  card: {
    margin: "auto",
    marginTop: "30px",
    padding: "15px",
    width: "250px",
    height: "200px",
    borderRadius: "10px",
    boxShadow: "5px 19px 38px rgba(0,0,0,0.30)",
    '&:hover': {
      border: "1px solid #666",
   }
  },
  cityName: {
    fontWeight: 400,
    color: "#666",
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
    fontWeight: 300,
    fontSize: "3.59375em",
  },
  media: {
    paddingTop: '100%',
  },
  noFav: {
    justifyContent: "center",
    display: "flex",
    paddingTop: "20px",
  },
})