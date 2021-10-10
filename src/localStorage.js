import ls from "local-storage";

export const AUTH_TOKEN = ls.get("token");
export const IS_ADMIN_USER = ls.get("isAdmin");

export const setAuthToken = (key, value) => {
  ls.set(key, value);
};

export const removeToken = (key) => {
  ls.remove(key);
};
