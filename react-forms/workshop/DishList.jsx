import React from 'react';
import dishes from '../data';

function DishList(props) {
  return (
    <ul className='grid'>
      {dishes
        .filter((dish) => dish.price > props.min && dish.price < props.max)
        .filter(
          (dish) => props.category === dish.category || props.category === 'all'
        )
        .filter((dish) => {
          return dish.name
            .toLowerCase()
            .includes(props.input.toLowerCase());
        })
        .map((dish) => (
          <li key={dish.id} className='card'>
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <div>£{dish.price.toFixed(2)}</div>
          </li>
        ))}
    </ul>
  );
}

export default DishList;
