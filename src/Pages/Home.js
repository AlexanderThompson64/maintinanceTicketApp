import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Spacer from "../components/Spacer";

const Home = () => {
    return ( <div className="Home" style={{fontFamily: "anak"}}>
            <Navbar/>
            <Spacer/>
            <Spacer/>
            <Intro/>
    </div> );
}
 
export default Home;