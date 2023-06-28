import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
  card: {
    margin: "auto",
    marginTop: "25px",
    padding: "15px",
    width: "200px",
    borderRadius: "15px",
    boxShadow: "5px 19px 38px rgba(0,0,0,0.30)",
    '&:hover': {
      border: "1px solid #666",

   }
  },
  day: {
    fontWeight: 400,
    fontSize: "2.1em",
  },
  date: {
    fontSize: "13px",
    textTransform: "uppercase",
    color: "rgb(170, 170, 170)",
  },
  time: {
    fontSize: "13px",
    textTransform: "uppercase",
    color: "rgb(170, 170, 170)",
  },
  weatherStatus: {
    fontSize: "14px",
    color: "rgb(102, 102, 102)",
  },
  media: {
    paddingTop: '80%',
  },
})