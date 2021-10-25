import dogs from './dogs.js';

function createEl(tag, props, ...children) {
  const element = document.createElement(tag);
  for (const prop in props) {
    element[prop] = props[prop];
  }
  element.append(...children);
  return element;
}

// PROPS = ATTRIBUTES
const elements = dogs.map((dog) => {
  const h2 = createEl('h2', {}, dog.name);

  const img = createEl('img', {
    src: dog.image,
  });

  const li = createEl('li', { className: 'card' }, h2, img);

  return li;
});

const title = 

// const elements = dogs.map((dog) => {
//   const h2 = document.createElement('h2');
//   h2.textContent = dog.name;

//   const img = document.createElement('img');
//   img.src = dog.image;

//   const li = document.createElement('li');
//   li.append(h2, img);

//   return li;
// });

// const title = document.createElement('h1');
// title.textContent = 'Dogs list';

// const ul = document.createElement('ul');
// ul.append(...elements);

document.querySelector('#app').append(title, ul);
