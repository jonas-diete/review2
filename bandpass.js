const bandpass = (track, lowerLimit, upperLimit) => {
  if (lowerLimit <= 0 || upperLimit <= 0) {
    throw new Error('ValueError');
  }
  track.forEach((frequency) => {
    if (frequency <= 0) {
      throw new Error('ValueError');
    }
  })
  return track;
}

module.exports = bandpass;