export class AgeCalculator {

  constructor(age, past, future) {
    this.age = age;
    this.past = past;
    this.future = future;
  };


  calculator(planet) {
    let mercuryAge;
    let venusAge;
    let marsAge;
    let jupiterAge;
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
      case "Jupiter":
        jupiterAge = parseFloat((this.age/11.86).toFixed(2));
        return jupiterAge; 
    }
  }; 

  yearsSince (planetSince) {
    let mercuryPast;
    let venusPast;
    switch(planetSince) {
    case "Mercury":
      mercuryPast = parseFloat(((this.age - this.past) /.24).toFixed(2));
        return mercuryPast;
    case "Venus":
      venusPast = parseFloat(((this.age - this.past) /.62).toFixed(2));
        return venusPast;
  }

}

}