import React from 'react';

function Profile({ user, setUser }) {
  //   const [userData, setUserData] = React.useState();

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${user}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1>{user.name}</h1>
        <p>{user.id}</p>
        <img src={user.avatar_url} />
      </div>
    );
  }
}

export default Profile;
