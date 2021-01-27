import React from "react";
import Cookies from "js-cookie";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { makeStyles } from "@material-ui/core/styles";
import SpotifyTest from "./SpotifyTest";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#FFFFFF",
    marginBottom: "5px",
  },
  button: {
    padding: "8px 24px",
    borderRadius: "24px",
  },
}));

const Lobby = () => {
  const classes = useStyles();
  const signout = () => {
    Cookies.remove("spotify-access-token");
    Cookies.remove("spotify-refresh-token");
    window.location = "/";
  };

  return (
    <Box my={10} textAlign="center">
      <Box mb={24}>
        <Typography className={classes.root} variant="h1" gutterBottom>
          Welcome!
        </Typography>
        <Typography className={classes.root} variant="body1" gutterBottom>
          This is the lobby of Spotify Chat.
        </Typography>
      </Box>
      <SpotifyTest />
      <Button
        className={classes.button}
        variant="contained"
        onClick={signout}
        color="primary"
        startIcon={<ExitToAppIcon />}
      >
        Sign Out
      </Button>
    </Box>
  );
};

export default Lobby;
