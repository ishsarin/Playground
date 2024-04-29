import axios from "axios";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});
let LV;
export const LangVersion = async () => {
  const req = await API.get("/runtimes", {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
