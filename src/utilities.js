function clone<T>(object: T): T {
  return JSON.parse(JSON.stringify(object));
}

function getClassName(durationRemaining) {
  switch (true) {
    case durationRemaining === Infinity:
      return "permanent";
    case durationRemaining > 0:
      return "active";
    case durationRemaining <= 0:
      return "expired";
    default:
      return "";
  }
}

function getRoundsToMinutesAndSeconds(rounds) {
  const minutes = Math.floor(rounds / 10);
  const seconds = Math.floor((rounds % 10) * 6);
  return [minutes, seconds];
}
function getRoundsToHoursAndMinutes(rounds) {
  const hours = Math.floor(rounds / 600);
  const minutes = Math.floor((rounds % 600) / 10);
  return [hours, minutes];
}
function getRoundsToDaysAndHours(rounds) {
  const days = Math.floor(rounds / 14400);
  const hours = Math.floor((rounds % 14400) / 600);
  return [days, hours];
}

function getRemainingRounds(effect, turnNumber) {
  let remainingRounds = effect.turnUsed + effect.duration - turnNumber;
  switch (effect.durationType) {
    case "round":
      break;
    case "minute":
      remainingRounds = effect.turnUsed + effect.duration * 10 - turnNumber;
      break;
    case "hour":
      remainingRounds = effect.turnUsed + effect.duration * 600 - turnNumber;
      break;
    case "day":
      remainingRounds = effect.turnUsed + effect.duration * 14400 - turnNumber;
      break;
    case "permanent":
      return Infinity;
    default:
      break;
  }
  return remainingRounds;
}

export {
  clone,
  getClassName,
  getRoundsToMinutesAndSeconds,
  getRoundsToHoursAndMinutes,
  getRoundsToDaysAndHours,
  getRemainingRounds,
};
