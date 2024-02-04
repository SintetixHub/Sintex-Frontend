import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserByName } from "../api/getUserByName";
import Profile from "../components/User/Profile";
import Emblems from "../components/User/Emblems";

export default function User() {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getUserByName(username);
      if (response.success) {
        setUser(response.data);
      }
    })();
  }, [username]);

  if (user === null) {
    return <></>;
  }

  return (
    <div className="flex gap-8">
      <Profile user={user} />
      <Emblems achievements={user.achievements} />
    </div>
  );
}
