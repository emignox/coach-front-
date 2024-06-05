import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/homepage";
import Nav from "./components/navbar/navbar";
import Footer from "./components/Footer/footer";
import Booking from "./pages/Booking";
import Register from "./pages/register";
import Login from "./pages/login";
import { ProtectedRoute, PasswordProtectedRoute } from "./pages/protectRoute"; // Importa il componente ProtectedRoute
import SecretPage from "./components/booking/coach-calendar"; // Importa il componente della pagina segreta
import About from "./pages/about";
import Contact from "./pages/contact";
import Advice from "./pages/advice";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/booking"
            element={<ProtectedRoute element={<Booking />} />}
          />
          <Route
            path="/coach-calendar"
            element={<PasswordProtectedRoute element={<SecretPage />} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/advice" element={<Advice />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
