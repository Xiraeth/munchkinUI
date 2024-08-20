import React, { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const MunchkinContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useMunchkinContext = () => {
  const context = useContext(MunchkinContext);

  return context;
};

export const MunchkinProvider = ({ children }) => {
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

  const deleteMunchkin = (id) => {
    console.log(id);
    setMunchkins(munchkins.filter((mun) => mun.id !== id));
  };

  return (
    <MunchkinContext.Provider
      value={{ munchkins, addMunchkin, setMunchkins, deleteMunchkin }}
    >
      {children}
    </MunchkinContext.Provider>
  );
};
