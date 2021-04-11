'use strict';


//LOCATION: SEATTLE
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
    listingItems: function(){
        this.calcCookiesPerHour();
        console.log(this.cookiesThroughTheDayForLocation);
        console.log(this.sumOfCookies);

        let section = document.getElementById("first");
        console.log(section);
        let h2 = document.createElement('h2');
        console.log(h2);
        section.appendChild(h2);
        h2.textContent = this.name;

        let ul = document.createElement('ul');
        section.appendChild(ul);

        let li;
        let time = 6;
        let pm = "false";
        for(let i=0; i< this.cookiesThroughTheDayForLocation.length; i++){
            li = document.createElement('li');
            ul.appendChild(li);
            if( i <= 6 ){
                li.textContent = `${time}am: ${this.cookiesThroughTheDayForLocation[i]} cookies`;
            }else {
                li.textContent = `${time}pm: ${this.cookiesThroughTheDayForLocation[i]} cookies`;
            }
            time = time%12;
            time++;
        }
        li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `Total: ${this.sumOfCookies} cookies`;

    }

    
}
Seattle. listingItems();



//LOCATION: TOKYO
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
    listingItems: function(){
        this.calcCookiesPerHour();
        console.log(this.cookiesThroughTheDayForLocation);
        console.log(this.sumOfCookies);

        let section = document.getElementById("first");
        console.log(section);
        let h2 = document.createElement('h2');
        console.log(h2);
        section.appendChild(h2);
        h2.textContent = this.name;

        let ul = document.createElement('ul');
        section.appendChild(ul);

        let li;
        let time = 6;
        let pm = "false";
        for(let i=0; i< this.cookiesThroughTheDayForLocation.length; i++){
            li = document.createElement('li');
            ul.appendChild(li);
            if( i <= 6 ){
                li.textContent = `${time}am: ${this.cookiesThroughTheDayForLocation[i]} cookies`;
            }else {
                li.textContent = `${time}pm: ${this.cookiesThroughTheDayForLocation[i]} cookies`;
            }
            time = time%12;
            time++;
        }
        li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `Total: ${this.sumOfCookies} cookies`;

    }

    
}
Tokyo.listingItems();



//LOCATION: DUBAI
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
    listingItems: function(){
        this.calcCookiesPerHour();
        console.log(this.cookiesThroughTheDayForLocation);
        console.log(this.sumOfCookies);

        let section = document.getElementById("first");
        console.log(section);
        let h2 = document.createElement('h2');
        console.log(h2);
        section.appendChild(h2);
        h2.textContent = this.name;

        let ul = document.createElement('ul');
        section.appendChild(ul);

        let li;
        let time = 6;
        let pm = "false";
        for(let i=0; i< this.cookiesThroughTheDayForLocation.length; i++){
            li = document.createElement('li');
            ul.appendChild(li);
            if( i <= 6 ){
                li.textContent = `${time}am: ${this.cookiesThroughTheDayForLocation[i]} cookies`;
            }else {
                li.textContent = `${time}pm: ${this.cookiesThroughTheDayForLocation[i]} cookies`;
            }
            time = time%12;
            time++;
        }
        li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `Total: ${this.sumOfCookies} cookies`;

    }

    
}
Dubai.listingItems();


//LOCATION: PARIS
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
    listingItems: function(){
        this.calcCookiesPerHour();
        console.log(this.cookiesThroughTheDayForLocation);
        console.log(this.sumOfCookies);

        let section = document.getElementById("first");
        console.log(section);
        let h2 = document.createElement('h2');
        console.log(h2);
        section.appendChild(h2);
        h2.textContent = this.name;

        let ul = document.createElement('ul');
        section.appendChild(ul);

        let li;
        let time = 6;
        let pm = "false";
        for(let i=0; i< this.cookiesThroughTheDayForLocation.length; i++){
            li = document.createElement('li');
            ul.appendChild(li);
            if( i <= 6 ){
                li.textContent = `${time}am: ${this.cookiesThroughTheDayForLocation[i]} cookies`;
            }else {
                li.textContent = `${time}pm: ${this.cookiesThroughTheDayForLocation[i]} cookies`;
            }
            time = time%12;
            time++;
        }
        li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `Total: ${this.sumOfCookies} cookies`;

    }

    
}
Paris.listingItems();


//LOCATION: LIMA
const Lima = {
    name: 'Lima',
    minCookiesPerHour: 2,
    maxCookiesPerHour: 16,
    avgCookiesPerCustomer: 4.6,
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
    listingItems: function(){
        this.calcCookiesPerHour();
        console.log(this.cookiesThroughTheDayForLocation);
        console.log(this.sumOfCookies);

        let section = document.getElementById("first");
        console.log(section);
        let h2 = document.createElement('h2');
        console.log(h2);
        section.appendChild(h2);
        h2.textContent = this.name;

        let ul = document.createElement('ul');
        section.appendChild(ul);

        let li;
        let time = 6;
        let pm = "false";
        for(let i=0; i< this.cookiesThroughTheDayForLocation.length; i++){
            li = document.createElement('li');
            ul.appendChild(li);
            if( i <= 6 ){
                li.textContent = `${time}am: ${this.cookiesThroughTheDayForLocation[i]} cookies`;
            }else {
                li.textContent = `${time}pm: ${this.cookiesThroughTheDayForLocation[i]} cookies`;
            }
            time = time%12;
            time++;
        }
        li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `Total: ${this.sumOfCookies} cookies`;

    }

    
}
Lima.listingItems();


