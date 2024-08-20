export default function RemoveRaceButton({ onClick }) {
  return (
    <i
      className="fa-solid fa-circle-minus text-2xl text-black  bg-red-500 w-5 h-5 flex items-center active:text-red-500 active:bg-black rounded-full transition-all duration-150"
      onClick={() => onClick((prevRaces) => [prevRaces[0]])}
    ></i>
  );
}
