import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import About from "./about-us/About";
import Footer from "./footer.jsx/Footer";
import Product from "./products/Product";
import TokenSale from "./token sale/TokenSale";
import Contact from "./contact/Contact";
import aos from "aos";
import "aos/dist/aos.css";
import "@fontsource/roboto";
import Airdrop from "./sales/airdrop/Airdrop";
import { useHistory } from "react-router";
import { useLocation } from "react-router";
import Retail from "./sales/retail/Retail";


const App = () => {
  const history = useHistory()
const location = useLocation()

  useEffect(() => {
    aos.init();
  }, []);

  return (
      <>
     {location.pathname.includes('sales') ? null: <Navbar /> } 
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Product} />
        <Route path="/token-sale" component={TokenSale} />
        <Route path="/contact" component={Contact} />
      </Switch>
     
      {location.pathname.includes('sales') ? null:  <Footer />} 
      <Route path='/sales/airdrop' component={Airdrop} />
      <Route path='/sales/retail' component={Retail} />
      </>
   
  );
};

export default App;
