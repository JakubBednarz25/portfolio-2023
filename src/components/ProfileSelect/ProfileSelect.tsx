import Profile from "../Profile/Profile.tsx";
import "./ProfileSelect.scss";
import { Link } from "react-router-dom";

const ProfileSelect = () => {
  return (
    <main className="flex-col-center">
      <h1>Who's critiquing?</h1>
      <ul className="users flex-row-center">
        <li>
          <Link to="/app">
            <Profile src={`/avatar-1.png`} name="User 1" />
          </Link>
        </li>
        <li>
          <Link to="/app">
            <Profile src={`/avatar-2.jpg`} name="User 2" />
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default ProfileSelect;
