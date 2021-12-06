import { Container } from "@material-ui/core";
import React, {useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "./assets/cube_grad.svg";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

import SideNav from "./../sideNav/SideNav";
import { dataCentral } from "../context/DatagenContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
const {activeLink, setActiveLink} = useContext(dataCentral)


  const handleAsideOpen = () => {
    setOpen(!open);
  };

  const handleActiveLink=(link) => {
    setActiveLink(link)
  }

  return (
    <div className={styles.navbar}>
      <Container>
        <div className={styles.navbar_content}>
          <div className={styles.navbar_logo}>
            <Link onClick={()=>{handleActiveLink('home')}} to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className={styles.nav_links}>
             <Link className={activeLink==='home'? styles.active_link: null} onClick={()=>{handleActiveLink('home')}} to="/">Home</Link>
            <Link className={activeLink==='products'? styles.active_link: null} onClick={()=>{handleActiveLink('products')}} to="/products">Products</Link>
            <Link className={activeLink==='token-sale'? styles.active_link: null} onClick={()=>{handleActiveLink('token-sale')}} to="/token-sale">Token sale</Link>
            <Link className={activeLink==='about'? styles.active_link: null} onClick={()=>{handleActiveLink('about')}} to="/about">About us</Link>
            <Link className={activeLink==='contact'? styles.active_link: null} onClick={()=>{handleActiveLink('contact')}} to="/contact">Contact us</Link>
            {/* <a href="">
              <FaLinkedinIn />
            </a>
            <a href="">
              {" "}
              <FaYoutube />{" "}
            </a> */}
          </div>
          <div className={styles.burger}>
            <IoMenu onClick={handleAsideOpen} />
          </div>
        </div>
      </Container>
      <SideNav  open={open} setOpen={setOpen} />
    </div>
  );
};

export default Navbar;
