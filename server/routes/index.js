import path from "path";
import fs from "fs";
import { registRoute } from "./register";

import * as Easy from "../../client/pages/Easy.svelte";
import * as Normal from "../../client/pages/Normal.svelte";
import * as Hard from "../../client/pages/Hard.svelte";


const pathStaticDir = path.resolve(__dirname, "./static");
const files = fs.readdirSync(pathStaticDir);

// 파일 이름 가져오기
export const getFileName = (fileNames, fileName) =>
  fileNames.filter((_filename) => _filename.includes(fileName));

export const init = (instance) => {
  //Puzzle
  registRoute(instance, "/", Easy, getFileName(files, Easy.fileName));
  registRoute(
    instance,
    "/normal",
    Normal,
    getFileName(files, Normal.fileName)
  );
  registRoute(
    instance,
    "/hard",
    Hard,
    getFileName(files, Hard.fileName)
  );

  return instance;
};
