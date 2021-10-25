import dogs from './dogs.js';
import createEl from './create-element.js';

const cardTemplate = document.querySelector('#cardTemplate');
cardTemplate.innerHTML = /*html*/ `
    <li>
        <h2></h2>
        <img src="" alt="" />
    </li>
`;
const clone = template.content.cloneNode(true);

const elements = dogs.map((dog) => {
  const clone = cardTemplate.content.cloneNode(true);
  clone.querySelector('h2').append(dog.name);
  clone.querySelector('img').append(dog.name);
  return clone;
});

const pageTemplate = document.querySelector('#pageTemplate');
pageTemplate.innerHTML = /*html*/ `
    <h1>Dogs list</h1>
    <ul></ul>
`;

const clone = pageTemplate.content.cloneNode(true);
clone.querySelector('ul').append(...elements);

document.querySelector('#app').append(clone);
