import { useState } from "react";
import Forms from "../components/Forms/Forms"; // Asegúrate de que la ruta de importación sea correcta

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-[15vh]">
      <button
        className="mb-5 border border-blue-600 dark:border-orange-600 text-black dark:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition duration-500 hover:scale-105 w-72"
        onClick={handleSwitch}
      >
        {isLogin
          ? "¿No tienes cuenta? Regístrate"
          : "¿Ya tienes cuenta? Inicia sesión"}
      </button>
      <Forms isLogin={isLogin} />
    </div>
  );
};

export default App;
