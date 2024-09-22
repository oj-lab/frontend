import React, { useEffect, useRef, useState } from "react";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import "@/monacoWorker";
import { useSelector } from "react-redux";
import { isDrawerOpenSelector, isLightModeSelector } from "@/store/selectors";

export interface CodeEditorProps {
  value: string;
  className?: string;
  language?: string;
  onChange: (value: string) => void;
  parent: HTMLElement | null;
}

const CodeEditor: React.FC<CodeEditorProps> = (props) => {
  const [editor, setEditor] =
    useState<monaco.editor.IStandaloneCodeEditor | null>(null);
  const monacoEl = useRef<HTMLDivElement | null>(null);
  const isLightMode = useSelector(isLightModeSelector);
  const isDrawerOpen = useSelector(isDrawerOpenSelector);

  useEffect(() => {
    if (monacoEl.current) {
      setEditor((editor) => {
        if (editor) return editor;

        editor = monaco.editor.create(monacoEl.current!, {
          value: props.value,
          language: props.language || "cpp",
          theme: isLightMode ? "vs" : "vs-dark",
          automaticLayout: true,
          scrollBeyondLastLine: false,
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

  useEffect(() => {
    monaco.editor.setTheme(isLightMode ? "vs" : "vs-dark");
  }, [editor, isLightMode]);

  useEffect(() => {
    if (editor) {
      monaco.editor.setModelLanguage(
        editor.getModel()!,
        props.language || "cpp",
      );
    }
  }, [props.language, editor]);

  useEffect(() => {
    const handleResize = () => {
      if (editor) {
        // wait for next frame to ensure last layout finished
        window.requestAnimationFrame(() => {
          // get the parent dimensions and re-layout the editor
          const rect = props.parent?.getBoundingClientRect();
          if (!rect) return;
          if (isDrawerOpen && window.innerWidth >= 1024) {
            editor.layout({
              width: rect.width,
              height: rect.height,
            });
          } else {
            const currentWidth = editor.getLayoutInfo().width;
            // make the transition smooth
            if (currentWidth < rect.width - 112) {
              editor.layout({
                width: currentWidth + 1,
                height: rect.height,
              });
            } else {
              editor.layout({
                width: rect.width,
                height: rect.height,
              });
            }
          }
        });
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    if (monacoEl.current) {
      resizeObserver.observe(monacoEl.current);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
    };
  }, [editor, props.parent, isDrawerOpen]);

  return (
    <div
      className={props.className}
      ref={monacoEl}
      style={{ border: "0 solid" }}
    />
  );
};

export default CodeEditor;
