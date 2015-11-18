//Store locations.
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
}
