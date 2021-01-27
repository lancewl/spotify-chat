import React from "react";
import Cookies from "js-cookie";
import Container from "@material-ui/core/Container";
import Signin from "./Signin";
import Lobby from "./Lobby";

const App = () => {
  return (
    <Container component="main" maxWidth="xs">
      {Cookies.get("spotify-access-token") ? <Lobby /> : <Signin />}
    </Container>
  );
};

export default App;
