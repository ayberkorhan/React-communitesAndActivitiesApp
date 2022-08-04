
import {Routes, Route , Link, NavLink} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import CommunityP from "./pages/CommunityP";
import CommunityProfile from "./pages/ComunityProfile";
import ActivityP from "./pages/ActivityP";
import ActivityProfile from "./pages/ActivityProfile";
import Footer from "./components/Footer";
import CommunityAdd from "./pages/CommunityAdd";
import ActivityAdd from "./pages/ActivityAdd";



function App() {
  return (
    <>
    <Header></Header>
    <Routes>
    <Route path="/" element={<Home></Home>} />
    <Route path="/register" element={<Register></Register>} />
    <Route path="/profile/:id" element={<Profile></Profile>} />
    <Route path="/community" element={<CommunityP></CommunityP>} />
    <Route path="/activity" element={<ActivityP></ActivityP>} />

    <Route path="/communityprofile/:id" element={<CommunityProfile></CommunityProfile>} />
    <Route path="/activityprofile/:id" element={<ActivityProfile></ActivityProfile>} />
    <Route path="/activityprofile/:id" element={<ActivityProfile></ActivityProfile>} />
    <Route path="/communityadd/:id" element={<CommunityAdd></CommunityAdd>} />
    <Route path="/activityadd/:id/:creatorId" element={<ActivityAdd></ActivityAdd>} />







    <Route path="/signIn" element={<Signin></Signin>} />


    </Routes>

    </>
  );
}

export default App;
