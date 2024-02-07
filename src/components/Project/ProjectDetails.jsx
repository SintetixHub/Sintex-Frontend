/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/useUserContext";
import JoinButton from "./JoinButton";
import MembersList from "./MembersList";
import PendingMembers from "./PendingMembers";

const ProjectDetails = ({ project }) => {
  const { user } = useUserContext();
  const titleWithOutSpaces = project.title.replaceAll(" ", "_");

  return (
    <div className="flex justify-between mt-6">
      <div className="grow-[3]">
        <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
        <h2 className="text-xl font-bold  text-zinc-600 dark:text-zinc-300 mb-1">
          {project.authorName}
        </h2>
        <p className="my-8 text-zinc-700 dark:text-zinc-400">
          {project.description}
        </p>{" "}
        <br />
        <div className="mt-5 space-y-2 p-2 rounded flex flex-col items-start">
          {project.hasTasksManager && (
            <Link
              to={`/tasks/${titleWithOutSpaces}`}
              className="dark:text-white py-1 px-2 rounded-full underline"
            >
              Gestor de Tareas
            </Link>
          )}
          {project.repository && (
            <a
              href={project.repository}
              className="dark:text-white py-1 px-2 rounded-full underline"
            >
              Repositorio de GitHub
            </a>
          )}
          {project.hasDoc && (
            <Link
              to={`/doc/${titleWithOutSpaces}`}
              className="dark:text-white py-1 px-2 rounded-full underline"
            >
              Documentación
            </Link>
          )}
        </div>
      </div>
      <div className="grow-[1] flex gap-4 flex-col">
        <MembersList members={project.membersList} />
        {user != null && user.username !== project.authorName && <JoinButton />}
        {user != null && user.username === project.authorName && (
          <PendingMembers members={project.membersPending} />
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
