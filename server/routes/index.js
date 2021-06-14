import path from "path";
import fs from "fs";
import { registRoute } from "./register";

import * as Home from "../../client/pages/Home.svelte";
import * as Fruits from "../../client/pages/Fruits.svelte";
import * as Demo from "../../client/pages/Demo.svelte";

const pathStaticDir = path.resolve(__dirname, "./static");
const files = fs.readdirSync(pathStaticDir);

// 파일 이름 가져오기
export const getFileName = (fileNames, fileName) =>
  fileNames.filter((_filename) => _filename.includes(fileName));

export const init = (instance) => {
  // Home
  registRoute(instance, "/", Home, getFileName(files, Home.fileName));
  // Demo
  registRoute(instance, "/demo", Demo, getFileName(files, Demo.fileName));
  // Fruits
  registRoute(instance, "/fruits", Fruits, getFileName(files, Fruits.fileName));

  return instance;
};
