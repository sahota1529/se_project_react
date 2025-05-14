import { checkResponse } from "./Api";
const API_URL = "http://localhost:3001";

export const signup = function ({ name, avatar, email, password }) {
  return fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  }).then(checkResponse);
};

export const signin = function ({ email, password }) {
  return fetch(`${API_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};

export const checkAuth = (token) => {
  return fetch(`${API_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(checkResponse)
    .catch((error) => {
      console.error("Authentication error:", error.message);
      return null;
    });
};
