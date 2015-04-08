(function() {
  var UserLocation = window.UserLocation;
  var donutTable = document.getElementById('donutTable');
  var donutForm = document.getElementById('donutForm');


  var handleFormSubmit = function(event) {
    event.preventDefault();

    var newLocation = new UserLocation(event.target.shopName.value,
     event.target.minCustomers.value, event.target.maxCustomers.value,
     event.target.averageCustomers.value)

   newLocation.renderTotal();
  };

  donutForm.addEventListener('submit', handleFormSubmit);

}());
