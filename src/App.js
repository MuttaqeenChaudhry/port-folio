import './App.css';
import NavBar from './components/NavBar';
import IntroCmp from './components/IntroCmp';
import StakHse from './components/StakHse';
import Footer from './components/Footer';
import ProjecstMn from './components/ProjectsMn';
import AbtMn from './components/AbtMn'
import ContactMn from './components/ContactMn'
import { Routes, Route } from 'react-router-dom';




function App() {
  return (
    <>
    <NavBar/>
    <Routes>
     <Route path='/' element={[ <IntroCmp/>, <StakHse/>]}/> 
     <Route path='/Projects' element={<ProjecstMn/>}/> 
     <Route path='/AboutMe' element={<AbtMn/>}/> 
     <Route path='/Contact' element={<ContactMn/>}/> 
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
