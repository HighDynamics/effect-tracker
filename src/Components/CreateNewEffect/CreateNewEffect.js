import { useState } from "react";

import "./CreateNewEffect.css";

const CreateNewEffect = ({ addEffect, turnNumber }) => {
  const [name, setName] = useState("");
  const [target, setTarget] = useState("");
  const [details, setDetails] = useState("");
  const [duration, setDuration] = useState(0);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    addEffect(effect);
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
                onChange={(e) => setDurationType(e.target.value)}
              >
                <option value="rounds">rounds</option>
                <option value="minutes">minutes</option>
                <option value="hours">hours</option>
                <option value="days">days</option>
                <option value="permanent">permanent</option>
              </select>
            </div>
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
        </div>
        <input type="submit" value="add effect" />
      </form>
    </>
  );
};

export default CreateNewEffect;
