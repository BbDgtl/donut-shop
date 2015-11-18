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
/*//Store locations.
var downtown = new Shop("Downtown", 8, 43, 4.50);
var capHill = new Shop("Capitol Hill", 4, 37, 2);
var sLUnion = new Shop("South Lake Union", 9, 23, 6.33);
var wedgewood = new Shop("Wedgewood", 2, 28, 1.25);
var ballard = new Shop("Ballard", 8, 58, 3.75);


//Adding a constructor function.
function Shop (locale, minCust, maxCust, average) {
  this.locale = locale;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.average = average;
  //adding a method that generates a random number(# of customers)
  this.genRandom = function() {
    return Math.floor(Math.random() * ((this.maxCust - this.minCust) + 1) + this.minCust);
  };
  //adding a method that generates a number of donuts.
  this.donutsPerHour = function() {
    return Math.floor(this.genRandom() * this.average);
  };
  //adding a method that calculates the sum of donuts per day.
  this.donutsPerDay = function() {
    var total = 0;
    for (var i = 0; i < 11; i++) {
      total += this.donutsPerHour();
    }
    total = Math.floor(total);
    return total;
  };

  //adding a console.log to make sure it all works.
  this.displayData = function() {
    console.log("The " + this.locale + " location can make " + this.donutsPerHour() + " donuts per hour, which is " + this.donutsPerDay() + " donuts per day.");
  };

  this.displayData();
}

//Store locations in an array that displays the info.
this.DonutShop = function() {
  this.locationsArray = [];

  this.addLocation = function(locale, minCust, maxCust, average) {
    this.locationsArray.push(new Shop(locale, minCust, maxCust, average));
    return this.locationsArray;
  };

  this.totalsReport = function() {
    for (var i = 0; i < this.locationsArray.length; i++) {
      this.locationsArray[i].displayData();
    }
  };
};

//Create elements
//getelementbyid of table head to appendchild to.
//appendchild of tr or td to getelementbyid
//rinse / repeat
function TopPot() {
    var donutsPerDay = this.donutsPerDay;
    var tRow = document.createElement("tr");
    var elTd = document.createElement("td");
  document.getElementById("heading").appendchild("tr");
  elTd.textContent = this.locale;
  tr.appendChild(elTd);
  for (var i = 0; i < 11; i++) {
    elTd = document.createElement("td");
    elTd.textContent = this.locationsArray[i];
    tr.appendChild(elTd);
  }
  elTd.textContent = donutsPerDay;
  tr.appendChild(elTd);
  console.log(tRow);
  document.getElementById("topPot").appendChild(tRow);
}*/
