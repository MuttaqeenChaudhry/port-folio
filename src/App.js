import "./App.css";
import NavBar from "./components/NavBar";
import IntroCmp from "./components/IntroCmp";
import StakHse from "./components/StakHse";
import Footer from "./components/Footer";
import ProjecstMn from "./components/ProjectsMn";
import AbtMn from "./components/AbtMn";
import ContactMn from "./components/ContactMn"
import smoothscroll from 'smoothscroll-polyfill';
import { Routes, Route } from "react-router-dom";
import { LgtCntxtProvider} from './components/LightContext';
import RedirectArrow from "./components/RedirectArrow";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAnglesUp, faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
library.add(faAnglesUp, faStar);

function App() {
 useEffect(()=>{
  smoothscroll.polyfill();
 },[])
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <LgtCntxtProvider value={handleClick}>
      <NavBar />
      <RedirectArrow/>
      <Routes>
        <Route path="/" element={[<IntroCmp />, <StakHse />]} />
        <Route path="/Projects" element={<ProjecstMn />} />
        <Route path="/AboutMe" element={<AbtMn />} />
        <Route path="/Contact" element={<ContactMn />} />
      </Routes>
      <Footer />
      </LgtCntxtProvider>
    </>
  );
}

export default App;
