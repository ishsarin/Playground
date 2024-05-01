import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import { LangContext } from "../context/LangContextProvider";
const Terminal = ({ output }) => {
  const handleMouseDown = (e) => {
    console.log(e.pageY);
  };
  const handleMouseUp = (e) => {
    console.log(e.pageY);
  };

  return (
    <>
      <Box
        minH="10vh"
        borderWidth="2px"
        px={2}
        py={5}
        className="terminal-box"
        onMouseDown={(e) => handleMouseDown(e)}
        onMouseUp={(e) => {
          handleMouseUp(e);
        }}
      >
        {output ? output : "Run Code for output"}
      </Box>
    </>
  );
};

export default Terminal;
