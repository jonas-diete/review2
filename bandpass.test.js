const bandpass = require('./bandpass');

describe('Bandpass', () => {
  it('should return the track unchanged', () => {
    expect(bandpass([30,10,45,40,20],20,50)).toEqual([30,10,45,40,20]);
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
});