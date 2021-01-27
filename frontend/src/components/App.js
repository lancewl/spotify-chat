import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Container from "@material-ui/core/Container";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import SpotifyTest from "./SpotifyTest";

const App = () => {
  return (
    <Container component="main" maxWidth="xs">
      {Cookies.get("spotify-access-token") ? (
        <div>
          <LogoutButton />
          <SpotifyTest />
        </div>
      ) : (
        <LoginButton />
      )}
    </Container>
  );
};

export default App;
