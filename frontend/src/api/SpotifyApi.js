import axios from "axios";

const spotify = (token = "") => {
  return axios.create({
    baseURL: "https://api.spotify.com/v1",
    headers: { Authorization: "Bearer " + token },
  });
};

export default spotify;
