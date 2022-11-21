This is a repo for a coding review to practise my TDD skills.

A company that make audio workstation plugins.  

They need filters for tracks.  

They want to build a bandpass filter.  

### Inputs

- music track -> an array of frequencies (numbers > 0, int and float)
- lower limit (number, > 0, int or float)
- upper limit (number  > 0, int or float)

### Output

- A copy of the music track with any frequencies lower than the lower limit set to the lower limit and any frequencies higher than the higher limit set to the higher limit.


| INPUT | OUTPUT |
|-------|--------|
| [60,10,45,60,1500],20,50 | [50,20,45,50,50] |

### Edge-Cases
ValueError if number 0 or less
ArgumentError if not a number
