import "./TurnManipulator.css";

const TurnManipulator = ({ nextTurn, previousTurn, reset }) => {
  const previousTurnArrows = "<<";
  const nextTurnArrows = ">>";
  return (
    <>
      <div className="turnManipulatorButtonsContainer">
        <button className="basicButton" onClick={previousTurn}>
          {previousTurnArrows}
        </button>
        <button className="basicButton" onClick={nextTurn}>
          {nextTurnArrows}
        </button>
      </div>
      <div className="resetButtonContainer">
        <button className="resetButton basicButton" onClick={reset}>
          reset
        </button>
      </div>
    </>
  );
};

export default TurnManipulator;
