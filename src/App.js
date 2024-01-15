import React, { useState, useEffect } from "react";
import User from "./components/users/User";
import AddUser from "./components/users/AddUser";

function App() {
  let [users, setUsers] = useState([]);
  let [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((users) => {
        let rawUsers = users.results;
        let filteredUsers = rawUsers.map((user) => {
          return {
            uuid: user.login.uuid,
            name: `${user.name.title} ${user.name.first} ${user.name.last}`,
            phone: user.phone,
            cell: user.cell,
            image: user.picture.thumbnail,
          };
        });
        setUsers(filteredUsers);
      })
      .catch((err) => console.log(err));
  }, []);

  let addUserHandler = (user) => {
    let newUsers = [user, ...users];
    setUsers(newUsers);
    setShowForm(!showForm);
  };

  let removeUserHandler = (uuid) => {
    let remainUsers = users.filter((user) => user.uuid != uuid);
    setUsers(remainUsers);
  };

  let showFormHandler = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="container my-5">
      <div className=" text-center text-info">
        <h1>Employees</h1>
        <button
          className="btn btn-primary btn-sm mb-3"
          onClick={showFormHandler}
        >
          Add User
        </button>
        {showForm && <AddUser addUser={addUserHandler}></AddUser>}
        {users.map((user) => (
          <User data={user} key={user.uuid} remove={removeUserHandler}></User>
        ))}
      </div>
    </div>
  );
}

export default App;
