"use client";

import { languages } from "@/lib/languages";
import { cn } from "@/lib/utils";

interface LanguageSidebarProps {
  selectedLanguage: string;
  onLanguageSelect: (languageId: string) => void;
}

export function LanguageSidebar({ selectedLanguage, onLanguageSelect }: LanguageSidebarProps) {
  return (
    <div className="w-16 flex flex-col items-center py-4 bg-[#252526] border-r border-[#3c3c3c]">
      {languages.map((language) => {
        const Icon = language.icon;
        return (
          <button
            key={language.id}
            onClick={() => onLanguageSelect(language.id)}
            className={cn(
              "p-3 rounded mb-2 transition-colors relative group",
              selectedLanguage === language.id
                ? "bg-[#37373d] text-white"
                : "text-gray-400 hover:text-white hover:bg-[#37373d]"
            )}
            title={language.name}
          >
            <Icon className="w-5 h-5" />
            <span className="absolute left-full ml-2 px-2 py-1 bg-[#1e1e1e] text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
              {language.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}