
const targetImage = document.querySelector('#target');
const originalSrc = 'img/picA.jpg';
const hoverSrc = 'img/picB.jpg';


targetImage.addEventListener('mouseover', () => {
    targetImage.src = hoverSrc;
});


targetImage.addEventListener('mouseout', () => {
    targetImage.src = originalSrc;
});