// src/api/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api", // sesuaikan dengan backendmu
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
