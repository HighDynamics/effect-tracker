import { useState } from "react";

import "./Effects.css";

import {
  clone,
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
}) => {
  const [toggle, setToggle] = useState(false);
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

  return (
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
              className="basicButton endEffectButton"
              onClick={() => removeEffect(effect)}
            >
              End Effect
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
};

const Effects = ({ turnNumber, effects, setEffects }) => {
  const removeEffect = (effect) => {
    const newEffectsArray = clone(effects);
    const index = newEffectsArray.findIndex((e) => e.name === effect.name);
    newEffectsArray.splice(index, 1);
    setEffects(newEffectsArray);
  };
  const resetEffectDuration = (effect) => {
    const newEffectsArray = clone(effects);
    const index = newEffectsArray.findIndex((e) => e.name === effect.name);
    newEffectsArray[index].turnUsed = turnNumber;
    setEffects(newEffectsArray);
  };
  const effectItem = effects.map((effect) => (
    <EffectItem
      effect={effect}
      removeEffect={removeEffect}
      turnNumber={turnNumber}
      key={effect.name}
      resetEffectDuration={resetEffectDuration}
    />
  ));
  return <>{effectItem}</>;
};

export default Effects;
