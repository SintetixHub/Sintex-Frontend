/* eslint-disable react/prop-types */
import { useState } from "react";
import UserMenu from "./UserMenu";

// eslint-disable-next-line react/prop-types
export default function UserButton({ username }) {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleClick = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <button
        className="font-bold py-1 px-4  rounded-md  text-sky-500 hover:text-sky-300  dark:hover:text-orange-300 dark:text-orange-400 "
        onClick={handleClick}
      >
        {username}
      </button>
      {menuVisible && <UserMenu userId={username} />}
    </>
  );
}
