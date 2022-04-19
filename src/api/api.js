import axios from "axios";

export default axios.create({
  baseURL: "https://training.cleverland.by/shop",
  // timeout: 1000,
});
