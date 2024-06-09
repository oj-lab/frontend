import React, { useEffect, useRef, useState } from "react";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import "./useWorker";

export interface CodeEditorProps {
  value: string;
  className?: string;
  onChange: (value: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = (props) => {
  const [editor, setEditor] =
    useState<monaco.editor.IStandaloneCodeEditor | null>(null);
  const monacoEl = useRef(null);

  useEffect(() => {
    if (monacoEl) {
      setEditor((editor) => {
        if (editor) return editor;

        editor = monaco.editor.create(monacoEl.current!, {
          value: props.value,
          language: "cpp",
          theme: "vs-dark",
          automaticLayout: true,
          scrollBeyondLastLine: false,
          scrollbar: {
            vertical: "auto",
          },
        });

        props.onChange(editor!.getValue());

        editor.onDidChangeModelContent(() => {
          props.onChange(editor!.getValue());
        });

        return editor;
      });
    }

    return () => editor?.dispose();
    // !!! Cannot add props to the dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor]);

  return (
    <div
      className={props.className}
      ref={monacoEl}
      style={{ border: "0 solid" }}
    />
  );
};

export default CodeEditor;
