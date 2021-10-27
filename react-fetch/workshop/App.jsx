import React from 'react';
import Profile from './components/Profile';
import SearchUser from './components/SearchUser';

function App() {
  const [name, setName] = React.useState('elenamarinaki');
  return (
    <main>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target.value);
          setName(e.target.value);
        }}
      >
        <input
          type='search'
          aria-label='Search users'
          placeholder='Search users'
          value={name}
        />
        {/* <SearchUser name={name} setName={setName} /> */}
      </form>
      <Profile name={name} />
      {/* <Profile username='elenamarinaki' /> */}
    </main>
  );
}

export default App;
