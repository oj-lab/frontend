// This file is ignoring elint check with .eslintignore
// Be careful when you edit this file
//
// Import this file in the component where you want to use monaco editor

import * as monaco from "monaco-editor";
// @ts-ignore
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
// @ts-ignore
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
// @ts-ignore
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
// @ts-ignore
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
// @ts-ignore
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";

// @ts-ignore
// eslint-disable-next-line no-restricted-globals
self.MonacoEnvironment = {
  getWorker(_: any, label: string) {
    if (label === "json") {
      return new jsonWorker();
    }
    if (label === "css" || label === "scss" || label === "less") {
      return new cssWorker();
    }
    if (label === "html" || label === "handlebars" || label === "razor") {
      return new htmlWorker();
    }
    if (label === "typescript" || label === "javascript") {
      return new tsWorker();
    }
    return new editorWorker();
  },
};

monaco.languages.typescript.typescriptDefaults.setEagerModelSync(true);
