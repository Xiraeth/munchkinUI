import React from "react";
import "./styles/App.css";
import AddMunchkinButton from "./components/Buttons/AddMunchkinButton";
import MunchkinCard from "./components/MunchkinCard";
import { MunchkinProvider, useMunchkinContext } from "./context";

function App() {
  return (
    <MunchkinProvider>
      <MainAppContent />
    </MunchkinProvider>
  );
}

function MainAppContent() {
  const { munchkins, addMunchkin } = useMunchkinContext();

  return (
    <>
      <AddMunchkinButton onClick={addMunchkin} />
      {munchkins.map((munchkin) => (
        <MunchkinCard key={munchkin.id} munchkinId={munchkin.id} />
      ))}
    </>
  );
}

export default App;
