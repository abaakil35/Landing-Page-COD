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
import { Helmet } from "react-helmet-async";
// import FAQ from "./Components/FAQ";

function AppContent() {
  const location = useLocation();
  const isDocPage =
    location.pathname === "/doc" || location.pathname === "/help-center/doc";
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      <Helmet>
        <title>Landing Page COD</title>
        <meta
          name="description"
          content="Default description for Landing Page COD"
        />
        <link rel="canonical" href={window.location.href} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Landing Page COD" />
        <meta
          property="og:description"
          content="Default description for Landing Page COD"
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Landing Page COD" />
        <meta
          name="twitter:description"
          content="Default description for Landing Page COD"
        />
        <meta name="twitter:image" content="/logo.png" />
      </Helmet>
      {!isLoginPage && <Navbar />}
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <title>Landing Page COD - Home</title>
                  <meta
                    name="description"
                    content="Welcome to our landing page for COD services."
                  />
                  <meta name="keywords" content="COD, landing page, services" />
                  <link rel="canonical" href={window.location.href} />
                  <link rel="icon" href="/favicon.ico" />
                  <meta property="og:title" content="Landing Page COD - Home" />
                  <meta
                    property="og:description"
                    content="Welcome to our landing page for COD services."
                  />
                  <meta property="og:image" content="/logo.png" />
                  <meta property="og:url" content={window.location.href} />
                  <meta property="og:type" content="website" />
                  <meta name="twitter:card" content="summary_large_image" />
                  <meta
                    name="twitter:title"
                    content="Landing Page COD - Home"
                  />
                  <meta
                    name="twitter:description"
                    content="Welcome to our landing page for COD services."
                  />
                  <meta name="twitter:image" content="/logo.png" />
                </Helmet>
                <HeroSection />
                <Features />
                <HowCODWorks />
                <SeeAction />
                {/* <FAQ /> */}
                <Customers />
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
