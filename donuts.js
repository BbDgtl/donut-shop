//Create a constructor function with properties to represent location-specific attributes.
//Add a method or methods to the constructor which do the following:

//Generate a random number of customers.
//Calculate simulated amounts of donuts purchased for each hour using average
//donuts purchased and number of customers generated; then storing the results.
//Calculate the sum of these hourly totals and storing the results.

//Instantiate new objects to represent each of the five locations.
//Verify the correctness of your model's properties and methods by regularly
//logging to the console.

//Once the model can simulate the number of donuts sales at each location,
//incorporate the following components into the program:
//Add an HTML table with a tr and th tags to represent the data the table will
//contain.
//Add a method to your constructor for rendering a new row into the table
//containing the data from its corresponding object.
//Use the method to update the page's DOM with your model's hourly and daily totals.
//Spruce up the page a bit with a title, some headers, and a paragraph description.
//Add a README.md describing this project and call it a day.
//**********************************//*****************************************//

//Create the Donut Shop Model.
function DonutShop (shopLocation, minCustomers, maxCustomers, avgDonuts) {
  this.shopLocation = shopLocation;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgDonuts = avgDonuts;
  this.totalDonutsPerHour = [];
  this.donutSum = 0;
}

//Generate a random # of customers.
DonutShop.prototype.genRandom = function() {
  return Math.ceil((Math.random() * (this.maxCustomers - this.minCustomers))) + this.minCustomers;
};

//Calculate simulated # of donuts purchased / hour.
DonutShop.prototype.donutsPerHour = function() {
  var randCust = this.genRandom();
  return (randCust * this.avgDonuts);
};

//Instantiate new objects.
var locationsArray = [];
  locationsArray.push(new DonutShop("Downtown", 8, 43, 4.5));
  locationsArray.push(new DonutShop("Capitol Hill", 4, 37, 2.0));
  locationsArray.push(new DonutShop("South Lake Union", 9, 23, 6.33));
  locationsArray.push(new DonutShop("Wedgewood", 2, 28, 1.25));
  locationsArray.push(new DonutShop("Ballard", 8, 58, 3.75));

//Verify correctness of the model.
for (var i = 0; i < locationsArray.length; i++) {
  console.log(locationsArray[i]);
}

//Get total donuts per day.
DonutShop.prototype.getDonutsByHour = function() {
  for (var i = 0; i < 12; i ++){
    var customersPerHour = this.genRandom();
    var donutsThisHour = Math.floor(customersPerHour * this.avgDonuts);
    this.totalDonutsPerHour[i] = donutsThisHour;
  }
};

//Get Sum of donuts per day.
DonutShop.prototype.getTotalDonuts = function () {
  var getLength = this.totalDonutsPerHour.length;
  for (var i = 0; i < getLength; i++) {
    this.donutSum += this.totalDonutsPerHour[i];
  }
};

//Verify correctness.
DonutShop.prototype.generateReports = function () {
  console.log(this.getDonutsByHour());
  console.log(this.getTotalDonuts());
};

//create an array for the heading of the table
 DonutShop.prototype.createRow = function () {
  var salesArr = this.totalDonutsPerHour;
  console.log(salesArr);
  // create row for current donut shop
  var shopRow = document.createElement("tr");

  // create shop location column for current shop
  var rowCell = document.createElement("td");
  rowCell.textContent = this.shopLocation;
  shopRow.appendChild(rowCell);

  // loops through the totalDonutsPerHour array, creates a new "td" and adds
  // the current hour's sales to it. Then that cell is appended to the row.
  for (var i = 0; i < salesArr.length; i++) {
    var hourlySalesCell = document.createElement("td");
    hourlySalesCell.textContent = salesArr[i];
    shopRow.appendChild(hourlySalesCell);
  }

  var totalSalesCell = document.createElement("td");
  totalSalesCell.textContent = this.donutSum;
  shopRow.appendChild(totalSalesCell);

  var shopTable = document.getElementById('topPot');
  shopTable.appendChild(shopRow);
};

for (var i = 0; i < locationsArray.length; i++) {
  locationsArray[i].generateReports();
  locationsArray[i].createRow();
}

//**********************//Adding New Locations//**********************************//
//1. Create the form in HTML and add <input> tags for the following attributes:
//a) Location Name
//b) Minimum Customers per Hour
//c) Maximum Custoemrs per Hour
//d) Average Donuts Purchased per Customer.
//2. Then, add a <button> tag that saves the location in the following manner:
//a) Instantiate a new DonutShop object.
//b) Appends a row to the table using the new objects hourly and daily donut
//totals.
//3. Once you figure out how to "ADD A NEW LOCATION", try using the same HTML
//elements to update an existing location.
//4. Once you figure out how to update an existing location, try adding a few
//"EASTER EGGS" in the code.

// var addLocation = function(newLocation, newMin, newMax, newAvg) {
//   var newShop = new DonutShop();
//   return newShop;
// };

// var handleNewShopData = function() {
//   var newLocation = document.getElementById("location").value;
//   var newMin = document.getElementById("min").value;
//   var newMax = document.getElementById("max").value;
//   var newAvg = document.getElementById("avg").value;
//   var newShop = addLocation();
//   locationsArray.push(newShop);

//   newShop.createRow();
//   for (var i = 0; i < locationsArray.length; i++) {
//     if (newShop.shopLocation === locationsArray[i].shopLocation) {
//       shopLocation[i] = newShop;
//       shopLocation[i].splice(-1, 1);
//     }
//   }
// };

// function userStore(){
//   var newLocation = (document.getElementById('location').value);
//   var newMin =  Number(document.getElementById('min').value);
//   var newMax =  Number(document.getElementById('max').value);
//   var newAvg = parseFloat(document.getElementById('avg').value);
//   var newLoc = new DonutShop (newLocation, newMin, newMax, newAvg);
//   shops.push(newLocation);
//   createRow();
// }


var newShopData = function(){
  var newLocationName = document.getElementById('location').value;
  var newMinCust = document.getElementById('min').value;
  var newMaxCust = document.getElementById('max').value;
  var newAverage = document.getElementById('avg').value;
  var newLocation = new DonutShop(newLocation, newMin, newMax, newAvg);
  var newContent = document.getElementById('topPot');
  content.appendChild(newLocation.render());
};

var calcButton = document.getElementById("calc");
calcButton.addEventListener("click", newShopData, false);

// var calcButton = document.getElementById("calc");
// calcButton.addEventListener("click", handleNewShopData);

//*********************//CHART.JS PRACTICE//**************************************//

var ctx = document.getElementById("myChart").getContext("2d");
var data = {
    labels: ["7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
    ]
};
var chart = new Chart(ctx).Line(data);
