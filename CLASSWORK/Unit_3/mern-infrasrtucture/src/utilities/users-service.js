// Import all named exports attached to a usersAPI object
// This syntax can be helpful documenting where the methods come from 
import * as usersAPI from './users-api';

// This is the base path of the Express route we'll define
// const BASE_URL = '/api/users';

export async function signUp(userData) {
  
    const token = await usersAPI.signUp(userData)
    localStorage.setItem('token',token)
    return getUser()
    // Fetch uses an options object as a second arg to make requests
    // other than basic GET requests, include data, headers, etc. 
    // const res = await fetch(BASE_URL, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   // Fetch requires data payloads to be stringified
    //   // and assigned to a body property on the options object
    //   body: JSON.stringify(userData)
    // });
    // // Check if request was successful
    // if (res.ok) {
    //   // res.json() will resolve to the JWT
    //   return res.json();
    // } else {
    //   throw new Error('Invalid Sign Up');
    // }
  }

  export async function login(credentials) {
    try {
      const user = await usersAPI.login(credentials)

      if (user && user.token) {
        localStorage.setItem('token', user.token)
      }
        return user
      } catch (error) {
        throw error
    }
    //   const response = await fetch('/api/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(credentials),
    //   });
  
    //   if (response.ok) {
    //     const user = await response.json();
    //     localStorage.setItem('token', user.token);
    //     return user;
    //   } else {
    //     throw new Error('Login Failed - Invalid credentials');
    //   }
    // } catch (error) {
    //   throw new Error('Login Failed - Network error');
    // }
  }
  export function logOut() {
    localStorage.removeItem('token')
  }

  export function getToken() {
    // getItem returns null if there's no string
    const token = localStorage.getItem('token');
    if (!token) return null;
    // Obtain the payload of the token
    const payload = JSON.parse(atob(token.split('.')[1]));
    // A JWT's exp is expressed in seconds, not milliseconds, so convert
    if (payload.exp < Date.now() / 1000) {
      // Token has expired - remove it from localStorage
      localStorage.removeItem('token');
      return null;
    }
    return token;
  }
  
  export function getUser() {
    const token = getToken();
    // If there's a token, return the user in the payload, otherwise return null
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
  }
  
export function checkToken() {
    return usersAPI.checkToken()
    .then(dateStr => new Date(dateStr))
  }