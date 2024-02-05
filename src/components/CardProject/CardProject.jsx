/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CardProject = ({ project }) => {
  console.log(project);
  return (
    <Link
      to={`/project/${project.title}`}
      className="flex flex-col  rounded-xl p-8 bg-zinc-200 text-black dark:text-white dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700"
    >
      <h2 className="text-2xl font-bold">{project.title}</h2>
      <span className="text-zinc-700 dark:text-zinc-300 font-medium text-lg">
        {project.authorName}
      </span>

      <p className="text-zinc-600 dark:text-zinc-400 my-4">
        {project.description}
      </p>
      <span className="self-end font-medium text-zinc-600 dark:text-zinc-400">
        Miembros: {project.membersList.length}/{project.membersCount}
      </span>
    </Link>
  );
};

export default CardProject;
