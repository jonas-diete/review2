const bandpass = require('./bandpass');

describe('Bandpass', () => {
  it('should return the track unchanged', () => {
    expect(bandpass([30,30,45,40,20],20,50)).toEqual([30,30,45,40,20]);
  });

  it('throws error when a lowerLimit is 0', () => {
    expect(() => {bandpass([30,20,45,40,20],0,50)}).toThrow('ValueError');
  });

  it('throws error when a lowerLimit is negative', () => {
    expect(() => {bandpass([30,20,45,40,20],-14,50)}).toThrow('ValueError');
  });

  it('throws error when a upperLimit is negative', () => {
    expect(() => {bandpass([30,20,45,40,20],20,-40)}).toThrow('ValueError');
  });

  it('throws error when a upperLimit is 0', () => {
    expect(() => {bandpass([30,20,45,40,20],20,0)}).toThrow('ValueError');
  });
  it('throws error when a frequency is 0', () => {
    expect(() => {bandpass([0,20,45,40,20],20,30)}).toThrow('ValueError');
  });

  it('throws error when a frequency is negative', () => {
    expect(() => {bandpass([10,20,-13,40,20],20,30)}).toThrow('ValueError');
  });

  it('raises a frequency if lower than the lower limit', () => {
    expect(bandpass([10,30,45,40,20],20,50)).toEqual([20,30,45,40,20]);
  });

  it('lowers a frequency if higher than the higher limit', () => {
    expect(bandpass([70,30,45,40,20],20,50)).toEqual([50,30,45,40,20]);
  });
});