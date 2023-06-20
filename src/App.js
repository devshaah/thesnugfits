import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Products from './pages/products';
import Contact from './pages/contact';
import About from './pages/about';
import Services from './pages/services';



function App() {
  return (
    <div className="App">
      <Router>
              <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/products" element={<Products/>}/>
              <Route exact path="/contact" element={<Contact/>}/>
              <Route exact path="/about" element={<About/>}/>
              <Route exact path="/services" element={<Services/>}/>
              </Routes>
      </Router>  
    </div>
  );
}

export default App;
