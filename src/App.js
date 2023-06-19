import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Trending from './components/Trending';
import Shop from './components/Shop';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Feature from './components/Feature';
import Explore from './components/Explore';
import Sell from './components/Sell';
// import GetProducts from './components/GetProducts';

function App() {
  return (
    <div className="App">
      {/* <GetProducts></GetProducts> */}
      <Navbar></Navbar>
      <Slider></Slider>
      <Trending></Trending>
      <Shop></Shop>
      <Feature></Feature>
      <Explore></Explore>
      <Sell></Sell>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
}

export default App;
