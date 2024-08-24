export default function AllRacesSelect({
  allRaces,
  races,
  onChange,
  indexOfRaceInput,
}) {
  const indexOfRaceToCheck = indexOfRaceInput === 0 ? 1 : 0;

  return (
    <select
      className="text-lg outline-none border-b-2 border-b-rose-500 bg-slate-700 px-1 text-white"
      name="raceSelect"
      id="raceSelect"
      onChange={(e) => {
        onChange(indexOfRaceInput, e);
      }}
    >
      <option value="" defaultChecked></option>

      {allRaces
        .filter((rName) => rName !== races[indexOfRaceToCheck])
        .map((raceName) => {
          return (
            <option key={raceName} value={raceName}>
              {raceName}
            </option>
          );
        })}
    </select>
  );
}
