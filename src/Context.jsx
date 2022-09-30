import { useState, useEffect, createContext } from "react";
const axios = require("axios");

export const Context = createContext();

export const Provider = ({ children }) => {
  //UseEffect
  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get("/fotos.json");
        setFotos(response.data.photos);
      } catch (error) {
        console.error(error);
      }
    }

    getUser();
  }, []);

  //UseState
  const [fotos, setFotos] = useState([]);
  const globalState = { fotos, setFotos };

  return <Context.Provider value={globalState}>{children}</Context.Provider>;
};
