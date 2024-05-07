import React, { useState, useContext, useEffect, version } from "react";
import { Center, Wrap, WrapItem } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";
import { LangContext } from "../context/LangContextProvider";
import { Heading } from "@chakra-ui/react";
import { LangVersion } from "../API/LangVersion";
const OnlineIDE = () => {
  const { setLang } = useContext(LangContext);
  const { setVersion } = useContext(LangContext);

  const navigate = useNavigate();
  const [language, setLanguage] = useState([{}]);

  useEffect(() => {
    async function fetchLangVersion() {
      const res = await LangVersion();
      // console.log(res);
      setLanguage(res);
    }
    fetchLangVersion();
  }, []);

  const handleIDELangClick = (e, lang, ver) => {
    // console.log(e.target.value);
    setLang(lang);
    setVersion(ver);
    const path = "/code_editor";
    navigate(path);
  };

  return (
    <div className="homepage">
      <Heading size="4xl" py={4}>
        Welcome to Plaground
      </Heading>
      <Heading size="xl" py={4}>
        Select the Language you want to code in!
      </Heading>
      <Center>
        <Wrap
          gap={8}
          spacing="30px"
          color="white"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {language.map((lang, index) => (
            <Button
              className="lang-btn"
              onClick={(e) =>
                handleIDELangClick(e, lang.language, lang.version)
              }
              colorScheme="green"
              value="JavaScript"
              key={index}
            >
              {lang.language} {""} {lang.version}
            </Button>
          ))}
        </Wrap>
      </Center>
    </div>
  );
};

export default OnlineIDE;
