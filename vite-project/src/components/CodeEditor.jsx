import React, { useState, useRef, useContext } from "react";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import { Box } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { LangVersion } from "../API/LangVersion";
import { LangContext } from "../context/LangContextProvider";
import { CodeOutput } from "../API/CodeOuput";
const CodeEditor = () => {
  const [value, setValue] = useState("");

  const editorRef = useRef();
  const { lang } = useContext(LangContext);

  const handleEventDidMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
    // console.log(lang);
  };

  const handleCodeSubmit = async () => {
    // let term = new Terminal();
    // term.open(document.getElementById("terminal"));
    // term.write("Hello  ");
    // LangVersion();
    try {
      const {} = await CodeOutput({ lang, value });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box>
        <button disabled={true}>{lang === "" ? "Javascript" : lang}</button>
        <Editor
          height="75vh"
          defaultLanguage={lang === "" ? "Javascript" : lang}
          // defaultValue={`//coding in ${lang}`}
          value={value}
          onChange={(e) => {
            setValue(e);
            // console.log(e);
          }}
          onMount={handleEventDidMount}
        />
      </Box>
      <Button colorScheme="whatsapp" onClick={handleCodeSubmit}>
        Submit
      </Button>
      <div id="terminal"></div>
    </>
  );
};

export default CodeEditor;
