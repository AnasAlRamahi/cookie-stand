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
            tableCol.textContent = this.cookiesThroughTheDayForLocation[i];
        }else {
            tableCol.textContent = this.cookiesThroughTheDayForLocation[i];
        }
        time = time%12;
        time++;
    }
    let tableTotalCol = document.createElement('th');
    tableMainRow.appendChild(tableTotalCol);
    tableTotalCol.textContent = this.sumOfCookies;

}

let sectionEl;
let tableEl;
let tableRow;
let headerCol;

function createTableHeader(){
//create the table with the header row:
    sectionEl = document.getElementById('first');
    tableEl = document.createElement('table');
    sectionEl.appendChild(tableEl);
    let tableHeader = document.createElement('thead');
    tableEl.appendChild(tableHeader);
    tableRow = document.createElement('tr');
    tableHeader.appendChild(tableRow);
    headerCol = document.createElement('th');
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
}


function createTableFooter(){
    //rendering the results of each object inside the created table:
     
    //create the table total row at the bottom:
    let tableFooter = document.createElement('tfoot');
    tableEl.appendChild(tableFooter);
    let totalHourRow = document.createElement('tr');
    tableFooter.appendChild(totalHourRow);
    let totalRowHeader = document.createElement('th');
    totalHourRow.appendChild(totalRowHeader);
    totalRowHeader.textContent = "Total";
    let dataOfTotal = 0;
    let dataOfWholeTotals = 0;
    for (let i = 0; i < 14; i++) {
        dataOfTotal = 0;
        for (let j = 0; j < locationArr.length; j++) {
            dataOfTotal += locationArr[j].cookiesThroughTheDayForLocation[i];
        }
        dataOfWholeTotals += dataOfTotal;
        let totalCookies = document.createElement('th');
        totalHourRow.appendChild(totalCookies);
        totalCookies.textContent = dataOfTotal 
    }
    let totalOfTotals = document.createElement('th');
    totalHourRow.appendChild(totalOfTotals);
    totalOfTotals.textContent = dataOfWholeTotals;
}

//calling the table header function:
createTableHeader();

//insert the instances to be rendered:
let seattle = new cookieLocation('Seattle', 23, 65, 6.3);
let tokyo = new cookieLocation('Tokyo', 3, 24, 1.2);
let dubai = new cookieLocation('Dubai', 11, 38, 3.7);
let paris = new cookieLocation('Paris', 20, 38, 2.3);
let lima = new cookieLocation('Lima', 2, 16, 4.6);
let Amman = new cookieLocation('Amman', 23, 44, 5.5);

for (let i = 0; i < locationArr.length; i++) {
    locationArr[i].render();
}  

//calling the table footer function:
createTableFooter();