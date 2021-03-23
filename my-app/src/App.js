import React, { Fragment } from "react";
import "./App.css";

//components

import InputPlace from "./components/InputPlace";
import ListPlaces from "./components/ListPlaces";

function App() {
  return (
    <div>
      <div className="container">
        <InputPlace />
        <ListPlaces />
      </div>
    </div>
  );
}

export default App;
