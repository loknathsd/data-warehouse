import Aos from 'aos';
import './App.css';
import Hero from './components/Hero/Hero';

function App() {

  Aos.init({
    duration: 1800,
    offset: 0,
  });

  return (
    <div className="">
      <Hero />
     
    </div>
  );
}

export default App;
