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
    let marsPast;
    let jupiterPast;
    switch(planetSince) {
    case "Mercury":
      mercuryPast = parseFloat(((this.age - this.past) /.24).toFixed(2));
        return mercuryPast;
    case "Venus":
      venusPast = parseFloat(((this.age - this.past) /.62).toFixed(2));
        return venusPast;
    case "Mars":
      marsPast = parseFloat(((this.age - this.past) /1.88).toFixed(2));
        return marsPast;
    case "Jupiter":
      jupiterPast = parseFloat(((this.age - this.past) /11.86).toFixed(2));
        return jupiterPast;
    }
  };

  yearsUntil (planetUntil) {
    let mercuryUntil;
    let venusUntil;
    let marsUntil;
    let jupiterUntil;
    switch (planetUntil) {
    case "Mercury":
      mercuryUntil = parseFloat(((this.future - this.age) /.24).toFixed(2));
        return mercuryUntil;
    case "Venus":
      venusUntil = parseFloat(((this.future - this.age) /.62).toFixed(2));
        return venusUntil;
    case "Mars":
      marsUntil = parseFloat(((this.future - this.age) /1.88).toFixed(2));
        return marsUntil;
    case "Jupiter":
      jupiterUntil = parseFloat(((this.future - this.age) /11.86).toFixed(2));
        return jupiterUntil;
    }
  };

}