// Remember, we're gonna use strict mode in all scripts now!
// 'use strict';

const measureKelvin = function () {
    const measurement = {
      type: 'temp',
      unit: 'celsius',
//   value: prompt('Degrees Celsius:'),
  
      // C) FIX
      value: Number(prompt('Degrees celsius:')),
    };
  
    // B) FIND
    console.log(measurement);
  
    // console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);
  
    const kelvin = measurement.value + 273;
    return kelvin;
  };


  measureKelvin();