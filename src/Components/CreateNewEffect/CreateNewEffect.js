import { useState } from "react";

import "./CreateNewEffect.css";

const CreateNewEffect = ({ addEffect, turnNumber, setToggle }) => {
  const [name, setName] = useState("");
  const [target, setTarget] = useState("");
  const [details, setDetails] = useState("");
  const [duration, setDuration] = useState(1);
  const [durationType, setDurationType] = useState("");
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
    setDurationType("rounds");
    setConditions("");
    setToggle(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="formContainer">
          <fieldset className="formItem">
            <legend className="formItemTitle">Name</legend>
            <input
              type="text"
              placeholder="name of effect"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <p className="requiredText">* required</p>
          </fieldset>
          <fieldset className="formItem">
            <legend className="formItemTitle">Duration</legend>
            <div className="durationInputContainer">
              <input
                className="durationNumberInput"
                type="number"
                placeholder="4"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                required
              />
              <select
                className="durationTypeSelector"
                value={durationType === "" ? "rounds" : durationType}
                onChange={(e) => setDurationType(e.target.value)}
              >
                <option value="rounds">round(s)</option>
                <option value="minutes">minute(s)</option>
                <option value="hours">hour(s)</option>
                <option value="days">day(s)</option>
                <option value="permanent">permanent</option>
              </select>
            </div>{" "}
            <p className="requiredText">* required</p>
          </fieldset>
          <fieldset className="formItem">
            <legend className="formItemTitle">Target or Area</legend>
            <input
              type="text"
              placeholder="who or what is affected"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
            />
          </fieldset>
          <fieldset className="formItem">
            <legend className="formItemTitle">Details</legend>
            <textarea
              rows="4"
              cols="30"
              placeholder='breif description what effect does. ex.: "+4 armor bonus"'
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </fieldset>
          <fieldset className="formItem">
            <legend className="formItemTitle">Conditions</legend>
            <textarea
              rows="4"
              cols="30"
              placeholder="ex.: must be within 60' of Sabri"
              value={conditions}
              onChange={(e) => setConditions(e.target.value)}
            />
          </fieldset>
          <div className="break"></div>
          <div className="addEffectButtonContainer">
            <input
              className="basicButton addEffectButton"
              type="submit"
              value="add effect"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateNewEffect;
