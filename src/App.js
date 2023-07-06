import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Contacts from "./pages/Contacts";
import Project from "./pages/Projects";



function App() {
  return (
    <div className="App">
    <Router >
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      <Footer />
  </Router>
    </div>
  );
}

export default App;
