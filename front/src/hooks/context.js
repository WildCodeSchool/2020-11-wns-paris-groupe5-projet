import React, { useState, createContext, useContext } from "react";
import { setAxiosToken } from "../utils/axiosApi";
import {
  clearAuthLocalStorageData,
  setAuthLocalStorageData,
  getAuthLocalStorageData,
} from "../utils/storage";
import * as AuthAPI from "../services/auth";

const AuthContext = createContext();

export function useAuthContexts() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("AuthContext must be used within a CountProvider");
  }
  return context;
}

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    status: "pending",
    error: null,
    user: null,
  });

  const login = async ({ email, password }) => {
    try {
      clearAuthLocalStorageData();
      const { token, user } = await AuthAPI.login({ email, password });
      console.log("user login ", user);
      setAuthLocalStorageData({ token, user });
      setAuthState({ status: "success", error: null, user });
      setAxiosToken(token);
      return null;
    } catch (error) {
      console.log("formated error", error);
      return error;
    }
  };

  const register = async (data) => {
    try {
      const { token, user, tokenIsConnected } = await AuthAPI.register(data);
      setAuthLocalStorageData({ token, user, tokenIsConnected });
      setAuthState({ status: "success", error: null, user });
      setAxiosToken(token);
      return null;
    } catch (error) {
      return error?.message;
      //
    }
  };

  const getStoredData = () => {
    const persistantData = getAuthLocalStorageData();
    if (persistantData !== null) {
      const { user, token } = persistantData;
      setAxiosToken(token);
      setAuthState({ status: "success", error: null, user });
      return persistantData;
    }
    return null;
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        register,
        setAuthState,
        getStoredData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
