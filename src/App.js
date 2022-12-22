import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Blog from './components/Blog';
import './App.css';

function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Services />
      <Blog />
    </div>
  );
}

export default App;
