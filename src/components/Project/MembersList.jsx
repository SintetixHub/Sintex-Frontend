import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function MembersList({ members }) {
  return (
    <div className="p-6 border-2 rounded-xl dark:border-zinc-600">
      <h3 className="font-bold text-lg mb-4">Miembros del proyecto: </h3>
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
