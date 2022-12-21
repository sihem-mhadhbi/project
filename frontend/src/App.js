import Home from "./components/pages/Home";
import Login from "./components/auth/Login";
import { Navbar } from "./components/layout/Navbar";
import Register from "./components/auth/Register";
import { Routes, Route } from "react-router-dom";
import { Fragment, useEffect } from "react";
import { Alert } from "./components/layout/Alert";
import Profile from "./components/auth/Profile";
import { useDispatch } from "react-redux";
import { loadUser } from "./redux/action/authActions";
import Dashboard from "./components/admin/Dashboard";
import Requests from "./components/admin/Requests";
import Donors from "./components/admin/Donors";
import Accepted from "./components/admin/Accepted";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.token) {
      dispatch(loadUser());
    }
  }, [location]);
  return (
    <div className="App">
      <Fragment>
        <Navbar />
        <Alert />

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />

            <Route path="/login" element={<Login />} />

            <Route path="/profile" element={<Profile />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/donors" element={<Donors />} />
            <Route path="/accepted" element={<Accepted />} />
          </Routes>
        </div>
      </Fragment>
    </div>
  );
}

export default App;
