(function(){
  var UserLocation = function (name, minCustomers, maxCustomers, averageCustomers) {
    this.name = name;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.averageCustomers = averageCustomers;
    this.hoursOpen = 11;
    this.donutArray = [];
  };
  UserLocation.prototype.customersPerHour = function () {
    return console.log('this is the customers per hour function ' + Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) +
      this.minCustomers));
  };

  UserLocation.prototype.donutsPerHour = function () {
    return this.customersPerHour() * this.averageCustomers;
  };

  UserLocation.prototype.donutsPerDay = function() {
    var total = 0;
    var perHour;

    for (var i = 0; i <= this.hoursOpen; i++){
    perHour = this.donutsPerHour();
    total += perHour;
    console.log(total)
  }
 // console.log('this is the total' + total);

  return total;
  };
  UserLocation.prototype.render = function () {
    var el = document.createElement('td')
    var tableEl = document.getElementById('donutTable')
    el.textContent = this.name + this.donutsPerDay();
    tableEl.appendChild(el);
    };


window.UserLocation = UserLocation;
}());
