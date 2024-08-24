export default function AllClassesSelect({
  allClasses,
  classes,
  onChange,
  indexOfClassInput,
}) {
  const indexOfClassToCheck = indexOfClassInput === 0 ? 1 : 0;

  return (
    <select
      className="text-lg outline-none border-b-2 border-b-rose-500 bg-slate-700 px-1 text-white"
      name="classSelect"
      id="classSelect"
      onChange={(e) => onChange(indexOfClassInput, e)}
    >
      <option value="" defaultChecked></option>
      {allClasses
        .filter((cName) => cName !== classes[indexOfClassToCheck])
        .map((className) => {
          return (
            <option key={className} value={className}>
              {className}
            </option>
          );
        })}
    </select>
  );
}
