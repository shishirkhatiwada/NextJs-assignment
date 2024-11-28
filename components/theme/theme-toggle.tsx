"use client";

import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="ml-auto p-2 rounded hover:bg-[#37373d] transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <FaSun className="w-4 h-4 text-gray-400" />
      ) : (
        <FaMoon className="w-4 h-4 text-gray-400" />
      )}
    </button>
  );
}