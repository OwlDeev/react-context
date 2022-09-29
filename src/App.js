import "./App.css";
import Componente1 from "./components/Componente1";
import Componente2 from "./components/Componente2";
import MyContext from "./MyContext";
import { useState } from "react";

function App() {
  const [data, setData] = useState(0);
  const sharedState = { data, setData };

  return (
    <>
      <MyContext.Provider value={sharedState}>
        <Componente1></Componente1>
        <Componente2></Componente2>
      </MyContext.Provider>
    </>
  );
}
export default App;
