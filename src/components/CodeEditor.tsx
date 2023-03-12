import React from 'react';
import Editor from 'react-simple-code-editor';
import Prism from "prismjs";
import "prismjs/themes/prism-twilight.css";
import "prismjs/components/prism-typescript";
import "./editor.css";


export const CodeEditor: React.FC = () => {
  const [code, setCode] = React.useState("");
  // TODO: language selector, refer to: https://lucidar.me/en/web-dev/list-of-supported-languages-by-prism/
  const lang = "javascript";
  const hightlightWithLineNumbers = (input: string, language: string) =>
  Prism.highlight(input, Prism.languages[language], language)
    .split("\n")
    .map((line: string, i: number) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
    .join("\n");
  return (
    <Editor
      value={code}
      onValueChange={(code: string) => setCode(code)}
      highlight={(code: string) => hightlightWithLineNumbers(code, lang)}
      padding={10}
      textareaId="codeArea"
      className="editor"
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 18,
        outline: 0
      }}
    />
  );
}