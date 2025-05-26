import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const LayoutComponent = () => {
  return (
    <div className="grid grid-cols-[300px_1fr]">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default LayoutComponent;
