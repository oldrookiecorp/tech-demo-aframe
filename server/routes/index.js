import path from "path";
import fs from "fs";
import { registRoute } from "./register";

import * as Home from "../../client/pages/Home.svelte";
import * as Fruits from "../../client/pages/Fruits.svelte";
import * as Puzzle from "../../client/pages/Puzzle.svelte";

const pathStaticDir = path.resolve(__dirname, "./static");
const files = fs.readdirSync(pathStaticDir);

// 파일 이름 가져오기
export const getFileName = (fileNames, fileName) =>
  fileNames.filter((_filename) => _filename.includes(fileName));

export const init = (instance) => {
  // Home
  registRoute(instance, "/", Home, getFileName(files, Puzzle.fileName));
  // Fruits
  registRoute(instance, "/fruits", Fruits, getFileName(files, Fruits.fileName));
  //Puzzle
  registRoute(instance, "/puzzle", Puzzle, getFileName(files, Puzzle.fileName));

  return instance;
};
