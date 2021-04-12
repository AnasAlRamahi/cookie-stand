'use strict';

let locationArr = [];
let time = 6;
//LOCATION: SEATTLE
function cookieLocation(location, minCookiesPerHour, maxCookiesPerHour, avgCookiesPerCustomer){
    this.location = location;
    this.minCookiesPerHour = minCookiesPerHour;
    this.maxCookiesPerHour = maxCookiesPerHour;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    this.cookiesThroughTheDayForLocation = [];
    this.sumOfCookies = 0;
    locationArr.push(this);
}

cookieLocation.prototype.numOfCustomersPerHour= function(min, max){
    return Math.floor(Math.random() * ( max - min + 1 ) + min );
}

cookieLocation.prototype.calcCookiesPerHour = function(){
    let number = 0;
        for(let i=0; i<14; i++){
            number = Math.floor(this.numOfCustomersPerHour(this.minCookiesPerHour, this.maxCookiesPerHour) * this.avgCookiesPerCustomer);
            this.cookiesThroughTheDayForLocation.push(number);
            this.sumOfCookies += number;
        }
}

cookieLocation.prototype.render = function(){
    this.calcCookiesPerHour();
    console.log(this.cookiesThroughTheDayForLocation);
    console.log(this.sumOfCookies);

    let tableMainRow = document.createElement('tr');
    tableEl.appendChild(tableMainRow);
    let tableCol = document.createElement('th');
    tableMainRow.appendChild(tableCol);
    tableCol.textContent = this.location;
    time = 6;
    for(let i=0; i< this.cookiesThroughTheDayForLocation.length; i++){
        tableCol = document.createElement('td');
        tableMainRow.appendChild(tableCol);
        if( i <= 6 ){
            tableCol.textContent = `${this.cookiesThroughTheDayForLocation[i]} cookies`;
        }else {
            tableCol.textContent = `${this.cookiesThroughTheDayForLocation[i]} cookies`;
        }
        time = time%12;
        time++;
    }
    let tableTotalCol = document.createElement('td');
    tableMainRow.appendChild(tableTotalCol);
    tableTotalCol.textContent = `${this.sumOfCookies} cookies`;

}

//create the table with the header row:
let sectionEl = document.getElementById('first');
let tableEl = document.createElement('table');
sectionEl.appendChild(tableEl);
let tableRow = document.createElement('tr');
tableEl.appendChild(tableRow);
let headerCol = document.createElement('th');
tableRow.appendChild(headerCol);
headerCol.textContent = '';

//insert the time inside the header cells:
for (let i = 0; i < 14; i++) {
      headerCol = document.createElement('th');
      tableRow.appendChild(headerCol);
      if ( i< 6 ){
      headerCol.textContent = `${time}am`;
      } else {
      headerCol.textContent = `${time}pm`;
      }
      time = time%12;
      time++;
}

//create the total column at the right edge:
let totalDayCol = document.createElement('th');
tableRow.appendChild(totalDayCol);
totalDayCol.textContent = "Total";

//insert the instances to be rendered:
let seattle = new cookieLocation('Seattle', 23, 65, 6.3);
let tokyo = new cookieLocation('Tokyo', 3, 24, 1.2);
let dubai = new cookieLocation('Dubai', 11, 38, 3.7);
let paris = new cookieLocation('Paris', 20, 38, 2.3);
let lima = new cookieLocation('Lima', 2, 16, 4.6);

//rendering the results of each object insidet he created table:
for (let i = 0; i < locationArr.length; i++) {
    locationArr[i].render();
}


//create the table total row at the bottom:
let totalHourRow = document.createElement('tr');
tableEl.appendChild(totalHourRow);
for (let i = 0; i < locationArr.length; i++) {
    

}
