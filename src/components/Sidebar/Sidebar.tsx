import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {
  const auth = useAuth();
  return (
    <div>
      <button onClick={auth.logout}>Logout</button>
    </div>
  );
};

export default Sidebar;
