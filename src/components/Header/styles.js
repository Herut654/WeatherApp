import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#fff",
  },
  favIcon: {
    fontSize: "200px",
  },
  fav: {
    color: "#FF0000",
  },
  favNum: {
    fontSize: "15px",
    position: "absolute",
    height: "16px",
    width: "16px",
  },
}));