const assert = require('assert');
const Taxi = require('../taxi.js');

let taxi;

beforeEach( function(){
  taxi = new Taxi('Toyota', 'Prius');
});

describe("Taxi", function () {
  it("should have a manufacturer", function(){
    //Act
    const actual = taxi.manufacturer;
    //Assert
    assert.strictEqual(actual, 'Toyota');
  });

  it("should have a model", function (){
    //Act
    const actual = taxi.model;
    //Assert
    assert.strictEqual(actual, 'Prius');
  });

  it('should be able to return the number of passengers', function () {
    const actual = taxi.numberOfPassengers();
    assert.strictEqual(actual, 0);
  });

  it('should be able to add passengers', function () {
    taxi.addPassenger('Mike');
    const actual = taxi.numberOfPassengers();
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a passenger by name', function () {
    taxi.addPassenger('Mike');
    taxi.addPassenger('Lucas');
    taxi.removePassengerByName('Lucas');
    const expected = ['Mike']
    const actual = taxi.passengers;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to remove all passengers', function () {
    taxi.addPassenger('Mike');
    taxi.addPassenger('Lucas');
    taxi.removeAllPassengers();
    const actual = taxi.numberOfPassengers();
    assert.strictEqual(actual, 0);
  });
});
