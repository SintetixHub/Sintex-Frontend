import UserLinks from "./UserLinks";
import { useUserContext } from "../../context/useUserContext";
import noAvatar from "../../assets/noAvatar.svg";
import EditProfileButton from "./EditProfileButton";
import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Profile({ user }) {
  const [editing, setEditing] = useState(false);
  const { user: userCtx } = useUserContext();

  return (
    <section className="grow-[3] border-4 dark:border-zinc-700 p-8 rounded-xl flex flex-col items-center relative">
      <img
        src={user.urlAvatar ?? noAvatar}
        alt={`${user.username} avatar`}
        className="w-56 h-56 rounded-full object-cover"
      />

      <h1 className="text-2xl font-bold mt-8">{user.username}</h1>
      <h2 className="text-xl font-medium mt-1 text-zinc-700 dark:text-zinc-300">
        {user.title ?? "Sin título"}
      </h2>

      <p className="mt-4 font-medium text-zinc-600 dark:text-zinc-400">
        {user.description ?? "Sin descripción."}
      </p>
      {userCtx !== null && userCtx.username === user.username && (
        <EditProfileButton setEditing={() => setEditing(true)} />
      )}
      <UserLinks />
    </section>
  );
}
