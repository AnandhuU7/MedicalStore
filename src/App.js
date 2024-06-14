import Carousel from "./component/Carousel";
import Card from "./component/Card";
import Marquee from "./component/Marquee";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <Marquee/>
      <Card/><br/>
      <Footer/>
    </div>
  
  );
}

export default App;
