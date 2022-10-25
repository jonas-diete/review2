const bandpass = (track, lowerLimit, upperLimit) => {
  if (lowerLimit <= 0 || upperLimit <= 0) {
    throw new Error('ValueError');
  }

  for (let i = 0; i < track.length; i++) {
    if (track[i] <= 0) {
      throw new Error('ValueError');
    } else if (track[i] < lowerLimit) {
      track[i] = lowerLimit;
    } else if (track[i] > upperLimit) {
      track[i] = upperLimit;
    }
  }
  return track;
}

module.exports = bandpass;