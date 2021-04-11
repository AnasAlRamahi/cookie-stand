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
li = document.createElement('li');
ul.appendChild(li);
li.textContent = `Total: ${Seattle.sumOfCookies} cookies`;



const Tokyo = {
    name: 'Tokyo',
    minCookiesPerHour: 3,
    maxCookiesPerHour: 24,
    avgCookiesPerCustomer: 1.2,
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
Tokyo.calcCookiesPerHour();
console.log(Tokyo.cookiesThroughTheDayForLocation);
console.log(Tokyo.sumOfCookies);

 section = document.getElementById("first");
console.log(section);
h2 = document.createElement('h2');
console.log(h2);
section.appendChild(h2);
h2.textContent = Tokyo.name;

ul = document.createElement('ul');
section.appendChild(ul);

li;
time = 6;
pm = "false";
for(let i=0; i< Tokyo.cookiesThroughTheDayForLocation.length; i++){
    li = document.createElement('li');
    ul.appendChild(li);
    if( i <= 6 ){
        li.textContent = `${time}am: ${Tokyo.cookiesThroughTheDayForLocation[i]} cookies`;
    }else {
        li.textContent = `${time}pm: ${Tokyo.cookiesThroughTheDayForLocation[i]} cookies`;
    }
    time = time%12;
    time++;
}
li = document.createElement('li');
ul.appendChild(li);
li.textContent = `Total: ${Tokyo.sumOfCookies} cookies`;



const Dubai = {
    name: 'Dubai',
    minCookiesPerHour: 11,
    maxCookiesPerHour: 38,
    avgCookiesPerCustomer: 3.7,
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
Dubai.calcCookiesPerHour();
console.log(Dubai.cookiesThroughTheDayForLocation);
console.log(Dubai.sumOfCookies);

 section = document.getElementById("first");
console.log(section);
h2 = document.createElement('h2');
console.log(h2);
section.appendChild(h2);
h2.textContent = Dubai.name;

ul = document.createElement('ul');
section.appendChild(ul);

li;
time = 6;
pm = "false";
for(let i=0; i< Dubai.cookiesThroughTheDayForLocation.length; i++){
    li = document.createElement('li');
    ul.appendChild(li);
    if( i <= 6 ){
        li.textContent = `${time}am: ${Dubai.cookiesThroughTheDayForLocation[i]} cookies`;
    }else {
        li.textContent = `${time}pm: ${Dubai.cookiesThroughTheDayForLocation[i]} cookies`;
    }
    time = time%12;
    time++;
}
li = document.createElement('li');
ul.appendChild(li);
li.textContent = `Total: ${Dubai.sumOfCookies} cookies`;



const Paris = {
    name: 'Paris',
    minCookiesPerHour: 20,
    maxCookiesPerHour: 38,
    avgCookiesPerCustomer: 2.3,
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
Paris.calcCookiesPerHour();
console.log(Paris.cookiesThroughTheDayForLocation);
console.log(Paris.sumOfCookies);

 section = document.getElementById("first");
console.log(section);
h2 = document.createElement('h2');
console.log(h2);
section.appendChild(h2);
h2.textContent = Paris.name;

ul = document.createElement('ul');
section.appendChild(ul);

li;
time = 6;
pm = "false";
for(let i=0; i< Paris.cookiesThroughTheDayForLocation.length; i++){
    li = document.createElement('li');
    ul.appendChild(li);
    if( i <= 6 ){
        li.textContent = `${time}am: ${Paris.cookiesThroughTheDayForLocation[i]} cookies`;
    }else {
        li.textContent = `${time}pm: ${Paris.cookiesThroughTheDayForLocation[i]} cookies`;
    }
    time = time%12;
    time++;
}
li = document.createElement('li');
ul.appendChild(li);
li.textContent = `Total: ${Paris.sumOfCookies} cookies`;
