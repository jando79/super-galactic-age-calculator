import { AgeCalculator } from './../src/js/ageCalculator.js';


describe('AgeCalculator', () => {
  let calculate;
  let subtract;

  beforeEach(() => {
    calculate = new AgeCalculator(43);
    subtract = new AgeCalculator(-10);
  });


  test ('it should correctly return a new calculation with age property', () => {
    expect(calculate.age).toEqual(43);
  });

  test ('it should correctly return age in Mercury years', () => {
    expect(calculate.calculator("Mercury")).toEqual(179.17);
  });

  test ('it should correctly return age in Venus years', () => {
    expect(calculate.calculator("Venus")).toEqual(69.35);
  });

  test ('it should correctly return age in Mars years', () => {
    expect(calculate.calculator("Mars")).toEqual(22.87);
  });

  test ('it should correctly return age in Jupiter years', () => {
    expect(calculate.calculator("Jupiter")).toEqual(3.63);
  });

 //test ('it should calculate years since birthday in the past', () => {
   //expect(subtract.yearsSince).toEqual(33);
  //});

  test ('it should correctly return age difference in Mercury years', () => {
    expect(subtract.yearsSince("Mercury")).toBe(41.67);
  });

 });
