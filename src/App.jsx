import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Mentions from "./Mentions";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions" element={<Mentions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}