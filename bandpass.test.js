const bandpass = require('./bandpass');

describe('Bandpass', () => {
  it('should return the track unchanged', () => {
    expect(bandpass([30,10,45,40,20],20,50)).toEqual([30,10,45,40,20]);
  });

  it('throws error when a number is 0 or negative', () => {
    expect(() => {bandpass([30,20,45,40,20],0,50)}).toThrow('ValueError');
  });
});