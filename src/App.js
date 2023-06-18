import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Trending from './components/Trending';
import Shop from './components/Shop';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Feature from './components/Feature';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Slider></Slider>
      <Trending></Trending>
      <Shop></Shop>
      <Feature></Feature>
      <Testimonial></Testimonial>



      <Footer></Footer>
    </div>
  );
}

export default App;
