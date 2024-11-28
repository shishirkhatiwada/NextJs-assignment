import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { php } from "@codemirror/lang-php";
import { rust } from "@codemirror/lang-rust";
import { FaPython, FaPhp, FaRust } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiCplusplus } from "react-icons/si";

export const languages = [
  {
    id: "python",
    name: "Python",
    icon: FaPython,
    extension: "py",
    language: python(),
    defaultCode: '# Python code here\nprint("Hello World!")',
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: SiJavascript,
    extension: "js",
    language: javascript(),
    defaultCode: '// JavaScript code here\nconsole.log("Hello World!");',
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: SiTypescript,
    extension: "ts",
    language: javascript({ jsx: true, typescript: true }),
    defaultCode: '// TypeScript code here\nconst message: string = "Hello World!";\nconsole.log(message);',
  },
  {
    id: "cpp",
    name: "C++",
    icon: SiCplusplus,
    extension: "cpp",
    language: cpp(),
    defaultCode: '// C++ code here\n#include <iostream>\n\nint main() {\n    std::cout << "Hello World!" << std::endl;\n    return 0;\n}',
  },
  {
    id: "php",
    name: "PHP",
    icon: FaPhp,
    extension: "php",
    language: php(),
    defaultCode: '<?php\n// PHP code here\necho "Hello World!";',
  },
  {
    id: "rust",
    name: "Rust",
    icon: FaRust,
    extension: "rs",
    language: rust(),
    defaultCode: '// Rust code here\nfn main() {\n    println!("Hello World!");\n}',
  },
];