import { useState, useEffect } from "react";
import CenteredDivFlexCol from "./CenteredDivFlexCol";
import NameInput from "./NameInput";
import SelectGender from "./SelectGender";

import DeleteMunchkinButton from "./Buttons/DeleteMunchkinButton";
import LevelUpButton from "./Buttons/LevelUpButton";
import LevelDownButton from "./Buttons/LevelDownButton";

import AllClassesSelect from "./Classes/AllClassesSelect";
import ClassesWrapper from "./Classes/ClassesWrapper";
import LevelStrengthWrapper from "./LevelStrengthWrapper";
import AddClassButton from "./Classes/AddClassButton";
import RemoveClassButton from "./Classes/RemoveClassButton";
import SupermunchkinCheckbox from "./Classes/SuperMunchkinCheckbox";

import AllRacesSelect from "./Races/AllRacesSelect";
import RacesWrapper from "./Races/RacesWrapper";
import AddRaceButton from "./Races/AddRaceButton";
import RemoveRaceButton from "./Races/RemoveRaceButton";
import HalfbreedCheckbox from "./Races/HalfBreedCheckbox";

const allRaces = ["Human", "Dwarf", "Halfling", "Elf", "Gnome"];
const allClasses = ["Wizard", "Thief", "Bard", "Warrior", "Cleric"];

export default function MunchkinCard({ munchkinId, deleteMunchkin }) {
  const munchkinsArray =
    JSON.parse(localStorage.getItem("munchkinsArray")) || [];

  console.log(munchkinsArray);
  const [levelValue, setLevelValue] = useState(1);
  const [strengthValue, setStrengthValue] = useState(1);
  const [nameValue, setNameValue] = useState("");
  const [gender, setGender] = useState("");

  const [classes, setClasses] = useState([""]);
  const [races, setRaces] = useState(["Human"]);

  const changeClasses = (index, e) => {
    setClasses((prevClasses) => {
      const tempClasses = [...prevClasses];

      tempClasses[index] = e.target.value;

      return tempClasses;
    });
  };

  const changeRaces = (index, e) => {
    setRaces((prevRaces) => {
      const tempRaces = [...prevRaces];

      tempRaces[index] = e.target.value;

      return tempRaces;
    });
  };

  const changeLevelValue = (e) => {
    setLevelValue(e.target.value);
  };

  const changeStrengthValue = (e) => {
    setStrengthValue(e.target.value);
  };

  const changeGender = (e) => {
    setGender(e.target.value);
  };

  return (
    <div className="relative w-full bg-slate-700/80 py-2 px-6 rounded-md text-white border-indigo-400 border-2 munchkinCard mb-5">
      <DeleteMunchkinButton onClick={() => deleteMunchkin(munchkinId)} />

      <NameInput value={nameValue} onChange={setNameValue} />

      <SelectGender onChange={changeGender} value={gender} />

      <LevelStrengthWrapper>
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
          <LevelUpButton onClick={setLevelValue} levelValue={levelValue} />
          <LevelDownButton onClick={setLevelValue} levelValue={levelValue} />
        </div>
      </LevelStrengthWrapper>

      {/* classes and races */}

      {/* classes */}
      <div className="flex flex-col justify-between gap-2">
        <h1 className="text-center text-xl font-semibold">Class:</h1>
        <ClassesWrapper>
          <div className="flex flex-col gap-2">
            {/* 1st class, if it exists */}
            <AllClassesSelect
              allClasses={allClasses}
              classes={classes}
              changeClasses={changeClasses}
              indexOfClassInput={0}
            />
            {/* 2nd class, if it exists */}
            {classes.length === 2 && (
              <AllClassesSelect
                allClasses={allClasses}
                classes={classes}
                changeClasses={changeClasses}
                indexOfClassInput={1}
              />
            )}
          </div>
          <div className="flex gap-2">
            <AddClassButton onClick={setClasses} />
            <RemoveClassButton onClick={setClasses} />
          </div>
          <SupermunchkinCheckbox />
        </ClassesWrapper>

        {/* races */}
        <div className="flex flex-col justify-between gap-2">
          <h1 className="text-center text-xl font-semibold pt-2">Race:</h1>
          <RacesWrapper>
            <div className="flex flex-col gap-2">
              {/* 1st race, always exists */}
              <AllRacesSelect
                allRaces={allRaces}
                races={races}
                onChange={changeRaces}
                indexOfRaceInput={0}
              />
              {/* 2nd race, if it exists */}
              {races.length === 2 && (
                <AllRacesSelect
                  allRaces={allRaces}
                  races={races}
                  onChange={changeRaces}
                  indexOfRaceInput={1}
                />
              )}
            </div>
            <div className="flex gap-2 items-center justify-center">
              <AddRaceButton onClick={setRaces} />
              <RemoveRaceButton onClick={setRaces} />
            </div>
            <HalfbreedCheckbox />
          </RacesWrapper>
        </div>
      </div>
    </div>
  );
}
