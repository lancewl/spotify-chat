import axios from "axios";
import Cookies from "js-cookie";

export default axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: { Authorization: "Bearer " + Cookies.get("spotify-access-token") },
});
