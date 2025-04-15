// components/CustomButton.js
type CustomButtonProps = {
    text: string;
    onClick: () => void;
    isActive?: boolean;
  };
export default function CustomButton({text, onClick, isActive}: CustomButtonProps) {
    return (
      <button onClick={onClick} className={`w-40 h-14 text-xl px-4 py-2 rounded-full transition transform hover:scale-110 shadow-lg shadow-gray-500/50 ${isActive ? 'bg-slate-600 text-white border-slate-600' : 'bg-stone-800 text-white border-gray-300 hover:bg-white hover:text-black'}`}>
        {text}
      </button>
    );
  }
  