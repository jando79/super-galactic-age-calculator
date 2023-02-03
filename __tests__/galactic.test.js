import { AgeCalculator } from './../src/js/ageCalculator.js';


describe('AgeCalculator', () => {
  let calculate;

  beforeEach(() => {
    calculate = new AgeCalculator(43);
  });


  test ('it should correctly return a new calculation with age property', () => {
    expect(calculate.age).toEqual(43);
  });


});
