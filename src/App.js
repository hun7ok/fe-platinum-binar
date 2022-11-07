import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
// import NavigationBar from "./components/SectionNavigationBar";
import Services from "./components/SectionServices";
import Products from "./components/SectionProducts";
import Testimonial from "./components/SectionTestimonial";
import Faq from "./components/SectionFaq";
import Footer from "./components/SectionFooter";
import CarList from "./pages/CarList";
import DetailCar from "./pages/DetailCar";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Sidebar from './components/NavBar/Navbar';
import Dashboard from './pages/Dashboard';
import ListCarAdmin from "./pages/ListCarAdmin";
function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/testi" element={<Testimonial />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/listcar" element={<ListCarAdmin />} />
          <Route path="/cars/:id" element={<DetailCar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
       
       
        <Footer/>
      </BrowserRouter>
     
    </>
  );
}

export default App;
