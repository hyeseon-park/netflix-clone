import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "9fd3952ae5ec40d29ecc3be379bce428",
    language: "ko-KR",
  },
});

export default instance;
