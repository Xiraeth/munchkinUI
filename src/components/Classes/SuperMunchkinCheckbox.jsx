const SupermunchkinCheckbox = ({ onChange }) => {
  return (
    <label
      htmlFor="superMunchkin"
      className="flex gap-2 justify-between items-center text-center"
    >
      Super munchkin
      <input
        type="checkbox"
        name="superMunchkin"
        id="superMunchkin"
        onChange={onChange}
      />
    </label>
  );
};

export default SupermunchkinCheckbox;
