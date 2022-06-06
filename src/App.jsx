import './App.css';

import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
      <Footer/>
    </>
  );
}

export default App;
