export default function DeleteMunchkinButton({ onClick }) {
  return (
    <button onClick={onClick} className="absolute top-1 right-2 ">
      <i className="fa-solid fa-circle-xmark text-2xl text-red-600"></i>
    </button>
  );
}
