"use client";

import { useState } from "react";
import { CodeEditor } from "@/components/editor/code-editor";
import { LanguageSidebar } from "@/components/editor/language-sidebar";
import { EditorHeader } from "@/components/editor/editor-header";
import { OutputPanel } from "@/components/editor/output-panel";

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState("python");
  const [output, setOutput] = useState("");

  const handleClearOutput = () => {
    setOutput("");
  };

  return (
    <main className="flex h-screen bg-[#1e1e1e] text-white">
      <LanguageSidebar
        selectedLanguage={selectedLanguage}
        onLanguageSelect={setSelectedLanguage}
      />
      <div className="flex-1 flex flex-col">
        <EditorHeader selectedLanguage={selectedLanguage} />
        <div className="flex-1 flex">
          <CodeEditor 
            selectedLanguage={selectedLanguage}
            onOutputChange={setOutput}
          />
          <OutputPanel 
            output={output}
            onClear={handleClearOutput}
          />
        </div>
      </div>
    </main>
  );
}