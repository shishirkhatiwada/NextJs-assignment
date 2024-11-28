"use client";

import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { languages } from "@/lib/languages";
import { useTheme } from "next-themes";
import { FaPlay } from "react-icons/fa";
import { editorThemes, defaultEditorConfig } from "@/lib/editor-config";

interface CodeEditorProps {
  selectedLanguage: string;
  onOutputChange: (output: string) => void;
}

export function CodeEditor({ selectedLanguage, onOutputChange }: CodeEditorProps) {
  const { theme } = useTheme();
  const [code, setCode] = useState("");

  const currentLanguage = languages.find((lang) => lang.id === selectedLanguage) || languages[0];
  const editorTheme = theme === "dark" ? editorThemes.dark : editorThemes.light;

  const handleRunCode = () => {
    onOutputChange(`Hello World\n=== Code Execution Successful ===`);
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 relative">
        <CodeMirror
          value={code || currentLanguage.defaultCode}
          height="100%"
          theme={editorTheme}
          extensions={[currentLanguage.language]}
          onChange={(value) => setCode(value)}
          basicSetup={defaultEditorConfig}
        />
        <button
          onClick={handleRunCode}
          className="absolute top-4 right-4 px-4 py-2 bg-blue-600 text-white rounded flex items-center gap-2 hover:bg-blue-700 transition-colors"
        >
          <FaPlay className="w-3 h-3" />
          Run
        </button>
      </div>
    </div>
  );
}