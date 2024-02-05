import { Link } from "react-router-dom";

export default function UserMenu({ username }) {
  return (
    <div className="absolute top-16 right-20 border-2   dark:bg-red-100 opacity-90 bg-blue-100 border-cyan-500 dark:border-orange-500 p-4 rounded-md gap-2 flex flex-col items-stretch shadow-lg">
      <Link to={`/user/${username}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all transform duration-300 ease-out hover:scale-110 text-center  ">
        Perfil
      </Link>
      <Link 
        to="/project" 
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all transform duration-300 ease-out hover:scale-110 text-center"
      >
        Proyecto
      </Link>
      <Link to="/newProject" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  transform ease-out hover:scale-110 transition-colors duration-300 text-center">
        Nuevo Proyecto
      </Link>
      <Link to="/newPost" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transform ease-out hover:scale-110 transition-colors duration-300 text-center">
        Nuevo Post
      </Link>
      <button className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transform ease-out hover:scale-110 transition-colors duration-300 text-center">
        <span>Salir</span>
      </button>
    </div>
  );
}