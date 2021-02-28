import { useState } from "react";

import "./App.css";

import TurnManipulator from "../TurnManipulator/TurnManipulator";
import Effects from "../Effects/Effects";
import CreateNewEffect from "../CreateNewEffect/CreateNewEffect";
import Modal from "../Modal/Modal";

import { clone } from "../../utilities.js";

function App() {
  const [turnNumber, setTurnNumber] = useState(1);
  const [effects, setEffects] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [modal, setModal] = useState("off");
  const reset = () => {
    if (modal === "keepEffects") {
      setModal("off");
    } else if (effects.length > 0) {
      setModal("keepEffects");
    } else {
      setTurnNumber(1);
    }
  };

  const addEffect = (effect) => {
    const clonedEffectsArray = clone(effects);
    clonedEffectsArray.push(effect);
    setEffects(clonedEffectsArray);
  };
  return (
    <div className="app">
      <div className="topContainer">
        <h1 className="title">Effect Tracker</h1>
        <h2 className="turnCount">Turn {turnNumber}</h2>
        <TurnManipulator
          setTurnNumber={setTurnNumber}
          turnNumber={turnNumber}
          reset={reset}
          setModal={setModal}
          modal={modal}
        />
        <br />
        <div className="newEffectButtonContainer">
          <button
            className="newEffectButton basicButton"
            onClick={() => setToggle(!toggle)}
          >
            New Effect
          </button>
        </div>
        {toggle ? (
          <CreateNewEffect
            addEffect={addEffect}
            turnNumber={turnNumber}
            setToggle={setToggle}
          />
        ) : null}
        {modal !== "off" ? (
          <Modal
            setModal={setModal}
            modal={modal}
            turnNumber={turnNumber}
            setTurnNumber={setTurnNumber}
            effects={effects}
            setEffects={setEffects}
          />
        ) : null}
      </div>
      <Effects
        turnNumber={turnNumber}
        effects={effects}
        setEffects={setEffects}
      />
    </div>
  );
}

export default App;
