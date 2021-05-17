var branchs = []
time1 = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];
function Branch(name, maxHourlyCustomers, minHourlyCustomers, avgCookiesPerCustomer) {//first we put every probarities variable in the opject to the function structor
  this.name = name;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.minHourlyCustomers = minHourlyCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.randomcustumer = 0;
  this.numberCookiesBerHour = 0;
  this.purchased = [];
  this.total = 0;
  this.time = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];
  this.getTotalArray();// to active the function just on branch 1
  this.render();
}

Branch.prototype.getTotalArray = function () {//we  use prototype to write the function out of function stractor
  for (var i = 0; i < 14; i++) {
    this.randomcustumer = getRandomInt(this.minHourlyCustomers, this.maxHourlyCustomers);
    this.numberCookiesBerHour = Math.floor(this.randomcustumer * this.avgCookiesPerCustomer);
    this.purchased.push(this.numberCookiesBerHour);
    this.total += this.purchased[i];
  }
}

Branch.prototype.render = function () {
  var container = document.getElementById('cookies');
  var articleEl = document.createElement('article');
  container.appendChild(articleEl);

  // var h2El = document.createElement('h2');
  // articleEl.appendChild(h2El);
  // h2El.textContent = this.name;

  // var ulEl = document.createElement('ul');
  // articleEl.appendChild(ulEl);

  // for (var i = 0; i < this.time.length; i++) {
  //     var liEl = document.createElement('li');
  //     liEl.textContent = this.time[i] + this.purchased[i] + " cookies";
  //     ulEl.appendChild(liEl);
  // }
  // var liTotalEl = document.createElement('li');
  // liTotalEl.textContent = "Total: " + this.total + " cookies";
  // ulEl.appendChild(liTotalEl);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function fell(namo, arr, tota) {
  var tr2El = document.createElement('tr');
  tableEl.appendChild(tr2El);
  var th2El = document.createElement('td');
  th2El.textContent = namo;
  tr2El.appendChild(th2El);
  for (var i = 0; i < arr.length + 1; i++) {
    var th2El = document.createElement('td');
    th2El.textContent = arr[i];
    tr2El.appendChild(th2El);
  }
  var th2El = document.createElement('td');
  th2El.textContent = tota;
  tr2El.appendChild(th2El);
}

function tabledata() {
  var totalArray = []
  var branchssum = 0
  fell('', time1, 'Daily Location Total', 'th');

  for (var i = 0; i < branchs.length; i++) {
    fell(branchs[i].name, branchs[i].purchased, branchs[i].total);
  }

  for (var i = 0; i < time1.length; i++) {
    var Sum = 0
    for (var index = 0; index < branchs.length; index++) {
      Sum += branchs[index].purchased[i]
    }
    branchssum += Sum
    totalArray.push(Sum)
  }
  fell('Total', totalArray, branchssum);

}

branchs.push(new Branch('Seattle', 65, 23, 6.3));//we use new to use th stactor 
branchs.push(new Branch('Tokyo', 24, 3, 1.2));//we use new to use th stactor 
branchs.push(new Branch('Dubai', 38, 11, 3.7));//we use new to use th stactor 
branchs.push(new Branch('Paris', 38, 20, 2.3));//we use new to use th stactor 
branchs.push(new Branch('Lima', 16, 2, 4.6));//we use new to use th stactor 

//####The table#####
var branchDivCon = document.getElementById('cookies');
var tableEl = document.createElement('table');
branchDivCon.appendChild(tableEl);

var branchForm = document.getElementById('Form');
tabledata();

branchForm.addEventListener('submit', function (event) {
  for (var i = 0; i < branchs.length + 2; i++) {
    tableEl.deleteRow(0)
  }

  event.preventDefault();
  var name = event.target.name.value;
  var maxHourlyCustomers = event.target.maxHourlyCustomers.value;
  var minHourlyCustomers = event.target.minHourlyCustomers.value;
  var avgCookiesPerCustomer = event.target.avgCookiesPerCustomer.value;

  branchs.push(new Branch(name, maxHourlyCustomers, minHourlyCustomers, avgCookiesPerCustomer));
  tabledata()

});