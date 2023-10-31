import './App.css';
import NavBar from './components/NavBar';
import IntroCmp from './components/IntroCmp';
import StakHse from './components/StakHse';
import Footer from './components/Footer';
import ProjecstMn from './components/ProjectsMn';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';




function App() {
  return (
    <>
    <NavBar/>
    <Routes>
     <Route path='/' element={[ <IntroCmp/>, <StakHse/>]}/> 
     <Route path='/Services' element={<ProjecstMn/>}/> 
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
