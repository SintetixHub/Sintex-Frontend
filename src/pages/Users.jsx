import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import UserCard from "../components/UserCard/UserCard";
import { getAll } from "../api/getAllUsers";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getAll();
      if (response.success) {
        setUsers(response.data);
      }
    })();
  }, []);

  return (
    <>
      <SearchBar />
      <div className="grid grid-cols-4 gap-6 mt-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}
