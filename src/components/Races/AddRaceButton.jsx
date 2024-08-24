export default function AddRaceButton({ onClick }) {
  return (
    <i
      className="fa-solid fa-circle-plus text-2xl text-black  bg-green-500 w-5 h-5 flex items-center active:text-green-500 active:bg-black rounded-full transition-all duration-150"
      onClick={() => onClick((prevRaces) => [prevRaces[0], ""])}
    ></i>
  );
}
