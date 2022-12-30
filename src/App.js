 import BackGround from './Companent/BackGround';
 import Navber from "./Companent/Navber";
 import About from "./About/About"
 
 import Card from "./Companent/Card/Card"
 import Form  from './Companent/Form';
 import NumberCenter from './Companent/NumberCenter';
  import 'bootstrap/dist/css/bootstrap.min.css';
 import Top from "./NewSlider/Top";
 import LargeFooter from './NewSlider/LargeFooter';
 import "./App.css"
 import SliderSmall from './sliderSmall/sliderSmall';
 function App() {
  return (
     <div className='app'>
      <Navber/>  
       <BackGround/>
        <About/>
      <SliderSmall/>
      <Card/>
      <Form/>
      <NumberCenter/>
      <LargeFooter/>
      <Top/>
     </div>
  );
}

export default App;
