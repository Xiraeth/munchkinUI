import { useState, useEffect } from "react";
import CenteredDivFlexCol from "./CenteredDivFlexCol";

const allRaces = ["Human", "Dwarf", "Halfling", "Elf", "Cleric"];
const allClasses = ["Wizard", "Thief", "Bard", "Warrior", "Gnome"];

export default function MunchkinCard({ deleteMunchkin }) {
  const [levelValue, setLevelValue] = useState(1);
  const [strengthValue, setStrengthValue] = useState(1);
  const [nameValue, setNameValue] = useState("");

  // replace ALL OF this:
  const [amountOfClasses, setAmountOfClasses] = useState(1);
  const [amountOfRaces, setAmountOfRaces] = useState(1);
  const [firstClass, setFirstClass] = useState("");
  const [secondClass, setSecondClass] = useState("");
  const [firstRace, setFirstRace] = useState("");
  const [secondRace, setSecondRace] = useState("");

  // with this:
  // const [classes, setClasses] = useState([]);
  // const [races, setRaces] = useState([]);

  const changeLevelValue = (e) => {
    setLevelValue(e.target.value);
  };

  const changeStrengthValue = (e) => {
    setStrengthValue(e.target.value);
  };

  const increaseAmountOfClasses = () => {
    if (amountOfClasses === 2) return;
    setAmountOfClasses(2);
  };

  const decreaseAmountOfClasses = () => {
    if (amountOfClasses === 1) return;
    setSecondClass("");
    setAmountOfClasses(1);
  };

  const increaseAmountOfRaces = () => {
    if (amountOfRaces === 2) return;
    setAmountOfRaces(2);
  };

  const decreaseAmountOfRaces = () => {
    if (amountOfRaces === 1) return;
    setSecondRace("");
    setAmountOfRaces(1);
  };

  const changeFirstClass = (e) => {
    setFirstClass(e.target.value);
  };

  const changeSecondClass = (e) => {
    setSecondClass(e.target.value);
  };

  const changeFirstRace = (e) => {
    setFirstRace(e.target.value);
  };

  const changeSecondRace = (e) => {
    setSecondRace(e.target.value);
  };

  return (
    <div className="relative w-full bg-slate-700/80 py-2 px-6 rounded-md text-white border-indigo-400 border-2 munchkinCard">
      {/* delete munchkin button */}
      <button onClick={deleteMunchkin} className="absolute top-1 right-2 ">
        <i className="fa-solid fa-circle-xmark text-2xl text-red-600"></i>
      </button>

      {/* name section */}
      <input
        value={nameValue}
        onChange={(e) => setNameValue(e.target.value)}
        type="text"
        id="munchkinName"
        placeholder="Name"
        maxLength={14}
        className="mb-4 text-2xl font-bold italic pb-1 outline-none bg-transparent border-b-black border-b-2 w-10/12 mx-auto focus:bg-slate-300/10 transition-all duration-100 rounded-md pl-2"
        autoComplete="off"
      />

      {/* gender secion */}
      <div className="flex justify-between items-start mb-4">
        <label htmlFor="gender" className="text-lg border-b-2 border-b-sky-400">
          Gender
        </label>
        <select
          name="gender"
          id="gender"
          className="text-lg outline-none border-b-2 border-b-sky-400 bg-slate-700 px-1 text-white w-36"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="neither">Neither</option>
        </select>
      </div>

      {/* level and strength */}
      <div className="flex justify-between items-center mb-4 border-b-2 border-b-sky-300 pb-8">
        <CenteredDivFlexCol
          title="Level"
          onChange={changeLevelValue}
          value={levelValue}
          id="levelInput"
        />
        <CenteredDivFlexCol
          title="Strength"
          value={strengthValue}
          onChange={changeStrengthValue}
          id="strengthInput"
        />
        <div className="flex gap-4 self-end">
          <button
            onClick={() => setLevelValue(+levelValue + 1)}
            className="border-2 border-black rounded-full flex justify-center items-center w-10 h-10 active:bg-green-500 active:text-black transition-all duration-150"
          >
            <i className="fa-solid fa-arrow-up"></i>
          </button>
          <button
            onClick={() => setLevelValue(+levelValue - 1)}
            className="border-2 border-black rounded-full flex justify-center items-center w-10 h-10 active:bg-red-500 active:text-black transition-all "
          >
            <i className="fa-solid fa-arrow-down"></i>
          </button>
        </div>
      </div>

      {/* classes and races */}

      {/* classes */}
      <div className="flex flex-col justify-between gap-2">
        <h1 className="text-center text-xl font-semibold">Class:</h1>
        <div className="flex gap-6 items-center justify-between border-b-2 border-b-black pb-6">
          <div className="flex flex-col gap-2">
            {/* 1st class, if it exists */}
            <select
              className="text-lg outline-none border-b-2 border-b-rose-500 bg-slate-700 px-1 text-white"
              name="classSelect"
              id="classSelect"
              onChange={changeFirstClass}
            >
              <option value="" defaultChecked></option>
              {allClasses
                .filter((cName) => cName !== secondClass)
                .map((className) => {
                  return (
                    <option key={className} value={className}>
                      {className}
                    </option>
                  );
                })}
            </select>
            {/* 2nd class, if it exists */}
            {amountOfClasses === 2 && (
              <select
                className="text-lg outline-none border-b-2 border-b-rose-500 bg-slate-700 px-1 text-white"
                name="classSelect2"
                id="classSelect2"
                onChange={changeSecondClass}
              >
                {allClasses
                  .filter((cName) => cName !== firstClass)
                  .map((className) => {
                    return (
                      <option key={className} value={className}>
                        {className}
                      </option>
                    );
                  })}
              </select>
            )}
          </div>
          <div className="flex gap-2">
            <i
              className="fa-solid fa-circle-plus text-2xl text-black  bg-green-500 w-5 h-5 flex items-center active:text-green-500 active:bg-black rounded-full transition-all duration-150"
              onClick={increaseAmountOfClasses}
            ></i>
            <i
              className="fa-solid fa-circle-minus text-2xl text-black  bg-rose-500 w-5 h-5 flex items-center active:text-rose-500 active:bg-black rounded-full transition-all duration-150"
              onClick={decreaseAmountOfClasses}
            ></i>
          </div>
          <label
            htmlFor="superMunchkin"
            className="flex gap-2 justify-between items-center text-center"
          >
            Super munchkin
            <input type="checkbox" name="superMunchkin" id="superMunchkin" />
          </label>
        </div>

        {/* races */}
        <h1 className="text-center text-xl font-semibold pt-2">Race:</h1>
        <div className="flex gap-6 items-center justify-center mb-4">
          <div className="flex flex-col gap-2">
            {/* 1st race, is by default human */}
            <select
              className="text-lg outline-none border-b-2 border-b-rose-500 bg-slate-700 px-1 text-white"
              name="raceSelect"
              id="raceSelect"
              onChange={changeFirstRace}
            >
              {allRaces
                .filter((rName) => rName !== secondRace)
                .map((raceName) => {
                  return (
                    <option key={raceName} value={raceName}>
                      {raceName}
                    </option>
                  );
                })}
            </select>

            {/* 2nd race, if it exists */}
            {amountOfRaces === 2 && (
              <select
                className="text-lg outline-none border-b-2 border-b-rose-500 bg-slate-700 px-1 text-white"
                name="raceSelect2"
                id="raceSelect2"
                onChange={changeSecondRace}
              >
                {allRaces
                  .filter((rName) => rName !== firstRace)
                  .map((raceName) => {
                    return (
                      <option key={raceName} value={raceName}>
                        {raceName}
                      </option>
                    );
                  })}
              </select>
            )}
          </div>
          <div className="flex gap-2 items-center">
            <i
              className="fa-solid fa-circle-plus text-2xl text-black bg-green-500 w-5 h-5 flex items-center active:text-green-500 active:bg-black rounded-full transition-all duration-150"
              onClick={increaseAmountOfRaces}
            ></i>
            <i
              className="fa-solid fa-circle-minus text-2xl text-black  bg-rose-500 w-5 h-5 flex items-center active:text-rose-500 active:bg-black rounded-full transition-all duration-150"
              onClick={decreaseAmountOfRaces}
            ></i>
          </div>
          <label
            htmlFor="halfBreed"
            className="flex gap-2 justify-between items-center text-center"
          >
            Half breed
            <input type="checkbox" name="halfBreed" id="halfBreed" />
          </label>
        </div>
      </div>
    </div>
  );
}
