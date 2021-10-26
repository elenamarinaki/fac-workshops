import React from 'react';

function Profile({ name}) {
  const [userData, setUserData] = React.useState();

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${name}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [name]);

  if (!userData) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1>{userData.name}</h1>
        <p>{userData.id}</p>
        <img src={userData.avatar_url} />
      </div>
    );
  }
}

export default Profile;
