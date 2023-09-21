
const mycountry = {
    country: "Palestine",
    capital: "Jerusalem",
    languege: "Arabi",
    population: "5.5 million",
    neighbours: ["lebanon", "jorden", "syria"],
    describe() {
      console.log(
        `${this.country} has ${this.population},thier mother tongue is ${this.languege}, they have 3 neighbouring countries and a capital called ${this.capital}`
      );
    },
    checkisland() {
      let isisland = this.neighbours.length > 0 ? false : true;
      console.log(isisland);
    },
  };
  mycountry.describe();
  mycountry.checkisland();