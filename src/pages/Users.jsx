import SearchBar from "../components/SearchBar/SearchBar";
import UserCard from "../components/UserCard/UserCard";

const user = { username: "Ebanx3", urlAvatar: "" };

export default function Users() {
  return (
    <>
      <SearchBar />
      <div className="grid grid-cols-4">
        <UserCard />
      </div>
    </>
  );
}
