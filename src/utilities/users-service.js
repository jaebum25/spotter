// Serice modules hold the code that implements
// "business"/application logic
// Service methods often depend upon or use
// methods in the API modules

// Import all named exports
import * as usersAPI from './users-api';

export async function signUp(userData) {
  // Delegate the AJAX request to the users-api.js
  // module.
  const token = await usersAPI.signUp(userData);
  localStorage.setItem('token', token);
  return getUser();
}

export function getToken() {
  console.log(localStorage, "LS-2")
  // getItem will return null if the key does not exist
  const token = localStorage.getItem('token');
  if (!token) return null;
  // Let's check if token has expired...
  const payload = JSON.parse(atob(token.split('.')[1]));
  if (payload.exp < Date.now() / 1000) {
    // Token has expired
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  console.log(token, "777")
  return token ?
    JSON.parse(atob(token.split('.')[1])).user
    :
    null;
}

export function logout() {
  localStorage.removeItem('token');
}

export async function login(credentials) {
  // Delegate the AJAX request to the users-api.js
  // module.
  const token = await usersAPI.login(credentials);
  localStorage.setItem('token', token);
  return getUser();
}

