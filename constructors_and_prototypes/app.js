const Pet = require('./Pet.js')
const Person = require('./Person.js')

const scooby = new Pet('Scooby Doo', 'Dog');
scooby.eat('Scooby snack');

const shaggy = new Person('Shaggy Rodgers', scooby);
shaggy.greet();
shaggy.feedPet('Scooby snack');

// returns 'Shaggy Rodgers fed Scooby Doo a bowl of Scooby snack'
