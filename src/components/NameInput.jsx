export default function NameInput({ nameValue, onChange }) {
  return (
    <input
      value={nameValue}
      onChange={(e) => onChange(e.target.value)}
      type="text"
      id="munchkinName"
      placeholder="Name"
      maxLength={14}
      className="mb-4 text-2xl font-bold italic pb-1 outline-none bg-transparent border-b-black border-b-2 w-10/12 mx-auto focus:bg-slate-300/10 transition-all duration-100 rounded-md pl-2"
      autoComplete="off"
    />
  );
}
