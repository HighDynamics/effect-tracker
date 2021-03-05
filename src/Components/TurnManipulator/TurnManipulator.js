import "./TurnManipulator.css";

const TurnManipulator = ({
  turnNumber,
  reset,
  setModal,
  modal,
  changeTurn,
}) => {
  const previousTurnArrows = "<<";
  const nextTurnArrows = ">>";
  const nextTurn = () => changeTurn(1, "forward");
  const previousTurn = () => changeTurn(1, "backward");
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
        <button
          className="basicButton turnManipulatorButton"
          onClick={previousTurn}
        >
          {previousTurnArrows}
        </button>
        <button
          className={
            modal === "jumpTurn"
              ? "basicButton turnManipulatorButton pressed"
              : "basicButton turnManipulatorButton"
          }
          onClick={toggleModal}
        >
          Jump
        </button>
        <button
          className="basicButton turnManipulatorButton"
          onClick={nextTurn}
        >
          {nextTurnArrows}
        </button>
      </div>
      <div className="resetButtonContainer">
        <button
          className={
            modal === "reset"
              ? "resetButton basicButton pressed"
              : "resetButton basicButton"
          }
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default TurnManipulator;
