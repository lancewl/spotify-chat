import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/Person";
import { makeStyles } from "@material-ui/core/styles";

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

const Signin = () => {
  const loginUrl = "http://localhost:8888/login";
  const classes = useStyles();

  return (
    <Box my={10} textAlign="center">
      <Box mb={24}>
        <Typography className={classes.root} variant="h1" gutterBottom>
          Welcome!
        </Typography>
        <Typography className={classes.root} variant="body1" gutterBottom>
          Spotify Chat is a chatroom sync with Spotify Playlist.
        </Typography>
      </Box>
      <Button
        className={classes.button}
        variant="contained"
        href={loginUrl}
        color="primary"
        startIcon={<PersonIcon />}
      >
        Continue with Spotify
      </Button>
    </Box>
  );
};

export default Signin;
