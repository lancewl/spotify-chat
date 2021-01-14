import React from "react";

const LogoutButton = (props) => {
  const logout = () => {
    props.setAccessToken(undefined);
  };

  return <button onClick={logout}>Logout</button>;
};

export default LogoutButton;
