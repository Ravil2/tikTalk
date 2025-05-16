import type { FC } from "react";
import avatar from "../../assets/imgs/avatar.png";
import type { UserData } from "./ProfileCard";

interface ProfileCardNameProps {
  user: UserData;
}

const ProfileCardName: FC<ProfileCardNameProps> = ({ user }) => {
  return (
    <div className="grid grid-cols-[70px_1fr] gap-5">
      <img
        className="w-[70px] h-[70px] rounded-[50%]"
        src={avatar}
        alt="avatar-image"
      />
      <div className="flex flex-col gap-2">
        <strong className="text-[18px] leading-6 font-extrabold">
          {user.firstName} {user.lastName}
        </strong>
        <span className="text-[14px] leading-[21px] font-normal">
          {user.userName}
        </span>
      </div>
    </div>
  );
};

export default ProfileCardName;
