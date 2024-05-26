import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/homepage";
import Nav from "./components/navbar/navbar";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <>
      <Router>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
