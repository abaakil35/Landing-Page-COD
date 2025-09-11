import Ready from "./Components/ready";
import Footer from "./Components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Features from "./Components/Features";
import Pricing from "./Components/Pricing";
import HowCODWorks from "./Components/how";
import SeeAction from "./Components/seeAction";
import Customers from "./Components/customers";
import Contact from "./Components/contact";
import HelpCenter from "./Components/helpCenter";
import Documentation from "./Components/Documentation";
import Login from "./Components/Connexion/Login";
import { ThemeProvider } from "./Context/ThemeContext";
// import FAQ from "./Components/FAQ";

function AppContent() {
  const location = useLocation();
  const isDocPage =
    location.pathname === "/doc" || location.pathname === "/help-center/doc";
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {!isLoginPage && <Navbar />}
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
          <Route path="/doc" element={<Documentation />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/help-center/doc" element={<Documentation />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      {!isDocPage && !isLoginPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
