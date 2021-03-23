import React, { Fragment } from "react";
import "./App.css";

import InputData from "./components/InputData";
import GetDatas from "./components/GetDatas";

function App() {
  return (
    <div>
      <div className="container">
        <InputData />
        <GetDatas />
      </div>
    </div>
  );
}

export default App;
