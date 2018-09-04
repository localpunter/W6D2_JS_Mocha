const assert = require('assert');
const Taxi = require('../taxi.js');

describe('Taxi', function () {
  it("should have a manufacturer", function(){
    //Arrange
    const taxi = new Taxi('Toyota', 'Prius');
    //Act
    const actual = taxi.manufacturer;
    //Assert
    assert.strictEqual(actual, 'Toyota')
  });
  it("should have a model", function(){
    //Arrange
    const taxi = new Taxi('Toyota', 'Prius');
    //actual
    const actual = taxi.model;
    //Assert
    assert.strictEqual(actual, 'Prius')

  });
});
