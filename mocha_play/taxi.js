const Taxi = function (manufacturer, model, driver) {
  this.manufacturer = manufacturer;
  this.model = model;
  this.driver = driver;
  this.passengers = [];
}

Taxi.prototype.numberOfPassengers = function () {
  return this.passengers.length;
};

Taxi.prototype.addPassenger = function (passenger) {
  this.passengers.push(passenger);
};

Taxi.prototype.removePassengerByName = function () {
  for (let i = 0; i < this.passenger.length; i++) {}
this.passengers.pop();
};

Taxi.prototype.removeAllPassengers = function () {

};


module.exports = Taxi
