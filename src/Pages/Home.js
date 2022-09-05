import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Spacer from "../components/Spacer";
import AdminLogin from "../components/AdminLogin";

const Home = () => {
  return (
    <div className="Home" style={{ fontFamily: "anak" }}>
      <Intro />
      <AdminLogin/>
      <Spacer/>
    </div>
  );
};

export default Home;
