export class AgeCalculator {

  constructor(age, past) {
    this.age = age;
    this.past = past;
  };


  calculator(planet) {
    let mercuryAge;
   // let mercuryPast;
    let venusAge;
    //let venusPast;
    let marsAge;
    //let marsPast;
    let jupiterAge;
    //let jupiterPast;
    switch(planet) {
      case "Mercury":
        mercuryAge = parseFloat((this.age/.24).toFixed(2));
        //mercuryPast = parseFloat(((this.age - this.past)/.24).toFixed(2));
          return mercuryAge //&& mercuryPast;
      case "Venus":
        venusAge = parseFloat((this.age/.62).toFixed(2));
        //venusPast = parseFloat((this.age - this.past)/.62(2));
          return venusAge //&& venusPast;
      case "Mars":
        marsAge = parseFloat((this.age/1.88).toFixed(2));
        //marsPast = parseFloat(((this.age - this.past)/1.88).toFixed(2));
          return marsAge //&& marsPast;
      case "Jupiter":
        jupiterAge = parseFloat((this.age/11.86).toFixed(2));
        //jupiterPast = parseFloat(((this.age - this.past)/11.86).toFixed(2));
        return jupiterAge //&& jupiterPast;
      //default:
        //return false;
    }
  };

  yearsSince(difference) {
    let mercuryPast = parseFloat((this.age - this.past/.24).toFixed(2));
  }

}
