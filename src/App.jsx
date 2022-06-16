import './App.css';

import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Home />
    </>
  );
}

function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Projects/>
    <Footer/>
    </>
  )
}

function CodingProjects() {
  return (
    <>
    <Navbar/>
    
    <Footer/>
    </>
  )
}

function ArtProjects() {
  return (
    <>
    <Navbar/>
    
    <Footer/>
    </>
  )
}

function TdPrintProjects() {
  return (
    <>
    <Navbar/>
    
    <Footer/>
    </>
  )
}
export default App;
