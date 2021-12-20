import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Notes from "./pages/Notes";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import SingleWork from "./components/singlework/SingleWork";
import SingleCourse from "./components/singlecourse/SingleCourse";
import Footer from "./components/footer/Footer";
import SingleNote from "./components/singlenote/SingleNote";
import Thanks from "./pages/Thanks";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio/:id" element={<SingleWork />} />
        <Route path="/home/courses/:id" element={<SingleCourse />} />
        <Route path="/notes/:id" element={<SingleNote />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
