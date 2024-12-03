'use strict';

const TargetElement = document.querySelector(`#target`);

const names = ['John', 'Paul', 'Jones'];
for (let i = 0; i < 3; i++) {
  TargetElement.innerHTML += `<li>${names[i]}</li>`
}
