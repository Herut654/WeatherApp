import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  searchBox: {
    paddingTop: "10px",
  },
  recommendedBox: {
    width: "230px",
  },
  location: {
    textAlign: "left",
    '&:hover': {
      backgroundColor: "#d3d3d3",
      color: "#000",
      cursor: "pointer",
    }
  },
});