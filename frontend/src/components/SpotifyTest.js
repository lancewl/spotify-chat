import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import spotify from "../api/SpotifyApi";

const SpotifyTest = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const getInfo = async () => {
      const { data } = await spotify(Cookies.get("spotify-access-token")).get(
        "/me"
      );

      console.log(data);
      setUserInfo(data);
    };

    getInfo();
  }, []);

  const name = userInfo ? userInfo.display_name : "";

  return <div>Hi {name}</div>;
};

export default SpotifyTest;
