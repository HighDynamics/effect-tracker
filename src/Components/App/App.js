import { useState, useEffect } from "react";

import "./App.css";

import TurnManipulator from "../TurnManipulator/TurnManipulator";
import Effects from "../Effects/Effects";
import CreateNewEffect from "../CreateNewEffect/CreateNewEffect";
import Modal from "../Modal/Modal";

import { clone } from "../../utilities.js";

function App() {
  const [turnNumber, setTurnNumber] = useState(
    Number(localStorage.getItem("turnNumber")) || 1
  );
  const [effects, setEffects] = useState(
    JSON.parse(localStorage.getItem("effects")) || []
  );
  const [toggle, setToggle] = useState(false);
  const [modal, setModal] = useState("off");
  useEffect(() => {
    localStorage.setItem("effects", JSON.stringify(effects));
  }, [effects]);
  useEffect(() => {
    localStorage.setItem("turnNumber", turnNumber);
  }, [turnNumber]);
  const reset = () => {
    if (modal === "reset") {
      setModal("off");
    } else if (effects.length > 0) {
      setModal("reset");
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
      <div className="shadow">
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
              className={
                toggle
                  ? "newEffectButton basicButton pressed"
                  : "newEffectButton basicButton"
              }
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
        <div className="effectsListContainer">
          <Effects
            turnNumber={turnNumber}
            effects={effects}
            setEffects={setEffects}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
