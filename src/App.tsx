import { Route, Routes } from "react-router-dom";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProfileCard />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default App;
