import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function getRandomExcuse() {
  const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  const action = ['ate', 'peed', 'crushed', 'broke'];
  const what = ['my homework', 'my phone', 'the car'];
  const when = [
    'before the class',
    'when I was sleeping',
    'while I was exercising',
    'during my lunch',
    'while I was praying'
  ];
  
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];
  
  return `${pick(who)} ${pick(action)} ${pick(what)} ${pick(when)}`;
}

function displayExcuse() {
  const excuseElement = document.getElementById('excuse');
  excuseElement.innerHTML = getRandomExcuse();
}

displayExcuse();

};
