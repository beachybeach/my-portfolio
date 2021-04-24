import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <main id="main">
        <Portfolio />

        <Skills />

        <Contact />
        <Footer />
      </main>
    </div >
  );
}

export default App;
