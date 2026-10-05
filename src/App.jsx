import { useEffect, useState } from "react";
import Header from "./components/Header";
import UserList from "./components/UserList";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const url = "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/users.json";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    }
    fetchUsers();
  }, []);

  return (
    <main className="app">
      <Header />
      <UserList users={users} />
    </main>
  );
}
