import "./App.css";
import NavBar from "./components/NavBar";
import IntroCmp from "./components/IntroCmp";
import StakHse from "./components/StakHse";
import Footer from "./components/Footer";
import ProjecstMn from "./components/ProjectsMn";
import AbtMn from "./components/AbtMn";
import ContactMn from "./components/ContactMn";
import { Routes, Route } from "react-router-dom";
import RedirectArrow from "./components/RedirectArrow";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAnglesUp, faBars, faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faAnglesUp, faBars, faStar);

function App() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <NavBar />
      <RedirectArrow onClick={handleClick} />
      <Routes>
        <Route path="/" element={[<IntroCmp />, <StakHse />]} />
        <Route path="/Projects" element={<ProjecstMn />} />
        <Route path="/AboutMe" element={<AbtMn />} />
        <Route path="/Contact" element={<ContactMn />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
