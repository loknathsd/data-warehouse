import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {

  Aos.init({
    duration: 1800,
    offset: 0,
  });

  return (
    <div className="w-[80%] mx-auto ">
      <Header />
      <Hero />
     
    </div>
  );
}

export default App;
