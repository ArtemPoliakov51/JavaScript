const TargetElement = document.querySelector(`#target`);

const arrays = ['First item', 'Second item', 'Third item']

for (let i = 0; i < 3; i++) {
  const element = document.createElement(`li`);
  element.textContent = (arrays[i]);
  TargetElement.classList.toggle('my-item');
  TargetElement.appendChild(element);
}
