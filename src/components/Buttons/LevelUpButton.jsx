export default function LevelUpButton({ onClick, levelValue }) {
  return (
    <button
      onClick={() => onClick(+levelValue + 1)}
      className="border-2 border-black rounded-full flex justify-center items-center w-10 h-10 active:bg-green-500 active:text-black transition-all duration-150"
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
}
