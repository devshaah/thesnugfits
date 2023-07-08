import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Products from './pages/products';
import Contact from './pages/contact';
import About from './pages/about';
import Services from './pages/services';
import Printing from './pages/printing';
import Clients from './pages/clients';
import { useState,useEffect } from 'react';
import logo1 from "./assets/loader.gif";
import ReactGA from 'react-ga4'

const TRACKING_ID= 'G-EKW58YBDXM'
ReactGA.initialize(TRACKING_ID)
ReactGA._gaCommandSendPageview(window.location.pathname);

function App() {
  const [messageinput,setmessage] = useState("");
  const [show,setshow] = useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setshow(false)
    },1000);
  },[])

  return (
    <div className="App">
            {
        show 
        ?
        <div style={{background:"rgb(177, 177, 177)",height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <img src={logo1} style={{height:"150px",animation: "rotate 1s infinite linear"}}/>
        </div>
        :
      <Router>
              <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/products" element={<Products setmessage={setmessage}/>} />
              <Route exact path="/contact" element={<Contact messageinput={messageinput}/>} />
              <Route exact path="/about" element={<About/>}/>
              <Route exact path="/services" element={<Services/>}/>
              <Route exact path="/printing" element={<Printing/>}/>
              <Route exact path="/clients" element={<Clients/>}/>
              </Routes>
      </Router> 
} 
    </div>
  );
}

export default App;
