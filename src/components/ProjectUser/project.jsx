import React from 'react';

const ProjectInfo = ({ 
    projectTitle, 
    authorName, 
    projectDescription, 
    taskManagerLink, 
    githubRepoLink, 
    documentationLink, 
    users = [] // valor predeterminado para users
}) => {
    return (
        <div className="flex justify-between">
            <div className="flex-grow-0 mr-5 w-10/12">
                <h1 className="text-2xl font-bold mb-2">{projectTitle}</h1>
                <h2 className="text-xl mb-2">{authorName}</h2>
                <p className="my-2">{projectDescription}</p> <br />
                <p className='my-2'>{projectDescription} </p>
                <br />
                <p className='my-2'>{projectDescription} </p>
                <div className="mt-5 space-y-2 p-2 rounded flex flex-col items-start">
                    <a href={taskManagerLink} className="dark:text-white py-1 px-2 rounded-full underline">Gestor de Tareas</a>
                    <a href={githubRepoLink} className="dark:text-white py-1 px-2 rounded-full underline">Repositorio de GitHub</a>
                    <a href={documentationLink} className="dark:text-white py-1 px-2 rounded-full underline">Documentación</a>
                </div>
            </div>
            <div className="flex-grow ml-5 w-3/12">
                <button className="block mb-5 bg-gradient-to-t from-sky-500 to-indigo-500 dark:from-orange-500 dark:to-rose-600 py-1 px-4 text-white hover:to-indigo-400 hover:from-sky-500 rounded-md dark:hover:from-orange-400 dark:hover:to-rose-500 ">Unirse</button>
                <div className="border mb-4 p-4">
                    {users.map(user => (
                        <div key={user.id} className="flex items-center space-x-2">
                            <h3 className="text-lg font-semibold">{user.name}</h3>
                            <p>{user.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectInfo;