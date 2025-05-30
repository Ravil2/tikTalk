import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profiles/Profile";
import LayoutComponent from "./layouts/LayoutComponent/LayoutComponent";
import Search from "./pages/Search/Search";
import { AuthProvider } from "./context/AuthContext";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <LayoutComponent />
            </PrivateRoute>
          }
        >
          <Route index path="/" element={<Search />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
