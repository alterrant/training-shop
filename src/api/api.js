import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://training.cleverland.by/shop',
  // timeout: 1000,
  //headers, withCredentials пока не нужно
})