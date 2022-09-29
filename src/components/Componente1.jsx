import React from "react";
import { useContext } from "react";
import MyContext from "../MyContext";

const Componente1 = () => {
  const { data, setData } = useContext(MyContext);
  return <button onClick={(e) => setData(data + 1)}>+ </button>;
};

export default Componente1;
