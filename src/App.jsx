import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

// Components
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import CodingProjects from './components/projects/pages/CodingProjects';
import ArtProjects from './components/projects/pages/ArtProjects';
import TdPrintProjects from './components/projects/pages/TdPrintProjects';
import Footer from './components/footer/Footer';

// Images
import logo from './assets/icon.jpg';

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/code" element={<CodingProjects />} />
          <Route path="/art" element={<ArtProjects />} />
          <Route path="/thrD" element={<TdPrintProjects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer/>
    </Router>
  );
}

function Home() {
  return (
    <div class="home-page">
      <Header/>
      <About/>
      <Projects/>
    </div>
  );
}

function NotFound() {
  return (
  <div class="error-page">
    <p style={{ width:"100%",height:"100%", paddingLeft:"5%",paddingBottom:"2%",fontSize:"xx-large"}}>
      Error 404: This page doesn't exist...
    </p>
    <img style={{ width:"60%",height:"auto", paddingLeft:"5%",paddingBottom:"27%"}} src={logo} alt=":("/>
  </div>
  );
}

export default App;
