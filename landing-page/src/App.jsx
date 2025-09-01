import Ready from "./Components/ready";
import Footer from "./Components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Features from "./Components/Features";
import Pricing from "./Components/Pricing";
import Demo from "./Components/Demo";
import HowCODWorks from "./Components/how";
import SeeAction from "./Components/seeAction";
import Customers from "./Components/customers";
import Contact from "./Components/contact";
import HelpCenter from "./Components/helpCenter";
// import FAQ from "./Components/FAQ";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Features />
                <HowCODWorks />
                <SeeAction />
                {/* <FAQ /> */}
                <Customers />
                <Pricing />
                <Contact />
                <Ready />
              </>
            }
          />
          <Route path="/features" element={<Features />} />
          <Route path="/how-it-works" element={<HowCODWorks />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
