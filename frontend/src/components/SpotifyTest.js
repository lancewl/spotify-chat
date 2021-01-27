import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import spotify from "../api/SpotifyApi";

const SpotifyTest = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const getInfo = async () => {
      spotify.defaults.headers.common["Authorization"] =
        "Bearer " + Cookies.get("spotify-access-token");
      const { data } = await spotify.get("/me");

      console.log(data);
      setUserInfo(data);
    };

    getInfo();
  }, []);

  const name = userInfo ? userInfo.display_name : "";

  return <p style={{ color: "white" }}>Api testing - username: {name}</p>;
};

export default SpotifyTest;
