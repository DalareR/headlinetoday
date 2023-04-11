import axios from "axios";

const key = `6931e5d37075445a96f6b0850b424f03`;

export const apiClient = axios.create({
  baseURL: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`,
});
