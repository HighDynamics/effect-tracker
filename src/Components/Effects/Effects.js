import "./Effects.css";

const EffectItem = ({ effect, turnNumber }) => {
  const name = effect.name;
  const target = effect.target;
  const details = effect.details;
  const duration = effect.duration;
  const durationType = effect.durationType;
  const conditions = effect.conditions;
  const turnUsed = effect.turnUsed;
  const roundsToMinutes = (rounds) => {
    const minutes = Math.floor(rounds / 10);
    const seconds = Math.floor((rounds % 10) * 6);
    return minutes + "m " + seconds + "s";
  };
  const roundsToHours = (rounds) => {
    const hours = Math.floor(rounds / 600);
    const minutes = Math.floor((rounds % 600) / 10);
    return hours + "h " + minutes + "m";
  };
  const roundsToDays = (rounds) => {
    const days = Math.floor(rounds / 14400);
    const hours = Math.floor((rounds % 14400) / 600);
    return days + "d " + hours + "h";
  };
  const getRemainingTime = (durationType) => {
    let remainingRounds = turnUsed + duration - turnNumber;
    switch (durationType) {
      case "rounds":
        break;
      case "minutes":
        remainingRounds = turnUsed + duration * 10 - turnNumber;
        break;
      case "hours":
        remainingRounds = turnUsed + duration * 600 - turnNumber;
        break;
      case "days":
        remainingRounds = turnUsed + duration * 14400 - turnNumber;
        break;
      case "permanent":
        return "\u221e";
      default:
        break;
    }
    const formatTimeRemaing = (remainingRounds) => {
      if (remainingRounds < 20) {
        return remainingRounds + " rounds";
      } else if (remainingRounds >= 20 && remainingRounds < 600) {
        return roundsToMinutes(remainingRounds);
      } else if (remainingRounds >= 600 && remainingRounds < 14400) {
        return roundsToHours(remainingRounds);
      } else if (remainingRounds >= 14400) {
        return roundsToDays(remainingRounds);
      }
    };
    return formatTimeRemaing(remainingRounds);
  };
  return (
    <>
      <div className="effectContainer">
        <p className="effectItem">Name: {name}</p>
        {target !== "" ? <p className="effectItem">Target: {target}</p> : null}
        {details !== "" ? (
          <p className="effectItem">Details: {details}</p>
        ) : null}
        <p className="effectItem">
          Remaining Time: {getRemainingTime(durationType)}
        </p>
        {conditions !== "" ? (
          <p className="effectItem">Conditions: {conditions}</p>
        ) : null}
      </div>
    </>
  );
};

const Effects = ({ turnNumber, effects }) => {
  const effectItem = effects.map((effect) => (
    <EffectItem effect={effect} turnNumber={turnNumber} key={effect.name} />
  ));
  return <>{effectItem}</>;
};

export default Effects;
