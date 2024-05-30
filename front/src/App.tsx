import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/homepage";
import Nav from "./components/navbar/navbar";
import Footer from "./components/Footer/footer";
import Booking from "./pages/Booking";
import Register from "./pages/register";
import Login from "./pages/login";
import ProtectedRoute from "./pages/protectRoute"; // Importa il componente ProtectedRoute
import SecretPage from "./components/booking/coach-calendar"; // Importa il componente della pagina segreta

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
            element={<ProtectedRoute element={<SecretPage />} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
