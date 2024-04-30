import axios from "axios";

// const API = axios.create({
//   baseURL: "https://emkc.org/api/v2",
// });

export const CodeOutput = async (lang, code) => {
  const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston",
  });
  const req = await API.post(
    "/execute",
    {
      language: "javascript",
      version: "1.32.3",
      files: [
        {
          content: code,
        },
      ],
    },
    {
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return req.data;
};
