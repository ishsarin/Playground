import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";
const LangContext = createContext();
const LangContextProvider = ({ children }) => {
  // const [lang, setLang] = useState("");
  const [lang, setLang] = useState(() => {
    return JSON.parse(localStorage.getItem("lang")) || [];
  });

  useEffect(() => {
    localStorage.setItem("lang", JSON.stringify(lang));
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export { LangContextProvider, LangContext };
