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
import Privacy from "./Components/Privacy";
import Terms from "./Components/Terms";
import Cookies from "./Components/Cookies";
import { ThemeProvider } from "./Context/ThemeContext";
import { useEffect } from "react";
import Helpcenter1 from "./Components/Helpcenter1";
import HelpArticle from "./Components/HelpArticle";
// import FAQ from "./Components/FAQ";

function AppContent() {
  const location = useLocation();
  const isDocPage =
    location.pathname === "/doc" || location.pathname === "/help-center/doc";
  const isHelpCenterPage = location.pathname === "/help-center";
  const isHelpArticle = location.pathname.startsWith("/help/");

  useEffect(() => {
    // Scroll to top on route change
    if (typeof window !== "undefined")
      window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      {useEffect(() => {
        document.title = "Landing Page COD";
        const desc = document.querySelector('meta[name="description"]');
        if (desc)
          desc.setAttribute(
            "content",
            "Default description for Landing Page COD"
          );
        else {
          const m = document.createElement("meta");
          m.name = "description";
          m.content = "Default description for Landing Page COD";
          document.head.appendChild(m);
        }
      }, [])}
      {!isHelpCenterPage && !isHelpArticle && <Navbar />}
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {useEffect(() => {
                  document.title = "Landing Page COD - Home";
                  const desc = document.querySelector(
                    'meta[name="description"]'
                  );
                  if (desc)
                    desc.setAttribute(
                      "content",
                      "Welcome to our landing page for COD services."
                    );
                }, [])}
                <HeroSection />
                <Features />
                <HowCODWorks />
                <SeeAction />
                {/* <FAQ /> */}
                {/* <Customers /> */}
                <Pricing />
                {/* <Contact /> */}
                <Ready />
              </>
            }
          />
          <Route path="/features" element={<Features />} />
          <Route path="/how-it-works" element={<HowCODWorks />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/doc" element={<Documentation />} />
          <Route path="/help-center" element={<Helpcenter1 />} />
          <Route path="/help/:topic/:article" element={<HelpArticle />} />
          <Route path="/help/:topic" element={<HelpArticle />} />
          <Route path="/help/:id" element={<HelpArticle />} />
          <Route path="/help-center/doc" element={<Documentation />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      {!isDocPage && !isHelpCenterPage && <Footer />}
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
