//Create the Donut Shop Object
function DonutShop(shopLocation, custMin, custMax, donutAvg) {
  this.shopLocation = shopLocation;
  this.custMin = custMin;
  this.custMax = custMax;
  this.donutAvg= donutAvg;
}

//generate random # of customers
DonutShop.prototype.genRandom = function() {
  return Math.ceil((Math.random() * (this.custMax - this.custMin))) + this.custMin;
};

//generate donuts per hour
DonutShop.prototype.donutsPerHour = function() {
  var random = this.genRandom();
  return (random * this.donutAvg);
};

//create an array for the heading of the table
var tableHeaderData = ["Location", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "Total"];

//table header construction
var tableHeading = document.getElementById("topPot");
var headerRow = document.createElement("tr");

for (var i = 0; i < tableHeaderData.length; i++) {
  var createHead = document.createElement("th");
  createHead.textContent = tableHeaderData[i];
  headerRow.appendChild(createHead);
}

//donutTable.appendChild(headerRow);

//first row
DonutShop.prototype.createRow = function() {
  var donutTable = document.getElementById("topPot");
  var storeRow = document.createElement("tr");
  donutTable.appendChild(storeRow);
  var createTd = document.createElement("td");
  createTd.textContent = this.shopLocation;
  storeRow.appendChild(createTd);

  for (var i = 0; i < tableHeaderData.length - 1; i++) {
    createTd = document.createElement("td");
    createTd.textContent = Math.floor(this.donutsPerHour());
    storeRow.appendChild(createTd);
    var totalMade = totalMade + DonutShop.donutsPerHour;
  }
};

var locationArray = [];
  locationArray.push(new DonutShop("Downtown", 8, 43, 4.5));
  locationArray.push(new DonutShop("Capitol Hill", 4, 37, 2.0));
  locationArray.push(new DonutShop("South Lake Union", 9, 23, 6.33));
  locationArray.push(new DonutShop("Wedgewood", 2, 28, 1.25));
  locationArray.push(new DonutShop("Ballard", 8, 58, 3.75));

for (var i = 0; i < locationArray.length; i++) {
  locationArray[i].createRow();
}

//Add a button tag that saves the location in the following manner:
//Insantiate a new DonutShop Object with the user supplied data from
//the input tags.
//Appends a row to the table using the new objects hourly and daily
//donut totals.
//var shopsArray = []

var addLocation = function(newLocation, newMin, newMax, newAvg) {
  var newShop = new DonutShop();

  var handleNewShopData = function() {
    var newLocation = document.getElementById("locations").value;
    var newMin = document.getElementById("min").value;
    var newMax = document.getElementById("max").value;
    var newAvg = document.getElementById("avg").value;
    var newShop = addLocation();
    locationArray.push(newShop);

  newShop.render();
  for (var i = 0; i < locationArray.length; i++) {
    if (newShop.shopLocation === locationArray[i].shopLocation) {
      shopLocation[i] = newShop;
      shopLocation[i].splice(-1, 1);
      createRow();
    }
  }

  };
};


