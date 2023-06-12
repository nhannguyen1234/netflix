import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
