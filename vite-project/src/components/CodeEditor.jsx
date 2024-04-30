import React, { useState, useRef, useContext } from "react";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import { Box } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { LangVersion } from "../API/LangVersion";
import { LangContext } from "../context/LangContextProvider";
import { CodeOutput } from "../API/CodeOuput";
import axios from "axios";
const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const editorRef = useRef();
  const { lang } = useContext(LangContext);

  const handleEventDidMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
    // console.log(lang);
  };

  const handleCodeSubmit = async () => {
    //
    // LangVersion();
    try {
      const { run } = await CodeOutput(lang, code);
      console.log(run.output);
      setOutput(run.output);
      // let term = new Terminal();
      // term.open(document.getElementById("terminal"));
      // term.write(`${output ? output : "No output"}`);
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
          value={code}
          onChange={(e) => {
            setCode(e);
          }}
          onMount={handleEventDidMount}
        />
      </Box>
      <Button colorScheme="whatsapp" onClick={handleCodeSubmit}>
        Submit
      </Button>
      <div>{output ? output : "no output"}</div>
      <div id="terminal"></div>
    </>
  );
};

export default CodeEditor;
