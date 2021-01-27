import React from "react";
import Cookies from "js-cookie";
import Container from "@material-ui/core/Container";
import Login from "./Login";
import Lobby from "./Lobby";

const App = () => {
  return (
    <Container component="main" maxWidth="xs">
      {Cookies.get("spotify-access-token") ? <Lobby /> : <Login />}
    </Container>
  );
};

export default App;
