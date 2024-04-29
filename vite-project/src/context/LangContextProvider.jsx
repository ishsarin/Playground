import React, { createContext, useContext, useState } from "react";

const LangContext = createContext();
const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState("");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export { LangContextProvider, LangContext };
