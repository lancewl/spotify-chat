import axios from "axios";
import Cookies from "js-cookie";

const spotify = axios.create({
  baseURL: "https://api.spotify.com/v1",
});

spotify.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    console.log("token has expired");
    const originalReq = err.config;
    if (err.response.status === 401 && !originalReq._retry) {
      originalReq._retry = true;
      return new Promise((resolve, reject) => {
        axios
          .get("/refresh_token", {
            params: {
              refresh_token: Cookies.get("spotify-refresh-token"),
            },
          })
          .then((r) => {
            // console.log("New Token: " + r.data.access_token);
            originalReq.headers["Authorization"] =
              "Bearer " + r.data.access_token;
            Cookies.set("spotify-access-token", r.data.access_token);
            resolve(spotify(originalReq));
          })
          .catch((e) => {
            reject(e);
          });
      });
    }

    return Promise.reject(err);
  }
);

export default spotify;
