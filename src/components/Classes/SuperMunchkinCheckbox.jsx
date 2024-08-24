const SupermunchkinCheckbox = () => {
  return (
    <label
      htmlFor="superMunchkin"
      className="flex gap-2 justify-between items-center text-center"
    >
      Super munchkin
      <input type="checkbox" name="superMunchkin" id="superMunchkin" />
    </label>
  );
};

export default SupermunchkinCheckbox;
