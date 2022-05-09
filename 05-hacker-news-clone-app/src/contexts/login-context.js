import { useState, createContext } from "react";

export const LoginContext = createContext({
  isLogin: false,
  login: (user) => {},
  logout: () => {},
});

export const LoginContextProvider = (props) => {
  const [isLogin, setIsLogin] = useState(false);

  const loginHandler = (user) => {
    setIsLogin(true);
  };

  const logoutHandler = () => {
    setIsLogin(false);
  };

  return (
    <LoginContext.Provider
      value={{ isLogin: isLogin, login: loginHandler, logout: logoutHandler }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};
