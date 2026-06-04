import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // 1. Import your new Footer
import Home from "./pages/Home";


// Example of how you'll import future pages:
// import About from "./pages/About"; 
// import Gallery from "./pages/Gallery";

function App() {
  return (
    <Router>
      {/* Added flex and flex-col to enable the sticky footer layout */}
      <div className="flex flex-col min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-orange-200 selection:text-orange-900">
        
        {/* Persistent Top Navigation (Appears on every page) */}
        <Navbar />

        {/* Dynamic Page Content Area */}
        {/* flex-grow pushes the footer to the bottom of the screen */}
        <main className="flex-grow">
          <Routes>
            {/* The default home page */}
            <Route path="/" element={<Home />} />
            
            {/* How you will add your future pages: */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/gallery" element={<Gallery />} /> */}
          </Routes>
        </main>

        {/* Persistent Global Footer (Appears on every page) */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;