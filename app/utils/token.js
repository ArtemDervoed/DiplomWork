
export const loginUser = token => {
  localStorage.setItem('is_authenticated', JSON.stringify(token.isAuthenticated));
  localStorage.setItem('auth_token', JSON.stringify(token.authToken));
  localStorage.setItem('user', JSON.stringify(token.role));
  localStorage.setItem('user_id', JSON.stringify(token.userId));
};
export const logOutUser = () => {
  localStorage.removeItem('auth_token');
  localStorage.removeItem('user');
  localStorage.removeItem('user_id');
  localStorage.removeItem('is_authenticated');
};

export const getToken = () => (JSON.parse(localStorage.getItem('auth_token')))

export const getUserId = () => (JSON.parse(localStorage.getItem('user_id')))
