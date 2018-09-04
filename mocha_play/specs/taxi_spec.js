const assert = require('assert');
const Taxi = require('../taxi.js');

let taxi;

beforeEach(function(){
  taxi = new Taxi('Toyota', 'Prius', 'Driver', []);
})

describe('Taxi', function () {
  it("should have a manufacturer", function(){

    //Act
    const actual = taxi.manufacturer;
    //Assert
    assert.strictEqual(actual, 'Toyota')
  });

  it("should have a model", function(){

    //actual
    const actual = taxi.model;
    //Assert
    assert.strictEqual(actual, 'Prius')

  });

  it("should have a driver", function(){
    //actual
    const actual = taxi.driver;
    //assert
    assert.strictEqual(actual, 'Driver')
  })

  it("should have 0 passengers", function(){
    //actual
    const actual = taxi.numberOfPassengers();
    //assert
    assert.strictEqual(actual, 0)
  })

  it("should add a passenger", function(){
    taxi.addPassenger("passenger")
    //actual
    const actual = taxi.numberOfPassengers();
    //assert
    assert.strictEqual(actual, 1)
  })

  it("should remove one passenger", function(){
    taxi.addPassenger("Alan")
    taxi.addPassenger("Liam")
    taxi.removePassengerByName("Liam")
    const expected("Alan")
  })
});
