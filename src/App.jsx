import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import CodingProjects from './components/projects/CodingProjects';
import ArtProjects from './components/projects/ArtProjects';
import TdPrintProjects from './components/projects/TdPrintProjects';

import Footer from './components/footer/Footer';

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
    <>
    <Header/>
    <About/>
    <Projects/>
    </>
  )
}

function NotFound() {
  return <>You have landed on a page that doesn't exist</>;
}

export default App;
