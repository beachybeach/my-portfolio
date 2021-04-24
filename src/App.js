import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <hr class="solid"></hr>
      <Portfolio />
      <hr class="solid"></hr>
      <Skills />
      <hr class="solid"></hr>
      <Contact />

    </div >
  );
}

export default App;
