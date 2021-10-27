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
          console.log(e.target.username.value);
          setName(e.target.username.value);
        }}
      >
        <input
          type='search'
          aria-label='Search users'
          placeholder='Search users'
          name='username'
        />
        {/* <SearchUser name={name} setName={setName} /> */}
      </form>
      <Profile name={name} />
      {/* <Profile username='elenamarinaki' /> */}
    </main>
  );
}

export default App;
