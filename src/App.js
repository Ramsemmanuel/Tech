import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,  Route, } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Contact from './contents/Contact';
import Category from './components/category_list';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div className="App">
          <Navbar />
          <Route exact path="/">
          <Home />
          </Route>
          <Route path="/about">
          <About />
          </Route>
          <Route path="/contact">
          <Contact />
          </Route>
          <Route path="/details">
          <Category />
          </Route>
          </div>
        </Router>
        
      </header>
    </div>
  );
}

export default App;
