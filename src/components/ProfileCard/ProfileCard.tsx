import ProfileInfo from "./ProfileInfo";
import ProfileCardName from "./ProfileCardName";
import UButton from "../../UI/UButton/UButton";
import ProfileSkills from "./ProfileSkills";
import { useEffect, useState } from "react";
import type { UserProfileData } from "../../api/interfaces";
import { ProfilesAPI } from "../../api/api";

const ProfileCard = () => {
  const [userData, setUserData] = useState<UserProfileData[]>([]);

  const fetcData = async () => {
    await ProfilesAPI.getProfiles().then((data) => setUserData(data));
  };

  useEffect(() => {
    fetcData();
  }, []);

  return (
    <>
      {userData.map((user: UserProfileData) => (
        <div
          key={user.id}
          className="grid border border-white px-8 py-6 grid-cols-4 gap-8 mb-2"
        >
          <ProfileCardName user={user} />
          <ProfileInfo user={user} />
          <ProfileSkills user={user} />
          <UButton>Follow</UButton>
        </div>
      ))}
    </>
  );
};

export default ProfileCard;
