import React, { useState, useRef, useContext, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { Box } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { LangContext } from "../context/LangContextProvider";
import { CodeOutput } from "../API/CodeOuput";
import { LangVersion } from "../API/LangVersion";
import Terminal from "./Terminal";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState([{}]);

  const editorRef = useRef();
  const { lang } = useContext(LangContext);
  const { version } = useContext(LangContext);

  const [langver, setLangVer] = useState({
    lang: lang,
    ver: version,
  });

  const handleEventDidMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
    // console.log(lang);
  };

  useEffect(() => {
    async function fetchLangVersion() {
      const res = await LangVersion();
      // console.log(res);
      setLanguage(res);
    }
    fetchLangVersion();
  }, []);

  const handleLangVersionSelected = (e) => {
    // console.log(JSON.parse(e.target.value));
    const singleObj = JSON.parse(e.target.value);
    setLangVer(singleObj);
  };

  const handleCodeSubmit = async () => {
    // console.log(langver);
    try {
      const { run } = await CodeOutput(langver, code);
      console.log(run.output);
      setOutput(run.output);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Center>
        <Button colorScheme="whatsapp" width={100} onClick={handleCodeSubmit}>
          Run
        </Button>
      </Center>
      <Box>
        <select
          name="language"
          id="select_lang"
          defaultValue={lang}
          onChange={handleLangVersionSelected}
        >
          <option value="">
            {lang} {version}
          </option>

          {language.map((lang, index) => (
            <option
              className="langver-option"
              value={JSON.stringify({ lang: lang.language, ver: lang.version })}
              key={index}
            >
              {lang.language} {lang.version}
            </option>
          ))}
        </select>
        <Editor
          height="65vh"
          defaultLanguage={lang === "" ? "Javascript" : lang}
          value={code}
          onChange={(e) => {
            setCode(e);
          }}
          onMount={handleEventDidMount}
        />
      </Box>

      <Terminal output={output} />
    </>
  );
};

export default CodeEditor;
