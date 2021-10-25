import dogs from './dogs.js';
import createEl from './create-element.js';

// ------------------------------------------- CHALLENGE 2
// PROPS = ATTRIBUTES
// const elements = dogs.map((dog) => {
//   const h2 = createEl('h2', {}, dog.name);

//   const img = createEl('img', {
//     src: dog.image,
//   });

//   const li = createEl('li', { className: 'card' }, h2, img);

//   return li;
// });

// const title = createEl('h1', {}, 'Dogs list');
// const ul = createEl('ul', {}, ...elements);

// ------------------------------------------- CHALLENGE 1

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

// document.querySelector('#app').append(title, ul);

// ------------------------------------------- CHALLENGE 3

const elements = dogs.map((dog) => {
  return /*html*/ `
        <li class='card'>
            <h2>${dog.name}</h2>
            <img src="${dog.image}" alt="" />
        </li>
    `;
});

document.querySelector('#app').innerHTML = /*html*/ `
<h1>Dogs list</h1>
<ul>
    ${elements.join('\n')}
</ul>
`;
