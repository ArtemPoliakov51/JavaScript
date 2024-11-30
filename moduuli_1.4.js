function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const name = prompt('Type your name.');

let random = getRandomInt(5)

if (random === 1) {
  console.log(`${name}, you are Gryffindor`);
  document.querySelector('#hat').innerHTML = `${name}, you are Gryffindor`;
} else if (random === 2) {
  console.log(`${name}, you are Slytherin`);
  document.querySelector('#hat').innerHTML = `${name}, you are Slytherin`;
} else if (random === 3) {
  console.log(`${name}, you are Hufflepuff`);
  document.querySelector('#hat').innerHTML = `${name}, you are Hufflepuff`;
} else if (random === 4) {
  console.log(`${name}, you are Ravenclaw`);
  document.querySelector('#hat').innerHTML = `${name}, you are Ravenclaw`;
}

