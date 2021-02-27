import { useState } from "react";

import "./App.css";

import TurnManipulator from "../TurnManipulator/TurnManipulator";
import Effects from "../Effects/Effects";
import CreateNewEffect from "../CreateNewEffect/CreateNewEffect";

import { clone } from "../../utilities.js";

function App() {
  const [turnNumber, setTurnNumber] = useState(1);
  const [effects, setEffects] = useState([]);
  const [toggle, setToggle] = useState(false);
  const nextTurn = () => setTurnNumber(turnNumber + 1);
  const previousTurn = () => setTurnNumber(turnNumber - 1);
  const reset = () => {
    setTurnNumber(1);
    setEffects([]);
  };
  const addEffect = (effect) => {
    const clonedEffectsArray = clone(effects);
    clonedEffectsArray.push(effect);
    setEffects(clonedEffectsArray);
  };
  return (
    <div className="App">
      <h1 className="title">Effect Tracker</h1>
      <h2 className="turnCount">Turn {turnNumber}</h2>
      <TurnManipulator
        nextTurn={nextTurn}
        previousTurn={previousTurn}
        reset={reset}
      />
      <br />
      <div className="newEffectButtonContainer">
        <button
          className="newEffectButton basicButton"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? "Collapse" : "New Effect"}
        </button>
      </div>
      {toggle ? (
        <CreateNewEffect addEffect={addEffect} turnNumber={turnNumber} />
      ) : null}
      <Effects turnNumber={turnNumber} effects={effects} />
    </div>
  );
}

export default App;
