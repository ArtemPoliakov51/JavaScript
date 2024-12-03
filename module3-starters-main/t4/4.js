
const TargetElement = document.querySelector(`#target`);

'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];



for ( let i = 0; i < students.length; i++) {
  const element = document.createElement(`option`);
  element.textContent = (students[i].name);
  element.value = (students[i].id)
  TargetElement.appendChild(element);
}