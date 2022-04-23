import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";

import Contact from './Pages/Home/Contact/Contact';
import About from './Pages/Home/About/About';
import Footer from "./Shared/Footer/Footer";
// import Footer from './Shared/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
</Routes>
<Footer/>
    </BrowserRouter>
  );
}

export default App;
