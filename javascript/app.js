'use strict';

const Seattle = {
    name: 'Seattle',
    minCookiesPerHour: 23,
    maxCookiesPerHour: 65,
    avgCookiesPerCustomer: 6.3,
    cookiesThroughTheDayForLocation: [],
    sumOfCookies: 0,

    numOfCustomersPerHour: function(min,max){
        return Math.floor(Math.random() * ( max - min + 1 ) + min );
    },
    calcCookiesPerHour: function(){
        for(let i=0; i<14; i++){
            let number = Math.floor(this.numOfCustomersPerHour(this.minCookiesPerHour, this.maxCookiesPerHour) * this.avgCookiesPerCustomer);
            this.cookiesThroughTheDayForLocation.push(number);
            this.sumOfCookies += number;
        }
    },

    
}
Seattle.calcCookiesPerHour();
console.log(Seattle.cookiesThroughTheDayForLocation);
console.log(Seattle.sumOfCookies);

let section = document.getElementById("first");
console.log(section);
let h2 = document.createElement('h2');
console.log(h2);
section.appendChild(h2);
h2.textContent = Seattle.name;

let ul = document.createElement('ul');
section.appendChild(ul);

let li;
let time = 6;
let pm = "false";
for(let i=0; i< Seattle.cookiesThroughTheDayForLocation.length; i++){
    li = document.createElement('li');
    ul.appendChild(li);
    if( i <= 6 ){
    li.textContent = `${time}am: ${Seattle.cookiesThroughTheDayForLocation[i]} cookies`;
    }else {
        li.textContent = `${time}pm: ${Seattle.cookiesThroughTheDayForLocation[i]} cookies`;
    }
    time = time%12;
    time++;
}



