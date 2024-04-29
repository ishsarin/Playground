import React, { useContext } from "react";
import { Center, Wrap, WrapItem } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";
import { LangContext } from "../context/LangContextProvider";
const OnlineIDE = () => {
  const { setLang } = useContext(LangContext);

  const navigate = useNavigate();

  const handleIDELangClick = (e) => {
    // console.log(e.target.value);
    setLang(e.target.value);
    const path = "/code_editor";
    navigate(path);
  };

  return (
    <Center>
      <Wrap
        gap={6}
        color="white"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {/* {LV.map((data) => {
          <WrapItem>
            <Button
              onClick={(e) => handleIDELangClick(e)}
              colorScheme="yellow"
              value={data.language}
            >
              {data.language}
              {data.version}
            </Button>
          </WrapItem>;
        })} */}
        <WrapItem>
          <Button
            onClick={(e) => handleIDELangClick(e)}
            colorScheme="yellow"
            value="JavaScript"
          >
            JavaScript
          </Button>
        </WrapItem>
        <WrapItem>
          <Button
            onClick={(e) => handleIDELangClick(e)}
            colorScheme="yellow"
            value="C++"
          >
            C++
          </Button>
        </WrapItem>
        <WrapItem>
          <Button
            onClick={(e) => handleIDELangClick(e)}
            colorScheme="yellow"
            value="Python"
          >
            Python
          </Button>
        </WrapItem>
        <WrapItem>
          <Button
            onClick={(e) => handleIDELangClick(e)}
            colorScheme="yellow"
            value="Java"
          >
            Java
          </Button>
        </WrapItem>
      </Wrap>
    </Center>
  );
};

export default OnlineIDE;
