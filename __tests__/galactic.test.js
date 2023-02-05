import { AgeCalculator } from './../src/js/ageCalculator.js';

describe('AgeCalculator', () => {
   let calculate;
   beforeEach(() => {
    calculate = new AgeCalculator(43, 33, 68);
    calculate.calculator
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



  test ('it should correctly return ten years less age difference in Mercury years', () => {
    expect(calculate.yearsSince("Mercury")).toBe(41.67);
  });

  test ('it should correctly return ten years less age difference in Venus years', () => {
    expect(calculate.yearsSince("Venus")).toBe(16.13);
  });

  test ('it should correctly return ten years less age difference in Mars years', () => {
    expect(calculate.yearsSince("Mars")).toBe(5.32);
  });

  test ('it should correctly return ten years less age difference in Jupiter years', () => {
    expect(calculate.yearsSince("Jupiter")).toBe(0.84);
  });

  
  test ('it should correctly return twenty-five years more age difference in Mercury years', () => {
    expect(calculate.yearsUntil("Mercury")).toBe(104.17);
  });

  test ('it should correctly return twenty-five years more age difference in Venus years', () => {
    expect(calculate.yearsUntil("Venus")).toBe(40.32);
  });

  test ('it should correctly return twenty-five years more age difference in Mars years', () => {
    expect(calculate.yearsUntil("Mars")).toBe(13.30);
  });

 });
