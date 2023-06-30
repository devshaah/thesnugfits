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
import { useState } from 'react';

function App() {
  const [messageinput,setmessage] = useState("");
  console.log("Home Page " + messageinput)
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
