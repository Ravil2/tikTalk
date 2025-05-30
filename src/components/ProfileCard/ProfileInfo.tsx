import type { FC } from "react";
import type { UserProfileData } from "../../api/interfaces";

interface IProfileInfoProps {
  user: UserProfileData;
}

const ProfileInfo: FC<IProfileInfoProps> = ({ user }) => {
  return <div>{user.description}</div>;
};

export default ProfileInfo;
