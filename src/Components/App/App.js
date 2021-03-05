import { useState, useEffect } from "react";

import "./App.css";

import TurnManipulator from "../TurnManipulator/TurnManipulator";
import Effects from "../Effects/Effects";
import CreateNewEffect from "../CreateNewEffect/CreateNewEffect";
import Modal from "../Modal/Modal";
import ManageTrackers from "../ManageTrackers/ManageTrackers";

import { clone } from "../../utilities.js";

function App() {
  const [effects, setEffects] = useState(
    JSON.parse(localStorage.getItem("effects")) || {
      "1": { turn: 1, effects: [] },
    }
  );
  const [tracker, setTracker] = useState(Object.keys(effects)[0]);
  const [toggleNewEffect, setToggleNewEffect] = useState(false);
  const [toggleManageTrackers, setToggleManageTrackers] = useState(false);
  const [modal, setModal] = useState("off");
  const turnNumber = effects[tracker].turn;

  useEffect(() => {
    localStorage.setItem("effects", JSON.stringify(effects));
  }, [effects]);

  const reset = () => {
    if (modal === "reset") {
      setModal("off");
    } else if (effects[tracker].effects.length > 0) {
      setModal("reset");
    } else {
      const newEffectsArray = clone(effects);
      newEffectsArray[tracker].turn = 1;
      setEffects(newEffectsArray);
    }
  };
  const changeTurn = (number, direction) => {
    const newEffectsArray = clone(effects);
    switch (direction) {
      case "forward":
        newEffectsArray[tracker].turn += number;
        break;
      case "backward":
        newEffectsArray[tracker].turn -= number;
        break;
      case "goTo":
        newEffectsArray[tracker].turn = number;
        break;
      default:
        return number;
    }
    setEffects(newEffectsArray);
  };
  const addEffect = (effect) => {
    const newEffectsArray = clone(effects);
    newEffectsArray[tracker].effects.push(effect);
    setEffects(newEffectsArray);
  };
  const removeEffect = (effect) => {
    const newEffectsArray = clone(effects);
    const index = newEffectsArray[tracker].effects.findIndex(
      (e) => e.name === effect.name
    );
    newEffectsArray[tracker].effects.splice(index, 1);
    setEffects(newEffectsArray);
  };
  const resetEffectDuration = (effect) => {
    const newEffectsArray = clone(effects);
    const index = newEffectsArray[tracker].effects.findIndex(
      (e) => e.name === effect.name
    );
    newEffectsArray[tracker].effects[index].turnUsed = turnNumber;
    setEffects(newEffectsArray);
  };
  return (
    <div className="app">
      <div className="shadow">
        <div className="topContainer">
          <h1 className="title">Effect Tracker</h1>
          <div className="manageTrackersButtonContainer">
            <button
              className={
                toggleManageTrackers
                  ? "basicButton manageTrackersButton pressed"
                  : "basicButton manageTrackersButton"
              }
              onClick={() => setToggleManageTrackers(!toggleManageTrackers)}
            >
              Manage Trackers
            </button>
          </div>
          {toggleManageTrackers ? (
            <div className="manangeTrackersContainer insetContainer">
              <ManageTrackers
                effects={effects}
                setEffects={setEffects}
                tracker={tracker}
                setTracker={setTracker}
              />
            </div>
          ) : null}
          <h2 className="turnCount">
            {tracker}: Turn {turnNumber}
          </h2>
          <TurnManipulator
            turnNumber={turnNumber}
            reset={reset}
            setModal={setModal}
            modal={modal}
            changeTurn={changeTurn}
          />
          <br />
          <div className="newEffectButtonContainer">
            <button
              className={
                toggleNewEffect
                  ? "newEffectButton basicButton pressed"
                  : "newEffectButton basicButton"
              }
              onClick={() => setToggleNewEffect(!toggleNewEffect)}
            >
              New Effect
            </button>
          </div>
          {toggleNewEffect ? (
            <CreateNewEffect
              addEffect={addEffect}
              turnNumber={turnNumber}
              setToggle={setToggleNewEffect}
            />
          ) : null}
          {modal !== "off" ? (
            <Modal
              setModal={setModal}
              modal={modal}
              tracker={tracker}
              turnNumber={turnNumber}
              changeTurn={changeTurn}
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
            removeEffect={removeEffect}
            resetEffectDuration={resetEffectDuration}
            tracker={tracker}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
