import React, { useEffect } from "react";

const LoginButton = () => {
  const loginUrl = "http://localhost:8888/login";

  return (
    <a className="App-link" href={loginUrl} rel="noopener noreferrer">
      Continue with Sporify
    </a>
  );
};

export default LoginButton;
