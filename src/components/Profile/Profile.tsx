import './Profile.scss';

import { FunctionComponent } from "react";

type ProfileProps = {
  src: string;
  name: string;
};

const Profile: FunctionComponent<ProfileProps> = ({ src, name }) => {
  return (
    <div className="profile">
      <img src={src} alt={`profile of ${name}`} />
      <p>{name}</p>
    </div>
  );
};

export default Profile;
