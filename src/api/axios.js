import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.",
  params: {
    api_key: "",
    language: "ko-KR",
  },
});

export default instance;
