'use strict';

const picArray = [
  {
    title: 'Title 1',
    caption: 'Caption 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: {
      large: 'img/pic1.jpg',
      medium: 'thumbnails/pic1.jpg',
    },
  },
  {
    title: 'Title 2',
    caption: 'Caption 2',
    description: 'Donec dignissim tincidunt nisl, non scelerisque massa.',
    image: {
      large: 'img/pic2.jpg',
      medium: 'thumbnails/pic2.jpg',
    },
  },
  {
    title: 'Title 3',
    caption: 'Caption 3',
    description: 'Phasellus imperdiet nunc tincidunt molestie vestibulum.',
    image: {
      large: 'img/pic3.jpg',
      medium: 'thumbnails/pic3.jpg',
    },
  },
  {
    title: 'Title 4',
    caption: 'Caption 4',
    description: 'Duis sodales enim eget leo condimentum vulputate.',
    image: {
      large: 'img/pic4.jpg',
      medium: 'thumbnails/pic4.jpg',
    },
  },
  {
    title: 'Title 5',
    caption: 'Caption 5',
    description: 'Sed vel velit ante. Aenean quis viverra magna.',
    image: {
      large: 'img/pic5.jpg',
      medium: 'thumbnails/pic5.jpg',
    },
  },
  {
    title: 'Title 6',
    caption: 'Caption 6',
    description: 'Sed vel velit ante. Aenean quis viverra magna.',
    image: {
      large: 'img/pic6.jpg',
      medium: 'thumbnails/pic6.jpg',
    },
  },
  {
    title: 'Title 7',
    caption: 'Caption 7',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: {
      large: 'img/pic7.jpg',
      medium: 'thumbnails/pic7.jpg',
    },
  },
  {
    title: 'Title 8',
    caption: 'Caption 8',
    description: 'Praesent eget cursus urna. Ut rhoncus interdum dolor.',
    image: {
      large: 'img/pic8.jpg',
      medium: 'thumbnails/pic8.jpg',
    },
  },
  {
    title: 'Title 9',
    caption: 'Caption 9',
    description: 'Praesent eget cursus urna. Ut rhoncus interdum dolor.',
    image: {
      large: 'img/pic9.jpg',
      medium: 'thumbnails/pic9.jpg',
    },
  },
];

const picturesSection = document.getElementById('pictures');

function addArticles() {
  picArray.forEach(pic => {
    const article = document.createElement('article');
    article.classList.add('card');

    const title = document.createElement('h2');
    title.textContent = pic.title;
    article.appendChild(title);

    const figure = document.createElement('figure');

    const img = document.createElement('img');
    img.src = pic.image.medium;
    img.alt = pic.title;
    figure.appendChild(img);

    const caption = document.createElement('figcaption');
    caption.textContent = pic.caption;
    figure.appendChild(caption);

    article.appendChild(figure);

    const description = document.createElement('p');
    description.textContent = pic.description;
    article.appendChild(description);

    picturesSection.appendChild(article);
  });
}

addArticles();
