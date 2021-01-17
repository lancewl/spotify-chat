import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import SpotifyTest from "./SpotifyTest";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {Cookies.get("spotify-access-token") ? (
          <div>
            <LogoutButton />
            <SpotifyTest />
          </div>
        ) : (
          <LoginButton />
        )}
      </header>
    </div>
  );
};

export default App;
