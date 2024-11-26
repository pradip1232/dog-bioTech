import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import Home from './pages/Home';
import Company from './pages/Company';
import Products from './pages/Products';
import Blogs from './pages/Blogs';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Research from './pages/Research';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/research" element={<Research />} />
      </Routes>
      <Footer  />
    </Router>
  );
}

export default App;
