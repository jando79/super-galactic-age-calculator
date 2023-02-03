import { AgeCalculator } from './../src/js/ageCalculator.js';


describe('AgeCalculator', () => {
  let calculate;

  beforeEach(() => {
    calculate = new AgeCalculator(43);
  });


  test ('it should correctly return a new calculation with age property', () => {
    expect(calculate.age).toEqual(43);
  });

  test ('it should correctly return age in Mercury years', () => {
    expect(calculate.calculator("Mercury")).toEqual(179.17);
  });

  test ('it should correctly return age in Venus years', () => {
    expect(calculate.calculator("Venus")).toEqual(69.35);
  })


 });
