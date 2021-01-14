import React, { useEffect } from "react";

const LoginButton = (props) => {
  useEffect(() => {
    const hash = window.location.hash
      .substring(1)
      .split("&")
      .reduce(function (initial, item) {
        if (item) {
          var parts = item.split("=");
          initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
      }, {});
    const access_token = hash.access_token;

    if (access_token) {
      props.setAccessToken(access_token);
    }

    window.location.hash = "";
  });

  const loginUrl =
    "https://accounts.spotify.com/authorize?response_type=token" +
    "&client_id=80794498fba545b0ada4ce40f41aed7d" +
    "&scope=" +
    encodeURIComponent("user-read-private user-read-email streaming") +
    "&redirect_uri=http://localhost:3000/" +
    "&show_dialog=true";

  return (
    <a className="App-link" href={loginUrl} rel="noopener noreferrer">
      Continue with Spotify
    </a>
  );
};

export default LoginButton;