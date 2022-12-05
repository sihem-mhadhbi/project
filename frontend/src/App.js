import Home from "./components/Home";
import { Login } from "./components/auth/Login";
import { Navbar } from "./components/layout/Navbar";
import Register from "./components/auth/Register";
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { Alert } from "./components/layout/Alert";

function App() {
  return (
    <div className="App">
      <Fragment>
        <Navbar />
        <div className="container">
          <Alert />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />

            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Fragment>
    </div>
  );
}

export default App;
