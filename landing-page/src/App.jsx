

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Features from "./Components/Features";

import Pricing from "./Components/Pricing";
import Demo from "./Components/Demo";

import HowCODWorks from "./Components/how";
import SeeAction from "./Components/seeAction";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="py-10">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <Features />
              <HowCODWorks />
              <SeeAction />
            </>
          } />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
