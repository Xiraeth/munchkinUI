const HalfbreedCheckbox = ({ onChange }) => {
  return (
    <label
      htmlFor="halfBreed"
      className="flex gap-2 justify-between items-center text-center"
    >
      Half Breed
      <input
        type="checkbox"
        name="superMunchkin"
        id="superMunchkin"
        onChange={onChange}
      />
    </label>
  );
};

export default HalfbreedCheckbox;
