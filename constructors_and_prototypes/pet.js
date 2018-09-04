const Pet = function (name, species) {
  this.name = name;
  this.species = species;
}
// constructor functions always have a capital letter - Pet.


Pet.prototype.eat = function (food) {
  // console.log(`${this.name} eats ${food}`);
}


// const scooby = new Pet('Scooby Doo', 'Dog');
// scooby.eat('scooby snacks');

// returns 'Scooby Doo eats scooby snack'


module.exports = Pet;
