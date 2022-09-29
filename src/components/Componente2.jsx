import React from "react";
import MyContext from "../MyContext";
import { useContext } from "react";

const Componente2 = () => {
  const { data, setData } = useContext(MyContext);
  return { data };
};

export default Componente2;
