
export const add = token => {
  localStorage.setItem('auth_token', JSON.stringify(token.auth_token));
};
export const get = () => {
  return JSON.parse(localStorage.getItem('auth_token'));
};
export const remove = () => {
  localStorage.removeItem('auth_token');
};
export const isAuthenticated = () => {
  return (JSON.parse(localStorage.getItem('auth_token')) !== undefined || '');
};
