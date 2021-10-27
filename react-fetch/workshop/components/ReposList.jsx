import React from 'react';

function ReposList(props) {
  const [repo, setRepo] = React.useState();

  React.useEffect(() => {
    fetch(props.url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return setRepo(data);
      });
  }, [props.url]);

  if (!repo) {
    return <div>Loading repositories...</div>;
  } else {
    return (
      <ul>
        {repo.map((r) => (
          <li key={r.id}>
            <a href={r.url}>{r.name}</a> | | ⭐️ {r.stargazers_count}
          </li>
        ))}
      </ul>
    );
  }
}

export default ReposList;
