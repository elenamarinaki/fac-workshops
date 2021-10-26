import React from 'react';

import DishList from './DishList';
import PriceFilter from './PriceFilter';
import CategoryFilter from './CategoryFilter';
import SearchDish from './SearchDish';

function App() {
  const [min, setMin] = React.useState(0.5);
  const [max, setMax] = React.useState(9);
  const [check, setCheck] = React.useState('all');
  const [input, updInput] = React.useState('');

  // const filteredDishes = dishes.filter((dish) =>
  //   dish.name.toLowerCase().includes(input.toLowerCase())
  // );

  return (
    <main>
      <section className='filters'>
        <h1>Burger Place</h1>
        <form>
          <PriceFilter min={min} setMin={setMin} max={max} setMax={setMax} />
          <CategoryFilter check={check} setCheck={setCheck} />
          <SearchDish input={input} updInput={updInput} />
        </form>
      </section>

      <section className='dishes'>
        <h2>Dishes</h2>
        <DishList
          min={min}
          max={max}
          category={check}
          input={input}
          updInput={updInput}
        />
      </section>
    </main>
  );
}

export default App;
