import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function UserCard({ user }) {
  return (
    <Link to="">
      <div className="w-48 h-48">
        {user.urlAvatar ? (
          <img src={user.urlAvatar} />
        ) : (
          <div className="bg-sky-500"></div>
        )}
      </div>
    </Link>
  );
}
