import React from 'react';

// Sasha's solution - using map on the categories object
const categories = [
  'all',
  'burger',
  'hot dog',
  'sandwich',
  'fries',
  'topping',
  'drink',
  'extra',
];

function CategoryFilter(props) {
  return (
    <fieldset>
      <legend>Category</legend>

      {categories.map((genre) => (
        <label key={genre} htmlFor={genre}>
          {genre.charAt(0).toUpperCase() + genre.slice(1)}
          <input
            type='radio'
            name='categories'
            id={genre}
            value={genre}
            checked={props.category === genre}
            onChange={(event) => props.setCheck(event.target.value)}
          />
        </label>
      ))}
    </fieldset>
  );
}

// function CategoryFilter(props) {
//   return (
//     <fieldset>
//       <label htmlFor='burger'>
//         Burger
//         <input
//           type='radio'
//           name='categories'
//           id='burger'
//           value='burger'
//           checked={props.check === 'burger'}
//           onChange={(event) => props.setCheck(event.target.value)}
//         />
//       </label>
//       <label htmlFor='hot-dog'>
//         Hot Dog
//         <input
//           type='radio'
//           name='categories'
//           id='hot-dog'
//           value='hot-dog'
//           checked={props.check === 'hot-dog'}
//           onChange={(event) => props.setCheck(event.target.value)}
//         />
//       </label>
//     </fieldset>
//   );
// }

export default CategoryFilter;
