import { useState } from "react";

import { clone, getRemainingRounds, getClassName } from "../../utilities";

import "./Modal.css";

const EffectButtons = ({ effect, handleClick, turnNumber }) => {
  const remainingRounds = getRemainingRounds(effect, turnNumber);
  const additionalClass = getClassName(remainingRounds);

  return (
    <>
      <button
        key={effect.name}
        value={effect.name}
        className={additionalClass + " effectButton basicButton"}
        onClick={(e) => handleClick(e)}
      >
        {effect.name}
      </button>
    </>
  );
};

const KeepEffects = ({ effects, setEffectsAndResetRounds, turnNumber }) => {
  const [effectsToKeep, setEffectsToKeep] = useState(
    effects.filter((e) => e.durationType === "permanent")
  );
  const [effectsToLose, setEffectsToLose] = useState(
    effects.filter((e) => e.durationType !== "permanent")
  );
  const handleClick = (e) => {
    const name = e.target.value;
    if (effectsToKeep.some((effect) => effect.name === name)) {
      const index = effectsToKeep.findIndex((effect) => effect.name === name);
      const effectToSwap = effectsToKeep.find((effect) => effect.name === name);
      const newKeepers = clone(effectsToKeep);
      const newLosers = clone(effectsToLose);
      newKeepers.splice(index, 1);
      newLosers.push(effectToSwap);
      setEffectsToKeep(newKeepers);
      setEffectsToLose(newLosers);
    } else {
      const index = effectsToLose.findIndex((effect) => effect.name === name);
      const effectToSwap = effectsToLose.find((effect) => effect.name === name);
      const newKeepers = clone(effectsToKeep);
      const newLosers = clone(effectsToLose);
      newLosers.splice(index, 1);
      newKeepers.push(effectToSwap);
      setEffectsToKeep(newKeepers);
      setEffectsToLose(newLosers);
    }
  };

  const setEffects = () => setEffectsAndResetRounds(effectsToKeep);

  const effectsToKeepComponent = effectsToKeep.map((effect) => (
    <EffectButtons
      key={effect.name}
      handleClick={handleClick}
      turnNumber={turnNumber}
      effect={effect}
    />
  ));
  const effectsToLoseComponent = effectsToLose.map((effect) => (
    <EffectButtons
      key={effect.name}
      handleClick={handleClick}
      turnNumber={turnNumber}
      effect={effect}
    />
  ));

  return (
    <>
      <div className="keepEffectsContainer">
        <h4 className="keepEffectsHeader">Current Effects</h4>
        <div className="keepLoseHeaders">
          <p className="smallHeaders">keep</p>
          <p className="smallHeaders">lose</p>
        </div>
        <div className="listOfEffectsContainer">
          <div className="effectsToKeepContainer">{effectsToKeepComponent}</div>
          <div className="effectsToLoseContainer">{effectsToLoseComponent}</div>
        </div>
        <div className="confirmKeepersButtonContainer">
          <button
            className="basicButton confirmKeepersButton"
            onClick={setEffects}
          >
            confirm
          </button>
        </div>
      </div>
    </>
  );
};

const JumpTurn = ({ setTurnNumber, turnNumber }) => {
  const [jumpNumber, setJumpNumber] = useState(1);
  const [radioSelection, setRadioSelection] = useState("forward");
  const jumpForward = () => setTurnNumber(turnNumber + jumpNumber);
  const jumpBackward = () => setTurnNumber(turnNumber - jumpNumber);
  const goTo = () => setTurnNumber(jumpNumber);
  const go = (radioSelection) => {
    switch (radioSelection) {
      case "forward":
        jumpForward();
        break;
      case "backward":
        jumpBackward();
        break;
      case "goTo":
        goTo();
        break;
      default:
        alert("Something went wrong.");
    }
  };
  return (
    <>
      <div className="jumpTurnContentContainer">
        <div
          className="radioButtonContainer"
          onChange={(e) => setRadioSelection(e.target.value)}
        >
          <label className="radioButtonLabel">
            <input
              type="radio"
              value="forward"
              onChange={() => setRadioSelection("forward")}
              checked={radioSelection === "forward"}
            />
            Number of rounds forward
          </label>
        </div>
        <div className="radioButtonContainer">
          <label className="radioButtonLabel">
            <input
              type="radio"
              value="backward"
              onChange={() => setRadioSelection("backward")}
              checked={radioSelection === "backward"}
            />
            Number of rounds backward
          </label>
        </div>
        <div className="radioButtonContainer">
          <label className="radioButtonLabel">
            <input
              type="radio"
              value="goTo"
              onChange={() => setRadioSelection("goTo")}
              checked={radioSelection === "goTo"}
            />
            To specified round
          </label>
        </div>
        <input
          type="number"
          value={jumpNumber}
          onChange={(e) => setJumpNumber(Number(e.target.value))}
        />
        <button
          className="goButton basicButton"
          onClick={() => go(radioSelection)}
        >
          Go
        </button>
      </div>
    </>
  );
};

const Modal = ({
  setModal,
  modal,
  setTurnNumber,
  turnNumber,
  effects,
  setEffects,
}) => {
  const closeModal = () => setModal("off");
  const setEffectsAndResetRounds = (newArray) => {
    setEffects(newArray);
    setTurnNumber(1);
    setModal("off");
  };
  const displayContent = (modal) => {
    switch (modal) {
      case "jumpTurn":
        return (
          <JumpTurn setTurnNumber={setTurnNumber} turnNumber={turnNumber} />
        );
      case "keepEffects":
        return (
          <KeepEffects
            effects={effects}
            setEffectsAndResetRounds={setEffectsAndResetRounds}
            turnNumber={turnNumber}
          />
        );
      default:
        return "";
    }
  };

  return (
    <>
      <div className="modalBody">
        <div className="modalContent">{displayContent(modal)}</div>
        <div className="closeModalButtonContainer">
          <button className="basicButton closeModalButton" onClick={closeModal}>
            cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
