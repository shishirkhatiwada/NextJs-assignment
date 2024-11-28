interface OutputPanelProps {
  output: string;
  onClear: () => void;
}

export function OutputPanel({ output, onClear }: OutputPanelProps) {
  return (
    <div className="w-1/3 border-l border-[#3c3c3c] bg-[#252526] p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-medium">Output</h2>
        <button 
          onClick={onClear}
          className="text-xs text-gray-400 hover:text-white"
        >
          Clear
        </button>
      </div>
      <div className="font-mono text-sm whitespace-pre-wrap">
        {output}
      </div>
    </div>
  );
}