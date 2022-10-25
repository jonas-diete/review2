const bandpass = (track, lowerLimit, upperLimit) => {
  if (lowerLimit === 0) {
    throw new Error('ValueError');
  }
  return track;
}

module.exports = bandpass;