import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import { LangContext } from "../context/LangContextProvider";
import interact from "interactjs";

const Terminal = ({ output }) => {
  const handleMouseDown = (e) => {
    // console.log(e.pageY);
    interact(".resizable").resizable({
      edges: { top: true },
      listeners: {
        move: function (event) {
          let { x, y } = event.target.dataset;

          x = (parseFloat(x) || 0) + event.deltaRect.left;
          y = (parseFloat(y) || 0) + event.deltaRect.top;

          if (y <= 0) {
            Object.assign(event.target.style, {
              // width: `${event.rect.width}px`,
              height: `${event.rect.height}px`,
              transform: `translate(${x}px, ${y}px)`,
            });

            Object.assign(event.target.dataset, { x, y });
          }
        },
      },
    });
  };
  // const handleMouseUp = (e) => {
  //   console.log(e.pageY);
  // };

  return (
    <>
      <Box
        minH="15vh"
        borderWidth="2px"
        px={2}
        py={5}
        className="resizable"
        onMouseEnter={(e) => handleMouseDown(e)}
      >
        {/* <Box
          
          className="terminal-box"
          // onMouseUp={(e) => {
          //   handleMouseUp(e);
          // }}
        > */}
        {output ? output : "Run Code for output"}
        {/* </Box> */}
      </Box>
    </>
  );
};

export default Terminal;
