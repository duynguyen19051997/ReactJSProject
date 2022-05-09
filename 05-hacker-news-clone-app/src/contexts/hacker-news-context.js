import { createContext, useState } from "react";

export const HackerNewsContext = createContext({
  news: [],
  submitNews: (news) => {},
});

export const HackerNewsContextProvider = (props) => {
  const [news, setNews] = useState([]);

  const submitNewsHandler = (news) => {
    setNews([]);
  };

  return (
    <HackerNewsContext.Provider
      value={{ news: news, submitNews: submitNewsHandler }}
    >
      {props.children}
    </HackerNewsContext.Provider>
  );
};
