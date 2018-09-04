const Person = function (myName, pet) {
  this.name = myName;//this. is the same as self. in ruby
  this.pet = pet;
  }
//don't use return within the constructor function
// look up 'new keyword' for javascript to see how this works
// object inherits from the prototype

Person.prototype.greet = function () {
  // console.log(`Hi, my name is ${this.name}`);
};

Person.prototype.feedPet = function (food) {
  console.log(`${this.name} fed ${this.pet.name} a bowl of ${food}`);
this.pet.eat(food);
};

//methods are behaviours
// const shaggy = new Person('Shaggy Rodgers');
//'new' assigns the keyword to the properties of Person
// console.log('shaggy:', shaggy);
// shaggy.greet();

// const velma = new Person ('Velma Dinkley');
// velma.greet();


module.exports = Person;
