import React, { Fragment } from "react";
import "./App.css";

//components

import InputData from "./components/InputData";
import ListDatas from "./components/ListDatas";

function App() {
  return (
    <div>
      <div className="container">
        <InputData />
        <ListDatas />
      </div>
    </div>
  );
}

export default App;
