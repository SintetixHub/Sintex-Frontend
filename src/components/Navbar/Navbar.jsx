import { Link, NavLink } from "react-router-dom";
import { useUserContext } from "../../context/useUserContext";
import SigninButton from "./SigninButton";
import UserButton from "./UserButton";
import DarkModeButton from "./DarkModeButton";

export default function Navbar() {
  const { user } = useUserContext();
  return (
    <nav className="h-8 flex justify-between items-center px-20 py-10">
      <Link
        to="/"
        className="text-4xl hover:text-cyan-500 font-bold dark:hover:text-orange-500"
      >
        Sintex
      </Link>
      <div className="flex gap-4 font-medium items-center">
        <DarkModeButton />
        <NavLink to="/projects" className=" hover:text-zinc-400">
          Proyectos
        </NavLink>
        <NavLink to="/posts" className=" hover:text-zinc-400">
          Posts
        </NavLink>
        <NavLink to="/users" className=" hover:text-zinc-400">
          Miembros
        </NavLink>
        {user === null ? (
          <SigninButton />
        ) : (
          <UserButton username={user.username} />
        )}
      </div>
    </nav>
  );
}
