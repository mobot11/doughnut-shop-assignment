
  var DonutShop = function (locationName, maxCustomers, minCustomers, average) {
    this.locationName = locationName;
    this.maxCustomers = maxCustomers;
    this.minCustomers = minCustomers;
    this.average = Math.floor(average);
    this.hoursOpen = 11;
    this.donutsArray = [];
    this.total = 0;
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
      this.donutsArray.push(perHour);
      total += perHour;
    }

    return total;
  // return donutsArray;
  // console.log(donutsArray)
  };

  DonutShop.prototype.render = function () {
    var total = this.donutsPerDay();
    var rowEl = document.getElementById(this.locationName)

    for (var i = 0; i < this.donutsArray.length; i++) {
      var hourlyEl = document.createElement('td')
      hourlyEl.textContent = this.donutsArray[i];
      rowEl.appendChild(hourlyEl);
    }

    var totalEl = document.createElement('td')
    totalEl.textContent = total;
    rowEl.appendChild(totalEl);
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

