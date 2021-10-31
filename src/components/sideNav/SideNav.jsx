import React, {useContext} from "react";
import { Container } from "@material-ui/core";
import styles from "./SideNav.module.css";
import logo from "./../navbar/assets/cube_grad.svg"
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { dataCentral } from "../context/DatagenContext";


const SideNav = ({ open, setOpen }) => {
  const {activeLink, setActiveLink} = useContext(dataCentral)
  

  const handleActiveLink=(link)=>{
    setActiveLink(link)
  }
  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <div className={open ? styles.aside_active : styles.my_aside}>
      <Container maxWidth="sm" className={styles.my_container}>
        <div className={styles.menu_content}>
                  <div className={styles.menu_heading}>
                      <Link onClick={()=>{handleClose(); handleActiveLink('home')}}  to='/'>
                       <img src={logo} alt="" />
                      </Link>
           
            <IoIosCloseCircleOutline onClick={handleClose} />
          </div>
          <div className={styles.menu_links}>
             <Link className={activeLink==='home'? styles.active_link: null}  onClick={()=>{handleClose(); handleActiveLink('home')}}  to="/">Home</Link>
           <Link className={activeLink==='products'? styles.active_link: null}   onClick={()=>{handleClose(); handleActiveLink('products')}}   to="/products">Products</Link>
            <Link className={activeLink==='token-sale'? styles.active_link: null}  onClick={()=>{handleClose(); handleActiveLink('token-sale')}}   to="/token-sale">Token sale</Link>
            <Link  className={activeLink==='about'? styles.active_link: null}  onClick={()=>{handleClose(); handleActiveLink('about')}}  to="/about">About us</Link>
            <Link className={activeLink==='contact'? styles.active_link: null}  onClick={()=>{handleClose(); handleActiveLink('contact')}}   to="/contact">Contact us</Link>
          </div>
          {/* <div className={styles.menu_sm}>
            <a href="">LINKEDIN</a>
            <a href="">YOUTUBE</a>
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default SideNav;
