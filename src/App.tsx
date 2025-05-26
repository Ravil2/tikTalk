import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profiles/Profile";
import LayoutComponent from "./layouts/LayoutComponent/LayoutComponent";
import Search from "./pages/Search/Search";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutComponent />}>
          <Route index path="/" element={<Search />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default App;
