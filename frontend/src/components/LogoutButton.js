import React from "react";
import Cookies from "js-cookie";

const LogoutButton = (props) => {
  const logout = () => {
    Cookies.remove("spotify-access-token");
    Cookies.remove("spotify-refresh-token");
    window.location = "/";
  };

  return <button onClick={logout}>Logout</button>;
};

export default LogoutButton;
