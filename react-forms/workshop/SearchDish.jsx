import React from 'react';

function SearchDish(props) {
  return (
    <input
      type='search'
      input={props.input}
      onChange={(e) => {
        props.updInput(e.target.value);
        console.log(e.target.value);
      }}
    />
  );
}

export default SearchDish;
