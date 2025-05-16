import type { FC } from "react";
import type { UserData } from "./ProfileCard";

interface IProfileSkills {
  user: UserData;
}

const ProfileSkills: FC<IProfileSkills> = ({ user }) => {
  return (
    <div className="flex flex-wrap gap-1 h-fit">
      {user.stack.map((skill: string, id: number) => (
        <span key={id} className="py-1 px-2 border border-white rounded-sm text-[12px] leading-4 font-bold inline">
          {skill}
        </span>
      ))}
    </div>
  );
};

export default ProfileSkills;
