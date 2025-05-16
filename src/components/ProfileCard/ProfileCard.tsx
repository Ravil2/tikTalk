import ProfileInfo from "./ProfileInfo";
import ProfileCardName from "./ProfileCardName";
import UButton from "../../UI/UButton/UButton";
import ProfileSkills from "./ProfileSkills";
import { useEffect, useState } from "react";

export interface UserData {
  id: number;
  avatarUrl: string;
  city: string;
  description: string;
  firstName: string;
  lastName: string;
  userName: string;
  isActive: boolean;
  stack: string[];
}

const ProfileCard = () => {
  const [userData, setUserData] = useState<UserData[]>([]);

  const fetcData = async () => {
    await fetch("https://icherniakov.ru/yt-course/account/test_accounts")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  };

  useEffect(() => {
    fetcData();
  }, []);

  return (
    <>
      {userData.map((user: UserData) => (
        <div
          key={user.id}
          className="grid border border-white px-8 py-6 grid-cols-4 gap-8 mb-2"
        >
          <ProfileCardName user={user} />
          <ProfileInfo user={user} />
          <ProfileSkills user={user} />
          <div className="flex justify-end">
            <UButton>Follow</UButton>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProfileCard;
