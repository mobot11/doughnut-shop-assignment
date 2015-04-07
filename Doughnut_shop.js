
  var DonutShop = function (locationName, maxCustomers, minCustomers, average) {
    this.locationName = locationName;
    this.maxCustomers = maxCustomers;
    this.minCustomers = minCustomers;
    this.average = Math.floor(average);
    this.hoursOpen = 11;
    this.donutsArray = [];
  };


  DonutShop.prototype.customersPerHour = function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) +
      this.minCustomers)
  };

  DonutShop.prototype.donutsPerHour = function () {
    return this.customersPerHour() * this.average;
  };

  DonutShop.prototype.donutsPerDay = function() {
    var total = 0;
    for (var i = 0; i < this.hoursOpen; i++){
    var perHour = this.donutsPerHour();
    total += perHour;
     this.donutsArray.push(total);
  }
  return total;
  // return donutsArray;
  // console.log(donutsArray)
  };

  DonutShop.prototype.render = function () {
    var el = document.createElement('td')
    var tableEl = document.getElementById(this.locationName)
    el.textContent = this.donutsPerDay();
    tableEl.appendChild(el);
  };



var downtown = new DonutShop ('DownTown', 43, 8, 4.5);
var capitolHill = new DonutShop('CapitolHill', 37, 4, 2);
var southLakeUnion = new DonutShop('SouthLakeUnion', 23, 9, 6.33);
var wedgewood = new DonutShop('Wedgewood', 28, 2, 1.25);
var ballard = new DonutShop('Ballard', 58, 8, 3.75)

downtown.render();
capitolHill.render();
southLakeUnion.render();
wedgewood.render();
ballard.render();

