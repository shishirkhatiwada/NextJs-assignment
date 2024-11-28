"use client";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { languages } from "@/lib/languages";

interface EditorHeaderProps {
  selectedLanguage: string;
}

export function EditorHeader({ selectedLanguage }: EditorHeaderProps) {
  const currentLanguage = languages.find((l) => l.id === selectedLanguage);
  
  return (
    <div className="h-12 bg-[#252526] border-b border-[#3c3c3c] flex items-center px-4">
      <span className="text-sm text-gray-400">
        main.{currentLanguage?.extension}
      </span>
      <ThemeToggle />
    </div>
  );
}