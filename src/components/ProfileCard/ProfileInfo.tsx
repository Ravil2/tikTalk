import type { FC } from "react";
import type { UserData } from "./ProfileCard";

interface IProfileInfoProps {
  user: UserData;
}

const ProfileInfo: FC<IProfileInfoProps> = ({ user }) => {
  return <div>{user.description}</div>;
};

export default ProfileInfo;
