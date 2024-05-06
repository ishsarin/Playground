import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";
const LangContext = createContext();
const LangContextProvider = ({ children }) => {
  // const [lang, setLang] = useState("");
  const [lang, setLang] = useState(() => {
    return JSON.parse(localStorage.getItem("lang")) || [];
  });
  const [version, setVersion] = useState(() => {
    return JSON.parse(localStorage.getItem("version")) || [];
  });

  useEffect(() => {
    localStorage.setItem("lang", JSON.stringify(lang));
  }, [lang]);
  useEffect(() => {
    localStorage.setItem("version", JSON.stringify(version));
  }, [version]);

  return (
    <LangContext.Provider value={{ lang, setLang, version, setVersion }}>
      {children}
    </LangContext.Provider>
  );
};

export { LangContextProvider, LangContext };
