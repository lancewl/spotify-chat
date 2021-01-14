import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./components/LoginButton";

const App = () => {
  const [spotifyAuthToken, setSpotifyAuthToken] = useState();

  useEffect(() => {
    setSpotifyAuthToken(Cookies.get("spotifyAuthToken"));
  }, [Cookies.get("spotifyAuthToken")]);

  const logout = () => {
    Cookies.remove("spotifyAuthToken", {
      path: "",
    });
    window.location = "/";
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {Cookies.get("spotifyAuthToken") ? (
          <div>
            <p>You're login!</p>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <LoginButton />
        )}
      </header>
    </div>
  );
};

export default App;
