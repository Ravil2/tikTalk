import { useEffect, useState } from "react";
import { ProfilesAPI } from "../../api/api";
import { useAuth } from "../../context/AuthContext";
import type { UserProfileData } from "../../api/interfaces";

const Sidebar = () => {
  const [meData, setMeData] = useState<UserProfileData | null>(null);
  const auth = useAuth();

  const fetchMe = async () => {
    await ProfilesAPI.getMe().then((data) => setMeData(data));
  };

  useEffect(() => {
    fetchMe();
  }, []);
  console.log("meData", meData);

  return (
    <div>
      <button onClick={auth.logout}>Logout</button>
      <div>{meData?.firstName}</div>
    </div>
  );
};

export default Sidebar;
