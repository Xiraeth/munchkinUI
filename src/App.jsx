import { useState, useEffect } from "react";
import "./styles/App.css";
import AddMunchkinButton from "./components/Buttons/AddMunchkinButton";
import SortMunchkinsButton from "./components/Buttons/SortMunchkinsButton";
import MunchkinsSection from "./components/MunchkinsSection";
import MunchkinCard from "./components/MunchkinCard";
import { v4 as uuidv4 } from "uuid";

function App() {
  const munchkinsArray = localStorage.getItem("munchkinsArray") || "[]";

  const [munchkins, setMunchkins] = useState(JSON.parse(munchkinsArray));

  useEffect(() => {
    localStorage.setItem("munchkinsArray", JSON.stringify(munchkins));
  }, [munchkins]);

  const addMunchkin = () => {
    const id = uuidv4();

    setMunchkins([
      ...munchkins,
      {
        id,
        name: "",
        level: 1,
        strength: 1,
        classes: [],
        races: [],
        gender: "",
        halfBreed: false,
        superMunchkin: false,
      },
    ]);
  };

  const deleteMunchkin = (e) => {
    setMunchkins(munchkins.filter((mun) => mun.id !== e.id));
  };

  const sortMunchkins = () => {
    const sortedMunchkins = [...munchkins].sort((a, b) => b.level - a.level);
    setMunchkins(sortedMunchkins);
    localStorage.setItem("munchkinsArray", JSON.stringify(sortedMunchkins));
  };

  return (
    <>
      <AddMunchkinButton onClick={addMunchkin} />
      <SortMunchkinsButton onClick={sortMunchkins} />
      <MunchkinsSection>
        {munchkins &&
          munchkins.map((munchkin) => {
            return (
              <MunchkinCard
                key={munchkin.id}
                deleteMunchkin={() => deleteMunchkin(munchkin)}
                munchkinId={munchkin.id}
                munchkins={munchkins}
              />
            );
          })}
      </MunchkinsSection>
    </>
  );
}

export default App;
