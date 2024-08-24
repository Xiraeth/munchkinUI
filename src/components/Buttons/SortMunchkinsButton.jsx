export default function SortMunchkinsButton({ onClick }) {
  return (
    <button
      className="px-3 py-1 bg-teal border-2 border-white"
      onClick={onClick}
    >
      Sort
    </button>
  );
}
