import { useState } from "react";

import "./CreateNewEffect.css";

const CreateNewEffect = ({ addEffect, turnNumber, setToggle }) => {
  const [expanded, setExpanded] = useState(false);
  const [name, setName] = useState("");
  const [target, setTarget] = useState("");
  const [details, setDetails] = useState("");
  const [duration, setDuration] = useState(1);
  const [durationType, setDurationType] = useState("round");
  const [conditions, setConditions] = useState("");
  let effect = {
    name: name,
    target: target,
    details: details,
    duration: duration,
    durationType: durationType,
    conditions: conditions,
    turnUsed: turnNumber,
  };
  const expandOptions = () => {
    setExpanded(!expanded);
  };
  const handleSetDurationType = (durationType) => {
    setDurationType(durationType);
    setExpanded(false);
  };
  const handlePermanentDuration = () => {
    if (effect.durationType === "permanent") {
      effect.duration = Infinity;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handlePermanentDuration();
    addEffect(effect);
    setName("");
    setTarget("");
    setDetails("");
    setDuration(1);
    setDurationType("round");
    setConditions("");
    setToggle(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="formContainer">
          <fieldset className="formItem insetContainer">
            <legend className="formItemTitle">Name</legend>
            <div className="textInputContainer">
              <input
                type="text"
                placeholder="name of effect"
                className="textInput"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <p className="requiredText">* required</p>
          </fieldset>
          <fieldset className="formItem insetContainer">
            <legend className="formItemTitle">Duration</legend>
            <div className="durationInputContainer">
              <div className="numberInputContainer">
                <input
                  className="durationNumberInput textInput"
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  required
                />
              </div>
              {/*Couldn't use buttons here, applied 'button' role*/}
              {expanded ? null : (
                <div
                  role="button"
                  className={
                    durationType === "permanent"
                      ? "durationTypeSelector basicButton permanent"
                      : "durationTypeSelector basicButton"
                  }
                  value={durationType === "" ? "round" : durationType}
                  onClick={expandOptions}
                >
                  {durationType === "permanent"
                    ? durationType
                    : durationType + "(s)"}
                </div>
              )}
              {expanded ? (
                <div className="durationTypeSelectorOptionsContainer">
                  <div
                    role="button"
                    className="durationTypeSelectorOptions basicButton"
                    value="round"
                    onClick={() => handleSetDurationType("round")}
                  >
                    round(s)
                  </div>
                  <div
                    role="button"
                    className="durationTypeSelectorOptions basicButton"
                    value="minute"
                    onClick={() => handleSetDurationType("minute")}
                  >
                    minute(s)
                  </div>
                  <div
                    role="button"
                    className="durationTypeSelectorOptions basicButton"
                    value="hour"
                    onClick={() => handleSetDurationType("hour")}
                  >
                    hour(s)
                  </div>
                  <div
                    role="button"
                    className="durationTypeSelectorOptions basicButton"
                    value="day"
                    onClick={() => handleSetDurationType("day")}
                  >
                    day(s)
                  </div>
                  <div
                    role="button"
                    className="durationTypeSelectorOptions permanent basicButton"
                    value="permanent"
                    onClick={() => handleSetDurationType("permanent")}
                  >
                    permanent
                  </div>
                </div>
              ) : null}
            </div>{" "}
            <p className="requiredText">* required</p>
          </fieldset>
          <fieldset className="formItem insetContainer">
            <legend className="formItemTitle">Target or Area</legend>
            <div className="textAreaInputContainer">
              <textarea
                rows="3"
                cols="30"
                className="textAreaInput"
                placeholder="who or what is affected"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
              />
            </div>
          </fieldset>
          <fieldset className="formItem insetContainer">
            <legend className="formItemTitle">Details</legend>
            <div className="textAreaInputContainer">
              <textarea
                rows="3"
                cols="30"
                className="textAreaInput"
                placeholder='breif description what effect does. ex.: "+4 armor bonus"'
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>
          </fieldset>
          <fieldset className="formItem insetContainer">
            <legend className="formItemTitle">Conditions</legend>{" "}
            <div className="textAreaInputContainer">
              <textarea
                rows="3"
                cols="30"
                className="textAreaInput"
                placeholder="ex.: must be within 60' of Sabri"
                value={conditions}
                onChange={(e) => setConditions(e.target.value)}
              />
            </div>
          </fieldset>
          <div className="break"></div>
          <div className="addEffectButtonContainer">
            <input className="basicButton addEffectButton" type="submit" />
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateNewEffect;
