export class AgeCalculator {

  constructor(age) {
    this.age = age;
  }


  calculator(planet) {
    let mercuryAge;
    let venusAge;

    mercuryAge = parseFloat((this.age/.24).toFixed(2));
    return mercuryAge;


  }

}