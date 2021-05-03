"use strict";





const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const seattle = {
  city: 'Seattle',
  MinC: 23,
  MaxC: 65,
  avgCookies: 6.3,
  customersPirHour: [],
  cookiesPirHour: [],
  total: 0,


  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {


      this.customersPirHour.push(random(this.MinC, this.MaxC));
    }
  },
  calcCookiesEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesPirHour.push(Math.floor(this.customersPirHour[i] * this.avgCookies));

      this.total += this.cookiesPirHour[i];
    }

  },
  renderFunction: function () {

    let theParent = document.getElementById('callCity');
    console.log(theParent);
    let shopName = document.createElement('h2');

    theParent.appendChild(shopName);

    shopName.textContent = this.city;


    let unorderedList = document.createElement('ul');
    theParent.appendChild(unorderedList);


    for (let i = 0; i < hours.length; i++) {
      let listItem = document.createElement('li');
      unorderedList.appendChild(listItem);

      listItem.textContent = `${hours[i]}: ${this.cookiesPirHour[i]} cookies.`

    }

    let totalItem = document.createElement('li');
    unorderedList.appendChild(totalItem);
    totalItem.textContent = `Total: ${this.total} cookies`
  }
}

console.log(seattle);
seattle.calcCustomersEachHour();
seattle.calcCookiesEachHour();
seattle.renderFunction();

// Tokyo city:-



function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const tokyo = {
  city: 'tokyo',
  MinC: 3,
  MaxC: 24,
  avgCookies: 1.2,
  customersPirHour: [],
  cookiesPirHour: [],
  total: 0,


  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {


      this.customersPirHour.push(random(this.MinC, this.MaxC));
    }
  },
  calcCookiesEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesPirHour.push(Math.floor(this.customersPirHour[i] * this.avgCookies));

      this.total += this.cookiesPirHour[i];
    }

  },
  renderFunction: function () {

    let theParent = document.getElementById('callCity');
    console.log(theParent);
    let shopName = document.createElement('h2');

    theParent.appendChild(shopName);

    shopName.textContent = this.city;


    let unorderedList = document.createElement('ul');
    theParent.appendChild(unorderedList);


    for (let i = 0; i < hours.length; i++) {
      let listItem = document.createElement('li');
      unorderedList.appendChild(listItem);

      listItem.textContent = `${hours[i]}: ${this.cookiesPirHour[i]} cookies.`

    }

    let totalItem = document.createElement('li');
    unorderedList.appendChild(totalItem);
    totalItem.textContent = `Total: ${this.total} cookies`
  }
}

console.log(tokyo);
tokyo.calcCustomersEachHour();
tokyo.calcCookiesEachHour();
tokyo.renderFunction();

//[3] Dubai city:- 

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Dubai = {
  city: 'Dubai',
  MinC: 11,
  MaxC: 38,
  avgCookies: 3.7,
  customersPirHour: [],
  cookiesPirHour: [],
  total: 0,


  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {


      this.customersPirHour.push(random(this.MinC, this.MaxC));
    }
  },
  calcCookiesEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesPirHour.push(Math.floor(this.customersPirHour[i] * this.avgCookies));

      this.total += this.cookiesPirHour[i];
    }

  },
  renderFunction: function () {

    let theParent = document.getElementById('callCity');
    console.log(theParent);
    let shopName = document.createElement('h2');

    theParent.appendChild(shopName);

    shopName.textContent = this.city;


    let unorderedList = document.createElement('ul');
    theParent.appendChild(unorderedList);


    for (let i = 0; i < hours.length; i++) {
      let listItem = document.createElement('li');
      unorderedList.appendChild(listItem);

      listItem.textContent = `${hours[i]}: ${this.cookiesPirHour[i]} cookies.`

    }

    let totalItem = document.createElement('li');
    unorderedList.appendChild(totalItem);
    totalItem.textContent = `Total: ${this.total} cookies`
  }
}

console.log(Dubai);
Dubai.calcCustomersEachHour();
Dubai.calcCookiesEachHour();
Dubai.renderFunction();


//[4] paris city:-


function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const paris = {
  city: ' paris',
  MinC: 20,
  MaxC: 38,
  avgCookies: 2.3,
  customersPirHour: [],
  cookiesPirHour: [],
  total: 0,


  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {


      this.customersPirHour.push(random(this.MinC, this.MaxC));
    }
  },
  calcCookiesEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesPirHour.push(Math.floor(this.customersPirHour[i] * this.avgCookies));

      this.total += this.cookiesPirHour[i];
    }

  },
  renderFunction: function () {

    let theParent = document.getElementById('callCity');
    console.log(theParent);
    let shopName = document.createElement('h2');

    theParent.appendChild(shopName);

    shopName.textContent = this.city;


    let unorderedList = document.createElement('ul');
    theParent.appendChild(unorderedList);


    for (let i = 0; i < hours.length; i++) {
      let listItem = document.createElement('li');
      unorderedList.appendChild(listItem);

      listItem.textContent = `${hours[i]}: ${this.cookiesPirHour[i]} cookies.`

    }

    let totalItem = document.createElement('li');
    unorderedList.appendChild(totalItem);
    totalItem.textContent = `Total: ${this.total} cookies`
  }
}

console.log(paris);
paris.calcCustomersEachHour();
paris.calcCookiesEachHour();
paris.renderFunction();

// [5] Lima city:-


function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Lima = {
  city: 'Lima',
  MinC: 2,
  MaxC: 16,
  avgCookies: 1.2,
  customersPirHour: [],
  cookiesPirHour: [],
  total: 0,


  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {


      this.customersPirHour.push(random(this.MinC, this.MaxC));
    }
  },
  calcCookiesEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesPirHour.push(Math.floor(this.customersPirHour[i] * this.avgCookies));

      this.total += this.cookiesPirHour[i];
    }

  },
  renderFunction: function () {

    let theParent = document.getElementById('callCity');
    console.log(theParent);
    let shopName = document.createElement('h2');

    theParent.appendChild(shopName);

    shopName.textContent = this.city;


    let unorderedList = document.createElement('ul');
    theParent.appendChild(unorderedList);


    for (let i = 0; i < hours.length; i++) {
      let listItem = document.createElement('li');
      unorderedList.appendChild(listItem);

      listItem.textContent = `${hours[i]}: ${this.cookiesPirHour[i]} cookies.`

    }

    let totalItem = document.createElement('li');
    unorderedList.appendChild(totalItem);
    totalItem.textContent = `Total: ${this.total} cookies`
  }
}

console.log(Lima);
Lima.calcCustomersEachHour();
Lima.calcCookiesEachHour();
Lima.renderFunction();


// i will to do the table to information above this line 




