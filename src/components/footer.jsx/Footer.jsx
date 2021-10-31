import React, { useEffect, useContext, useState } from "react";
import { Container, Typography } from "@material-ui/core";
import styles from "./Footer.module.css";
import logo from "./../navbar/assets/cube_grad.svg";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import discord_icon from "./../contact/assets/illustration-elements_icon-discord.svg";
import linkedin_icon from "./../contact/assets/illustration-elements_icon-linkedn.svg";
import telegram_icon from "./../contact/assets/illustration-elements_icon-telegram.svg";
import github_icon from "./../contact/assets/illustration-elements_icon-github_02.svg";
import axios from "axios";
import AppSnackbar from "../snackbar/Snackbar";
import backToTop from 'reactjs-back-to-top';
import { dataCentral } from "../context/DatagenContext";


const Footer = () => {
  const {activeLink, setActiveLink} = useContext(dataCentral)
  const [incomingMessage, setIncomingMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [captionText, setCaptionText] = useState("");


  const handleActiveLink=(link) => {
    setActiveLink(link)
  }
 


const handleBackToTheTop=()=>{
 
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  
}

  const handleChange = (event) => {
    const { value, name } = event.target;

    if (name === "email") {
      setEmail(value);
    }
  };

  const handleNewsLetterSubmit = async (e) => {
    e.preventDefault();
    const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const emailTest = validation.test(email);

    if (emailTest) {
      try {
        const response = await axios.post(
          "https://datagray-mail-service.herokuapp.com/datagen/api/mail-service3",
          {
            email: email,
          }
        );
        if (response.status === 200) {
          setOpen(true);
          setIncomingMessage(response.data.message);
        }
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          //console.log(error.response.data.message);
          //console.log(error.response.status);
          // console.log(error.response.headers);
          // setErrorMessage(`${error.response.status}, ${error.response.data.message}`)
          // setOpenSnackbar(true)
          setOpen(true);
          setErrorMessage(error.response.data.message);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          // setOpenSnackbar(true)
          // setErrorMessage('oops something went wrong, check internet connectivity')
          setOpen(true);
          setErrorMessage(
            "oops..something went wrong, check internet connectivity"
          );
        } else {
          // Something happened in setting up the request that triggered an Error
          //console.log("Error", error.message);
          setOpen(true);
          setErrorMessage(
            "oops..something went wrong, check internet connectivity"
          );
        }
      }
    } else {
      setCaptionText("Please input the correct email");
    }
  };

  return (
    <footer>
      <Container>
        <div className={styles.footer_content}>
          <div className={styles.logo_address}>
            <div className={styles.footer_logo}>
              <Link onClick={()=>{handleBackToTheTop(); handleActiveLink('home')}} to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className={styles.footer_address}>
              <Typography>B-Datagray</Typography>
              <Typography>Crawford Street 19-21, London</Typography>
              <Typography>W1H 1PJ England UK</Typography>
              <div className={styles.footer_sm}>
                <a
                  href="https://www.linkedin.com/company/b-datagray"
                  target="_blank"
                >
                  <img src={linkedin_icon} alt="" />
                </a>
                <a href="https://t.me/bdatagray" target="_blank">
                  <img src={telegram_icon} alt="" />
                </a>
                <a href="https://discord.gg/A9EhXheptg" target="_blank">
                  <img src={discord_icon} alt="" />
                </a>
                <a href="https://github.com/Datagen-Project" target="_blank">
                  <img src={github_icon} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.footer_links_sm}>
            <div class={styles.footer_links}>
              <Link className={activeLink==='products'? styles.active_link: null}  onClick={()=>{handleBackToTheTop(); handleActiveLink('products') }}  to="/products">Products</Link>
              <Link className={activeLink==='token-sale'? styles.active_link: null}   onClick={()=>{handleBackToTheTop(); handleActiveLink('token-sale') }} to="/token-sale">Token sale</Link>
              <Link className={activeLink==='about'? styles.active_link: null}   onClick={()=>{handleBackToTheTop(); handleActiveLink('about') }} to="/about">About us</Link>
              <Link className={activeLink==='contact'? styles.active_link: null}   onClick={()=>{handleBackToTheTop(); handleActiveLink('contact') }} to="/contact">Contact us</Link>
            </div>
          </div>
          <div className={styles.subscribe}>
            <label htmlFor="">SUBSCRIBE TO OUR NEWSLETTER</label>
            <Typography
              style={{ color: "red" }}
              variant="caption"
              display="block"
            >
              {captionText}
            </Typography>
            <div className={styles.input_box}>
              <input
                onChange={handleChange}
                value={email}
                placeholder="Email"
                type="text"
                name="email"
              />
              <div onClick={handleNewsLetterSubmit}>
                {" "}
                <FaLongArrowAltRight />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <AppSnackbar
        open={open}
        errorMessage={errorMessage}
        incomingMessage={incomingMessage}
        setOpen={setOpen}
      />
    </footer>
  );
};

export default Footer;
