import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Contact from "./Pages/Home/Contact/Contact";
import About from "./Pages/Home/About/About";
import Footer from "../src/Shared/Footer/Footer";
import Shop from "./Pages/Shop/Shop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
