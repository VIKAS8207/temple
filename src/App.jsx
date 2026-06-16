import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Founders from "./pages/Founders"; // FIXED: Changed 'About' to 'Founders'
import Nirman from "./pages/Nirman";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import Contact from "./pages/Contact";
import LuckyDraw from "./pages/LuckyDraw";
import Serve from "./pages/Serve";
import Donation from "./pages/Donation";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-orange-200 selection:text-orange-900">
        
        {/* Persistent Top Navigation */}
        <Navbar />

        {/* Dynamic Page Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/founders" element={<Founders />} />
            <Route path="/about/nirman" element={<Nirman />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/lucky-draw" element={<LuckyDraw />} />
            <Route path="/serve" element={<Serve />} />
            <Route path="/donate" element={<Donation />} />
          </Routes>
        </main>

        {/* Persistent Global Footer */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;