import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import HowItWorks from "./components/HowItWorks";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/howItWorks" element={<HowItWorks />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
