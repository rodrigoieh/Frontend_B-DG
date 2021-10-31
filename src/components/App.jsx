import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from './home/Home';
import About from './about-us/About';
import Footer from './footer.jsx/Footer';
import Product from './products/Product';
import TokenSale from './token sale/TokenSale';
import Contact from './contact/Contact';
import aos from "aos";
import "aos/dist/aos.css";
import '@fontsource/roboto';



const App = () => {
   useEffect(() => {
    aos.init();
  }, []);
  return (
      <Router>
          <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/products' component={Product} />
        <Route path='/token-sale' component={TokenSale} />
          <Route path='/contact' component={Contact}  />
      </Switch>
      <Footer/>
    </Router>
  );
};

export default App;
