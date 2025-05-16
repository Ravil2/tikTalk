import ProfileInfo from "./ProfileInfo";
import ProfileCardName from "./ProfileCardName";
import UButton from "../../UI/UButton/UButton";
import ProfileSkills from "./ProfileSkills";

const ProfileCard = () => {
  return (
    <div className="grid border border-white px-8 py-6 grid-cols-4 gap-8 mb-2">
      <ProfileCardName />
      <ProfileInfo />
      <ProfileSkills />
      <UButton>Follow</UButton>
    </div>
  );
};

export default ProfileCard;
