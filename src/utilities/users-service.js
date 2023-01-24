import * as usersAPI from './users-api'

export async function signUp(userData) {
  // Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT)
  const token = await usersAPI.signUp(userData);
  localStorage.setItem('token', token)
  // Baby step by returning whatever is sent back by the server
  return getUser();
}

//this lets us figure out if there is a valid login
export function getToken() {
  const token = localStorage.getItem('token')
  if (!token) return null;
  // Give us the payload of our token as a JS object
  const payload = JSON.parse(atob(token.split('.')[1]))
  if (payload.exp < Date.now() / 1000) {
    // Token has expired
    localStorage.removeItem('token')
    return null
  }
  return token
}

export function getUser() {
  const token = getToken()
  // only return .user object from this payload bc we dont want iat and exp
  return token ? JSON.parse(atob(token.split('.')[1])).user : null
}

export function logout() {
  localStorage.removeItem('token')
}

export async function login(credentials) {
  const token = await usersAPI.login(credentials)
  localStorage.setItem('token', token)
  return getUser()
}

export async function checkToken() {
  return usersAPI.checkToken().then(dateStr => new Date(dateStr))
}