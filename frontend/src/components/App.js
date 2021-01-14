import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import SpotifyTest from "./SpotifyTest";

const App = () => {
  const [accessToken, setAccessToken] = useState(
    Cookies.get("spotify-access-token")
  );

  useEffect(() => {
    if (accessToken) {
      Cookies.set("spotify-access-token", accessToken, { expires: 1 });
    } else {
      Cookies.remove("spotify-access-token");
    }
  }, [accessToken]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {accessToken ? (
          <div>
            <LogoutButton setAccessToken={setAccessToken} />
            <SpotifyTest />
          </div>
        ) : (
          <LoginButton setAccessToken={setAccessToken} />
        )}
      </header>
    </div>
  );
};

export default App;
