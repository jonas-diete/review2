audio workstation plugins

filters for tracks

bandpass filter

inputs 

- music track -> arr of frequencies (numbers > 0, int and float)
- lower limit (number, > 0, int or float)
- upper limit (number  > 0, int or float)

output

- copy of the music track


INPUT                         /           OUTPUT
[60,10,45,60,1500],20,50            [50,20,45,50,50]


ValueError if number 0 or less
ArgumentError if not a number
