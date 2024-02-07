/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function PendingMembers({ members }) {
  return (
    <div className="p-6 bg-zinc-200 dark:bg-zinc-800 rounded-xl">
      <h3 className="font-bold text-lg mb-4">Solicitudes para unirse: </h3>
      {members.length === 0 && (
        <span className="text-zinc-700 dark:text-zinc-400">
          No hay miembros pendientes{" "}
        </span>
      )}
      {members.map((member) => (
        <Link
          key={member}
          to={`/user/${member}`}
          className="font-medium text-sky-600 dark:text-orange-400 hover:text-sky-400 dark:hover:text-orange-300"
        >
          {member}
        </Link>
      ))}
    </div>
  );
}
