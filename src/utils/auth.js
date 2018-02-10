import decode from 'jwt-decode';

/* export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  try {
    const checkToken = decode(token);
    if (checkToken.exp < new Date().getTime() / 1000) {
      throw new Error('Token has expired!');
    }
  } catch (err) {
    return false;
  }

  return true;
}; */

export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken');
  try {
    decode(token);
    const reToken = decode(refreshToken);
    if (reToken.exp < new Date().getTime() / 1000) {
      throw new Error('Token has expired!');
    }
  } catch (err) {
    return false;
  }

  return true;
};
