/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function UserMenu({ username }) {
  return (
    <div className="absolute top-16 right-20 border-2 border-cyan-400 dark:border-orange-400 p-4 rounded-md gap-2 flex flex-col items-stretch">
      <Link to={`/user/${username}`} className="hover:text-zinc-400">
        Perfil
      </Link>
      <Link to="/newProject" className="hover:text-zinc-400">
        Nuevo Proyecto
      </Link>
      <Link to="/newPost" className="hover:text-zinc-400">
        Nuevo Post
      </Link>
      <button className="hover:text-zinc-400 w-8">
        <span>Salir</span>
      </button>
    </div>
  );
}
