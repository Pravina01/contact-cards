import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

export default function App() {
  const [users, setUsers] = useState([]);
  const addUser = (u) => setUsers([...users, { id: Date.now(), ...u }]);
  const removeUser = (id) => setUsers(users.filter((u) => u.id !== id));
  return (
    <div className="app">
      <h1>Contact Cards</h1>
      <UserForm onAdd={addUser} />
      <UserList users={users} onRemove={removeUser} />
    </div>
  );
}
