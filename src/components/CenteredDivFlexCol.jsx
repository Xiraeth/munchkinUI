export default function CenteredDivFlexCol({ title, onChange, value, id }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <b className="text-lg text-indigo-400">{title}</b>
      <input
        onChange={onChange}
        value={value}
        id={id}
        type="number"
        className="min-w-8 max-w-10 p-1 text-center bg-slate-300/80 text-black border-b-indigo-400/80 border-b-4 outline-none focus:bg-slate-200 focus:border-b-indigo-300 transition-all duration-100"
      />
    </div>
  );
}
