import { githubDark, githubLight } from "@uiw/codemirror-theme-github";
import { EditorView } from "@codemirror/view";
import type { Extension } from "@codemirror/state";

export const basicSetup: Extension = EditorView.baseTheme({});

export const editorThemes = {
  light: githubLight,
  dark: githubDark,
};

export const defaultEditorConfig = {
  lineNumbers: true,
  highlightActiveLineGutter: true,
  highlightSpecialChars: true,
  history: true,
  foldGutter: true,
  drawSelection: true,
  dropCursor: true,
  allowMultipleSelections: true,
  indentOnInput: true,
  syntaxHighlighting: true,
  bracketMatching: true,
  closeBrackets: true,
  autocompletion: true,
  rectangularSelection: true,
  crosshairCursor: true,
  highlightActiveLine: true,
  highlightSelectionMatches: true,
  closeBracketsKeymap: true,
  defaultKeymap: true,
  searchKeymap: true,
  historyKeymap: true,
  foldKeymap: true,
  completionKeymap: true,
  lintKeymap: true,
};