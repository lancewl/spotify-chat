import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";

const LoginButton = () => {
  const loginUrl = "http://localhost:8888/login";

  return (
    <Button variant="contained" href={loginUrl} color="primary">
      Continue with Spotify
    </Button>
  );
};

export default LoginButton;
