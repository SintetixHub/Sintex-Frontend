import { NavLink } from "react-router-dom";

const LoginButton = () => {
  return (
    <NavLink
      to="/login"
      className="bg-gradient-to-t from-sky-500 to-indigo-500 dark:from-orange-500 dark:to-rose-600 py-1 px-4 text-white hover:to-indigo-400 hover:from-sky-500 rounded-md dark:hover:from-orange-400 dark:hover:to-rose-500"
    >
      Ingresar
    </NavLink>
  );
};

export default LoginButton;
