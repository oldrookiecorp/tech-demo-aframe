import path from "path";
import fs from "fs";
import { registRoute } from "./register";

import * as Home from "../../client/pages/Home.svelte";
import * as Fruits from "../../client/pages/Fruits.svelte";
import * as Easy from "../../client/pages/Easy.svelte";
import * as Normal from "../../client/pages/Normal.svelte";
import * as Hard from "../../client/pages/Hard.svelte";
import * as Demo from "../../client/pages/Demo.svelte";
import * as UI from "../../client/pages/UI.svelte";

const pathStaticDir = path.resolve(__dirname, "./static");
const files = fs.readdirSync(pathStaticDir);

// 파일 이름 가져오기
export const getFileName = (fileNames, fileName) =>
  fileNames.filter((_filename) => _filename.includes(fileName));

export const init = (instance) => {
  // Home
  registRoute(instance, "/", Home, getFileName(files, Easy.fileName));
  // Fruits
  registRoute(instance, "/fruits", Fruits, getFileName(files, Fruits.fileName));
  //Puzzle
  registRoute(instance, "/Easy", Easy, getFileName(files, Easy.fileName));
  registRoute(
    instance,
    "/Normal",
    Normal,
    getFileName(files, Normal.fileName)
  );
  registRoute(
    instance,
    "/Hard",
    Hard,
    getFileName(files, Hard.fileName)
  );
  // Demo
  registRoute(instance, "/demo", Demo, getFileName(files, Demo.fileName));
  // UI Demo
  registRoute(instance, "/ui", UI, getFileName(files, UI.fileName));

  return instance;
};
