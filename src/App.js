import Header from './Components/Header/Header';
import AboutUs from './Components/AboutUs/AboutUs';
import Service from './Components/AppService/Service';
import Fares from './Components/Fares/Fares';
import HowItWorks from './Components/HowItWorks/HowITWorks';
import Calculator from './Components/Calculator/Calculator';
import Partners from './Components/Partners/Partners';
import Style from './Components/Style.css'
import Review from './Components/Review_form/Review';
function App() {
  return (
    <div className="wrapper">
      <Header/>
      <AboutUs/>
      <Service/>
      <Fares/>
      <HowItWorks/>
      <Calculator/>
      <Partners/>
      <Review/>

    </div>
  );
}

export default App;
