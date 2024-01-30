import React, { useState } from 'react';

const Forms = ({ isLogin }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="flex items-center justify-center">
            <form className="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <h2 className="block text-gray-700 dark:text-white text-lg font-bold mb-4">{isLogin ? 'Iniciar sesión' : 'Registro'}</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="username">
                        Nombre de usuario:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline" 
                                 id="username" 
                                 type="text" 
                                 value={username} 
                                 onChange={(e) => setUsername(e.target.value)} 
                                 required />
                </div>
                {!isLogin && (
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="email">
                            Correo electrónico:
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline" 
                                     id="email" 
                                     type="email" 
                                     value={email} 
                                     onChange={(e) => setEmail(e.target.value)} 
                                     required />
                    </div>
                )}
                <div className="mb-6">
                    <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="password">
                        Contraseña:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                                 id="password" 
                                 type="password" 
                                 value={password} 
                                 onChange={(e) => setPassword(e.target.value)} 
                                 required />
                </div>
                <div className="flex items-center justify-center">
                    <button className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-red-500 dark:to-orange-500 hover:bg-blue-700 text-white dark:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition duration-500 hover:scale-105" 
                            type="submit">
                        {isLogin ? 'Iniciar sesión' : 'Registrarse'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Forms;