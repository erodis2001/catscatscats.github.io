var myHeading = document.querySelector('h1');
myHeading.textContent = 'CATS CATS';

var myWhatever = ['cats','bats','rats'];

var myH2 = document.querySelector('h2');
myH2.textContent = myWhatever[0];

var myH3 = document.querySelector('h3');
myH3.textContent = myWhatever[1];

var myH4 = document.querySelector('h4');
myH4.textContent = myWhatever[2];

document.querySelector('h2').onclick = function() {
    alert('Ehhhh...');
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/kitten1.jpg') {
      myImage.setAttribute ('src','images/cat.jpg');
    } else {
      myImage.setAttribute ('src','images/kitten1.jpg');
    } 
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'CATS CATS, ' + myName;
}

myButton.onclick = function() {
  setUserName();
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'CATS CATS, ' + storedName;
}