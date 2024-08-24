export default function ClassesWrapper({ children }) {
  return (
    <div className="flex gap-6 items-center justify-between border-b-2 border-b-black pb-6">
      {children}
    </div>
  );
}
