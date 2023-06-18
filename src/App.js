import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Trending from './components/Trending';
import Shop from './components/Shop';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Slider></Slider>
      <Trending></Trending>
      <Shop></Shop>
    </div>
  );
}

export default App;
