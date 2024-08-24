export default function SelectGender({ onChange, value }) {
  return (
    <div className="flex justify-between items-start mb-4">
      <label htmlFor="gender" className="text-lg border-b-2 border-b-sky-400">
        Gender
      </label>
      <select
        name="gender"
        id="gender"
        className="text-lg outline-none border-b-2 border-b-sky-400 bg-slate-700 px-1 text-white w-36"
        onChange={onChange}
        value={value}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="neither">Neither</option>
      </select>
    </div>
  );
}
