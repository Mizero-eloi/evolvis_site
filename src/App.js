import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


import './App.css';
import TechHub from "./pages/TechHub/TechHub";
import TrainingCenterDetails from "./pages/TrainingCenterDetails/TrainingCenterDetails";
import ContactUs from "./pages/contactus/ContactUs";

function App() {
  return ( 
    <div className="App">
      
      <Routes>
        <Route path="/" element={<TechHub />} />
        <Route path="/training_center_details" element={<TrainingCenterDetails />} />
        <Route path="/contact_us" element={<ContactUs />} />

      </Routes>
   
    </div>
  );
}

export default App;
