import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import PirateForm from "./components/PirateForm";
import PirateView from "./components/PirateView";

function App() {
  const [pirates, setPirates] = useState([]);

  const removeFromDom = (pirateID) => {
    setPirates(pirates.filter((pirate) => pirate._id !== pirateID));
  };
  return (
    <div className="container p-5">
      <Routes>
        <Route
          path="/"
          element={
            <Main
              pirates={pirates}
              setPirates={setPirates}
              removeFromDom={removeFromDom}
            />
          }
        />
        <Route
          path="pirates/new"
          element={<PirateForm pirates={pirates} setPirates={setPirates} />}
        />
        <Route path="pirates/view/:id" element={<PirateView />} />
      </Routes>
    </div>
  );
}

export default App;
