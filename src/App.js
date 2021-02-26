import './App.css';
import HeaderWelcome from './Header';
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("Mayur");  // react hooks
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))
  },
    []); // [] means run once

  function switchUser() {
    name === "Mayur" ? setName("Yash") : setName("Mayur");
  }

  // components and props
  return (
    <div className="App">
      <HeaderWelcome title={name} />
      <p>Welcome to My Blog!</p>
      <button onClick={(e) => switchUser()}>Switch</button>
      <hr />
      <ul>
        {users.map((user) =>
          <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
