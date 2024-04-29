import CodeEditor from "./components/CodeEditor";
import { Box } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnlineIDE from "./components/OnlineIDE";

import "./style.scss";
import { useEffect } from "react";
import { LangVersion } from "./API/LangVersion";
function App() {
  return (
    <Box minH="100vh" bg="#0f0a19" px={6} py={8} color="gray.500">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OnlineIDE />} />
          <Route path="/code_editor" element={<CodeEditor />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
