import { useEffect, useState } from "react";
import { login } from "../../api/login";
import { signup } from "../../api/signup";
import { useUserContext } from "../../context/useUserContext";
import { useNavigate } from "react-router-dom";
import LoaderIcon from "../../assets/gear.svg";

// eslint-disable-next-line react/prop-types
const Forms = ({ isLogin }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  const [loading, setLoading] = useState(false);

  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => {
      setAlert("");
    }, 3000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if ((username.length < 3) | (username.length > 30)) {
      showAlert("El nombre de usuario debe contener entre 3 y 30 caracteres");
      return;
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{8,30}$/.test(password)) {
      showAlert(
        "La contraseña debe contener\n -al menos una letra minúscula\n -al menos una mayúscula\n -al menos un número\n -una longitd entre 8 y 30 caracteres"
      );
      return;
    }

    if (isLogin) {
      setLoading(true);
      const response = await login(username, password);
      setLoading(false);

      if (!response.success) {
        showAlert("Datos incorrectos");
        return;
      }

      setUser(response.data);
      navigate("/");
    } else {
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net)$/i.test(email)) {
        showAlert("El email no tiene un formato válido");
        return;
      }

      setLoading(true);
      const response = await signup(username, password, email);
      console.log(response);
      setLoading(false);

      if (response.message === "Email already used") {
        showAlert("Email ya en uso");
        return;
      }

      if (response.message === "Username already used") {
        showAlert("Nombre de usuario ya en uso");
        return;
      }

      navigate("/");
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex items-center justify-center">
      <form
        className="bg-white dark:bg-zinc-800 border-2 dark:border-zinc-700 rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        {loading ? (
          <img src={LoaderIcon} alt="loader gear" />
        ) : (
          <>
            <h2 className="block text-gray-700 dark:text-white text-lg font-bold mb-4">
              {isLogin ? "Iniciar sesión" : "Registro"}
            </h2>
            <div className="mb-4">
              <label
                className="block text-gray-600 dark:text-zinc-300 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Nombre de usuario:
              </label>
              <input
                className="dark:bg-zinc-700 bg-zinc-200 border-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none"
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="off"
              />
            </div>
            {!isLogin && (
              <div className="mb-4">
                <label
                  className="block text-gray-600 dark:text-zinc-300 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Correo electrónico:
                </label>
                <input
                  className="dark:bg-zinc-700 bg-zinc-200 border-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none"
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                />
              </div>
            )}
            <div className="mb-6">
              <label
                className="block text-gray-600 dark:text-zinc-300 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Contraseña:
              </label>
              <input
                className="dark:bg-zinc-700 bg-zinc-200 border-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white mb-3 leading-tight focus:outline-none"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-red-500 dark:to-orange-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transform transition duration-500 hover:scale-105"
                type="submit"
              >
                {isLogin ? "Iniciar sesión" : "Registrarse"}
              </button>
            </div>
          </>
        )}
      </form>
      {alert != "" && (
        <span className="absolute whitespace-pre-line bg-red-600 text-white text-sm p-1 font-medium">
          {alert}
        </span>
      )}
    </div>
  );
};

export default Forms;
