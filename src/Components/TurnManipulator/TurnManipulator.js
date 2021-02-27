import "./TurnManipulator.css";

const TurnManipulator = ({ nextTurn, previousTurn, reset }) => {
  const previousTurnArrows = "<<";
  const nextTurnArrows = ">>";
  return (
    <>
      <div className="turnManipulatorButtonsContainer">
        <button className="turnManipulatorButtons" onClick={previousTurn}>
          {previousTurnArrows}
        </button>
        <button className="turnManipulatorButtons" onClick={nextTurn}>
          {nextTurnArrows}
        </button>
      </div>
      <div className="resetButtonContainer">
        <button className="resetButton turnManipulatorButtons" onClick={reset}>
          reset
        </button>
      </div>
    </>
  );
};

export default TurnManipulator;
