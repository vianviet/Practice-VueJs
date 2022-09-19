function animateNumber(
  finalNumber,
  duration = 5000,
  startNumber = 0,
  callback
) {
  let currentNumber = startNumber;
  const interval = setInterval(() => {
    if (currentNumber >= finalNumber) {
      clearInterval(interval);
    } else {
      let inc = Math.ceil(finalNumber / (duration / 17));
      if (currentNumber + inc > finalNumber) {
        currentNumber = finalNumber;
        clearInterval(interval);
      } else {
        currentNumber += inc;
      }
      callback(currentNumber);
    }
  }, 17);
}

export default animateNumber;
