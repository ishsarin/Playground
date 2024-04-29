import axios from "axios";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const CodeOutput = async ({ lang, value }) => {
  const req = await API.post(
    "/execute",
    {
      language: lang,
      // version: "15.10.0",
      files: [
        {
          // name: "my_cool_code.js",
          // content: "console.log(process.argv)",
          content: value,
        },
      ],
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return req.data;
};
