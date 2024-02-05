/*
 HTTP (Hypertext Transfer Protocol): Это протокол передачи данных в сети,
 который используется для обмена информацией между клиентом и сервером. 
 В контексте веб-разработки HTTP часто используется для отправки запросов 
 на сервер и получения ответов. 
 
 
 Axios - это библиотека JavaScript, которая предоставляет удобные средства 
 для отправки HTTP-запросов. 
 */

import axios from "axios";
// import { AuthResponse } from "../models/response/AuthResponse";

export const API_URL = "http://localhost:5000/api";

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export default $api;
