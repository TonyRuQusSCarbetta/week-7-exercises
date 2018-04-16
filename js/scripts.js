// Answering the Exercises section at this website http://codifyacademy.com/wk7  

var largeHeader = document.getElementById('largeHeader');
largeHeader.innerHTML = 'This is a large Header h1';

function buttonClick() {
  var inputValue = document.getElementById('myInput').value;
  console.log(inputValue);


var anotherLargeHeader = document.getElementById('anotherLargeHeader');
console.log(anotherLargeHeader);
anotherLargeHeader.textContent = inputValue;
}

var myArray = ['brian', 'jess', 'tony', 'henzley', 'julio'];
for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

var myObject = {
  name: 'Tony',
  gender: 'Male',
  occupation: 'Web Developer',
};

console.log(myObject.name);
console.log(myObject.gender);
console.log(myObject.occupation);

var headerTwo = document.getElementById('headerTwo');
headerTwo.innerHTML = myObject.name;
var headerThree = document.getElementById('headerThree');
headerThree.innerHTML = myObject.gender;
var headerFour = document.getElementById('headerFour');
headerFour.innerHTML = myObject.occupation;


//make three objects
//store objs in array

  var objOne = {
    Name: 'Socks',
    Stock: 'In Stock',
    Size: 'Small',
  };

  var objTwo = {
    Name: 'Shoes',
    Stock: 'Out of Stock',
    Size: 'Medium',
  };

  var objThree = {
    Name: 'Pants',
    Stock: 'In Stock',
    Size: 'Large',
  };

var newArray = [objOne, objTwo, objThree];

// loop over objects and log all properties to console
for (var i = 0; i < newArray.length; i++) {
  console.log(newArray[i].Name, newArray[i].Size, newArray[i].Stock);
}

document.body.style.color = 'red';
