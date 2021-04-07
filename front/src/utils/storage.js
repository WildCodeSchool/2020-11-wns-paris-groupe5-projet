const TOKEN_KEY = "token";
const USER_KEY = "user";

export const keys = [TOKEN_KEY, USER_KEY];

export const getAuthLocalStorageData = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  const user = localStorage.getItem(USER_KEY);
  if (token !== null && user !== null) return { token, user: JSON.parse(user) };
  return null;
};

export const setAuthLocalStorageData = ({ token, user }) => {
  if (token) {
    localStorage.setItem(TOKEN_KEY, token);
  }
  if (user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
};

export const clearAuthLocalStorageData = async () => {
  keys.forEach((key) => localStorage.removeItem(key));
};
