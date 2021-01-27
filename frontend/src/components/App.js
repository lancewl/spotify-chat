import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import SpotifyTest from "./SpotifyTest";

const App = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box my={5} textAlign="center">
        {Cookies.get("spotify-access-token") ? (
          <div>
            <LogoutButton />
            <SpotifyTest />
          </div>
        ) : (
          <LoginButton />
        )}
      </Box>
    </Container>
  );
};

export default App;
