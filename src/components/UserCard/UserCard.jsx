/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import NoAvatar from "../../assets/noAvatar.svg";

// eslint-disable-next-line react/prop-types
export default function UserCard({ user }) {
  return (
    <Link
      to={`/user/${user.username}`}
      className="flex flex-col p-6 bg-zinc-100 dark:bg-zinc-800 items-center gap-4 rounded-xl shadow-md hover:bg-zinc-200 dark:hover:bg-zinc-700"
    >
      <img
        src={user.urlAvatar ?? NoAvatar}
        className="w-44 h-44 rounded-full object-cover border-2 border-zinc-500"
      />

      <span className="text-xl font-bold">{user.username}</span>
      <span className="text-center text-zinc-600 dark:text-zinc-300 font-medium">
        {user.title}
      </span>
    </Link>
  );
}
