export class AgeCalculator {

  constructor(age) {
    this.age = age;
  }


  calculator(planet) {
    let mercuryAge;
    let venusAge;
    let marsAge;
    switch(planet) {
      case "Mercury":
        mercuryAge = parseFloat((this.age/.24).toFixed(2));
        return mercuryAge;
      case "Venus":
        venusAge = parseFloat((this.age/.62).toFixed(2));
        return venusAge;
      case "Mars":
        marsAge = parseFloat((this.age/1.88).toFixed(2));
        return marsAge;
    }
  }
}