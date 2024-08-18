export default function AddMunchkinButton({ onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="py-2 rounded-sm text-xl self-stretch text-green-300 border-2 border-green-300 active:bg-green-300 active:text-black transition-all duration-150"
      >
        Add munchkin
      </button>
    </>
  );
}
