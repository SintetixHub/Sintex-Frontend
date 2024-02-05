import { Link } from "react-router-dom";

const CardProject = ({ project }) => {
    return (
        <Link to={`/project/${project._id}`} className="flex rounded-xl py-4 px-8 bg-zinc-300 text-black dark:text-white dark:bg-zinc-800">
            <div className="flex flex-col gap-4 items-center">
                <img
                    src={project.AuthorAvatar}
                    alt={`${project.authorUsername} avatar`}
                    className="h-44 w-44 rounded-full object-cover border-2 border-black dark:border-zinc-400"
                />
                <span>{project.authorUsername}</span>
            </div>
            <div className="p-4 flex flex-col gap-4 flex-1">
                <div className="flex justify-between">
                    <h2 className="text-xl font-bold">{project.title}</h2>
                </div>
                <p>{project.content}</p>
            </div>
        </Link>
    );
};

export default CardProject;