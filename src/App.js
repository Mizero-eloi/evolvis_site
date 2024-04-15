import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


import './App.css';
import TechHub from "./pages/TechHub/TechHub";
import TrainingCenterDetails from "./pages/TrainingCenterDetails/TrainingCenterDetails";
import ContactUs from "./pages/contactus/ContactUs";
import OurTeam from "./pages/OurTeam/OurTeam";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  return ( 
    <div className="App">
      
      <Routes>
        <Route path="/" element={<TechHub />} />
        <Route path="/Techhub" element={<TechHub />} />
        <Route path="/training_center_details" element={<TrainingCenterDetails />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/Our_team" element={<OurTeam />} />
        <Route path="/portfolio" element={<Portfolio />} />

      </Routes>
   
    </div>
  );
}

export default App;
