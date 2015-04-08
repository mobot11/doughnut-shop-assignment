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
    return  + Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) +
      this.minCustomers);
  };

  UserLocation.prototype.donutsPerHour = function () {
    return this.customersPerHour() * this.averageCustomers;
  };

UserLocation.prototype.donutsPerDay = function() {
    var total = 0;
    for (var i = 0; i < this.hoursOpen; i++) {
      var perHour = this.donutsPerHour();
      this.donutArray.push(perHour);
      total += perHour;
    }
    return total;
  };

  UserLocation.prototype.renderTotal = function () {
    var total = this.donutsPerDay();
    var nameEl = document.createElement('tr');
    var amountEl = document.createElement('td');
    var tableEl = document.getElementById('donutTable');
    nameEl.innerHTML = "<th>" + this.name; + "</th>";
    tableEl.appendChild(nameEl)
    for (var i = 0; i < this.donutArray.length; i++){
      var hourlyEl = document.createElement('td')
      hourlyEl.textContent = this.donutArray[i];
      nameEl.appendChild(hourlyEl);
    }
    amountEl.textContent = total;
    nameEl.appendChild(amountEl);
  };

window.UserLocation = UserLocation;
}());
