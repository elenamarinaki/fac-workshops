import React from 'react';
import Profile from './components/Profile';
import SearchUser from './components/SearchUser';

function App() {
  const [user, setUser] = React.useState('elenamarinaki');
  return (
    <main>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setUser(e.target.username.value);
        }}
      >
        <SearchUser user={user} setUser={setUser} />
      </form>
      <Profile user={user} setUser={setUser} />
      {/* <Profile username='cemalokten' />
      <Profile username='elenamarinaki' />
      <Profile username='cerealenjoyer' /> */}
    </main>
  );
}

export default App;
