import { useState } from "react";
import { clone } from "../../utilities";
import "./ManageTrackers.css";

const ManageTrackers = ({
  effects,

  setEffects,
  tracker,
  setTracker,
}) => {
  const renderEffectListButton = () => {
    return Object.keys(effects).map((listName) => (
      <button
        key={listName}
        value={listName}
        onClick={(e) => setTracker(e.target.value)}
        className={
          tracker === listName
            ? "basicButton trackerNameButton pressed"
            : "basicButton trackerNameButton"
        }
      >
        {listName}
      </button>
    ));
  };
  const addEditTracker = (e) => {
    let newTrackerName = prompt("Please enter a name for this tracker", "");
    if (
      (newTrackerName === null && tracker === "") ||
      (newTrackerName === "" && tracker === "")
    ) {
      newTrackerName = Object.keys(effects).length;
    } else if (
      (newTrackerName === null && tracker !== "") ||
      (newTrackerName === "" && tracker !== "")
    ) {
      return tracker;
    }
    if (effects.hasOwnProperty(newTrackerName)) {
      return alert("Duplicate tracker name found, please try again");
    }
    let newEffectsObject = clone(effects);
    switch (true) {
      case e.target.value === "newTracker":
        newEffectsObject[newTrackerName] = { turn: 1, effects: [] };
        setEffects(newEffectsObject);
        break;
      case e.target.value === "renameTracker":
        newEffectsObject[newTrackerName] = clone(newEffectsObject[tracker]);
        setTracker(newTrackerName);
        delete newEffectsObject[tracker];
        setEffects(newEffectsObject);
        break;
      default:
        alert("Something went wrong");
    }
  };
  const deleteTracker = () => {
    if (Object.keys(effects)[1] === undefined) {
      return alert("Cannot have zero trackers. Use [Reset] instead.");
    }
    const newEffectsArray = clone(effects);
    delete newEffectsArray[tracker];
    setTracker(Object.keys(effects)[0]);
    setEffects(newEffectsArray);
  };

  return (
    <>
      <div className="trackerNameButtonsContainer">
        {renderEffectListButton()}
        <div className="break"></div>
        <div className="editAndNewTrackerButtonsContainer">
          <button
            className="basicButton"
            value="renameTracker"
            onClick={(e) => addEditTracker(e)}
          >
            Rename
          </button>
          <button
            className="basicButton reset"
            value="deleteTracker"
            onClick={deleteTracker}
          >
            Delete
          </button>
          <button
            className="basicButton"
            value="newTracker"
            onClick={(e) => addEditTracker(e)}
          >
            New
          </button>
        </div>
      </div>
    </>
  );
};

export default ManageTrackers;
