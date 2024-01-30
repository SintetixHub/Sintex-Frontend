import { Link, NavLink } from "react-router-dom";
import LoginButton from "./LoginButton";
import DarkModeButton from "./DarkModeButton";

export default function Navbar() {
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
    <NavLink to="/projects" className="hover:text-zinc-400">
        Proyectos
    </NavLink>
    <NavLink to="/posts" className="hover:text-zinc-400">
        Posts
    </NavLink>
    <NavLink to="/users" className="hover:text-zinc-400">
        Miembros
    </NavLink>
    <LoginButton />
</div>
    </nav>
  );
}
