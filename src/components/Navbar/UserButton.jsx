import { useState, useRef, useEffect } from "react";
import UserMenu from "./UserMenu";

export default function UserButton({ username }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const node = useRef();

  const handleClick = () => {
    setMenuVisible(!menuVisible);
  };

  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click 
    setMenuVisible(false);
  };

  useEffect(() => {
    if (menuVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuVisible]);

  return (
    <div ref={node}>
      <button
        className="font-bold py-1 px-4  rounded-md  text-sky-500 hover:text-sky-300  dark:hover:text-orange-300 dark:text-orange-400 "
        onClick={handleClick}
      >
        {username}
      </button>
      {menuVisible && <UserMenu username={username} />}
    </div>
  );
}