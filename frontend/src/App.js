import Home from "./components/Home";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Login />
      <Register />
    </div>
  );
}

export default App;
