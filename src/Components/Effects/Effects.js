import { useState } from "react";

import "./Effects.css";

import { clone } from "../../utilities";

import CreateNewEffect from "../CreateNewEffect/CreateNewEffect";

import {
  getClassName,
  getRoundsToMinutesAndSeconds,
  getRoundsToHoursAndMinutes,
  getRoundsToDaysAndHours,
  getRemainingRounds,
} from "../../utilities";

const EffectItem = ({
  effect,
  turnNumber,
  removeEffect,
  resetEffectDuration,
  editEffect,
}) => {
  const [toggle, setToggle] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  const name = effect.name;
  const target = effect.target;
  const details = effect.details;
  const conditions = effect.conditions;
  const infinitySymbol = "\u221e";

  const remainingRounds = getRemainingRounds(effect, turnNumber);

  const minutesAndSeconds = getRoundsToMinutesAndSeconds(remainingRounds);
  const hoursAndMinutes = getRoundsToHoursAndMinutes(remainingRounds);
  const daysAndHours = getRoundsToDaysAndHours(remainingRounds);

  function formatRoundsRemaing(remainingRounds) {
    if (remainingRounds === Infinity) {
      return infinitySymbol;
    } else if (remainingRounds < 20) {
      return remainingRounds + " rounds";
    } else if (remainingRounds >= 20 && remainingRounds < 600) {
      return minutesAndSeconds[0] + "m " + minutesAndSeconds[1] + "s";
    } else if (remainingRounds >= 600 && remainingRounds < 14400) {
      return hoursAndMinutes[0] + "h " + hoursAndMinutes[1] + "m";
    } else if (remainingRounds >= 14400) {
      return daysAndHours[0] + "d " + daysAndHours[1] + "h";
    }
  }

  const remainingTime = formatRoundsRemaing(remainingRounds);

  const additionalClass = getClassName(remainingRounds);

  const resetDuration = () => resetEffectDuration(effect);

  const confirmEditEffect = editEffect(effect);

  return (
    <>
      <div
        role="button"
        className={
          toggle
            ? additionalClass + " effectContainer insetContainer"
            : additionalClass + " effectContainer"
        }
        onClick={() => setToggle(!toggle)}
      >
        <p className="effectItem">
          <span className="effectKeys">Name</span> - {name}
        </p>
        <p className="effectItem">
          <span className="effectKeys">Time Left</span> - {remainingTime}
        </p>
        {toggle ? (
          <>
            <div className="break"></div>
            {target !== "" ? (
              <p className="effectItem">
                <span className="effectKeys">Target</span> - {target}
              </p>
            ) : null}
            {details !== "" ? (
              <p className="effectItem">
                <span className="effectKeys">Details</span> - {details}
              </p>
            ) : null}
            {conditions !== "" ? (
              <p className="effectItem">
                <span className="effectKeys">Conditions</span> - {conditions}
              </p>
            ) : null}
            <div className="break"></div>
            <div className="endResetEffectButtonContainer">
              <button
                className="basicButton resetEffectButton"
                onClick={resetDuration}
              >
                Reset Duration
              </button>
              <button
                className={
                  toggleEdit
                    ? "basicButton editEffectButton pressed"
                    : "basicButton editEffectButton"
                }
                onClick={() => setToggleEdit(!toggleEdit)}
              >
                Edit
              </button>
              <button
                className="basicButton endEffectButton"
                onClick={() => removeEffect(effect)}
              >
                End
              </button>
            </div>
          </>
        ) : null}
      </div>
      {toggleEdit ? (
        <CreateNewEffect
          currentEffect={effect}
          setToggleEdit={setToggleEdit}
          confirmEditEffect={confirmEditEffect}
        />
      ) : null}
    </>
  );
};

const Effects = ({
  turnNumber,
  effects,
  setEffects,
  removeEffect,
  resetEffectDuration,
  tracker,
}) => {
  const sortedEffects = effects[tracker].effects.sort((a, b) => {
    const remainingRoundsA = getRemainingRounds(a, turnNumber);
    const remainingRoundsB = getRemainingRounds(b, turnNumber);
    return remainingRoundsA > remainingRoundsB ? 1 : -1;
  });

  const editEffect = (effectToEdit) => (newEffect) => {
    const newEffectsArray = clone(effects);
    const index = effects[tracker].effects.findIndex(
      (effect) => effect.name === effectToEdit.name
    );
    newEffectsArray[tracker].effects[index] = newEffect;
    setEffects(newEffectsArray);
  };

  const effectItem = sortedEffects.map((effect) => (
    <EffectItem
      effect={effect}
      removeEffect={removeEffect}
      turnNumber={turnNumber}
      key={effect.name}
      resetEffectDuration={resetEffectDuration}
      editEffect={editEffect}
    />
  ));
  return <>{effectItem}</>;
};

export default Effects;
