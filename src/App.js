import Header from "./components/Header";
import Banner from "./components/Banner";
import Features from "./components/Features";
import Videoplay from "./components/Videoplay";
import Powerful from "./components/Powerful";
import Platform from "./components/Platform";
import Testimonial from "./components/Testimonial";
import Brands from "./components/Brands";
import Screenshot from "./components/Screenshot";
import Faq from "./components/Faq";
import Mailfun from "./components/Mailfun";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='page-wrapper'>
        <Header />
        <Banner />
        <Features />
        <Videoplay />
        <Powerful />
        <Platform />
        <Testimonial />
        <Brands />
        <Screenshot />
        <Faq />
        <Mailfun />
        <Footer />
    </div>
  );
}

export default App;
