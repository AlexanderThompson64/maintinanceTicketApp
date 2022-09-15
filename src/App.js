import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import NewTicket from "./Pages/NewTicket";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-ticket" element={<NewTicket />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </Router>
  );
};

export default App;
