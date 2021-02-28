import "./TurnManipulator.css";

const TurnManipulator = ({
  setTurnNumber,
  turnNumber,
  reset,
  setModal,
  modal,
}) => {
  const previousTurnArrows = "<<";
  const nextTurnArrows = ">>";
  const nextTurn = () => setTurnNumber(turnNumber + 1);
  const previousTurn = () => setTurnNumber(turnNumber - 1);
  const toggleModal = () => {
    if (modal === "jumpTurn") {
      setModal("off");
    } else {
      setModal("jumpTurn");
    }
  };
  return (
    <>
      <div className="turnManipulatorButtonsContainer">
        <button className="basicButton" onClick={previousTurn}>
          {previousTurnArrows}
        </button>
        <button className="basicButton" onClick={toggleModal}>
          Jump
        </button>
        <button className="basicButton" onClick={nextTurn}>
          {nextTurnArrows}
        </button>
      </div>
      <div className="resetButtonContainer">
        <button className="resetButton basicButton" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
};

export default TurnManipulator;
