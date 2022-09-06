import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import NewTicket from "./Pages/NewTicket";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SubmitComplete from "./Pages/SubmitComplete";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-ticket" element={<NewTicket />} />
        <Route path="/login" element={<Login />} />
        <Route path="/submit-complete" element={<SubmitComplete/>} />
      </Routes>
    </Router>
  );
};

export default App;
