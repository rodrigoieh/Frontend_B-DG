import { Container, Typography, Grid } from "@material-ui/core";
import React, { useState } from "react";
import styles from "./Contact.module.css";
import discord from "./assets/illustration-elements_icon-discord.svg";
import linkedin from "./assets/illustration-elements_icon-linkedn.svg";
import telegram from "./assets/illustration-elements_icon-telegram.svg";
import youtube from "./assets/illustration-elements_icon-youtube.svg";
import github from './assets/illustration-elements_icon-github_02.svg'
import Loader from "react-loader-spinner";


import { FaLongArrowAltRight } from "react-icons/fa";
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import { useEffect } from "react";
import axios from "axios";
import AppSnackbar from "../snackbar/Snackbar";
import CircularProgress from '@mui/material/CircularProgress';

const Contact = () => {
  const [incomingMessage, setIncomingMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name2, setName2] = useState("");
  const [email2, setEmail2] = useState("");
  const [open, setOpen] = useState(false);
  const [captionText, setCaptionText] = useState('')
const [captionText2, setCaptionText2] = useState('')
const [loading, setLoading] = useState(false)
const [loading2, setLoading2] = useState(false)

useEffect(() => {
  const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v11", // style URL
    center: [-0.16463, 51.519], // starting position [lng, lat]
    zoom: 9, // starting zoom
    scrollZoom: true,
  });

  // Set marker options.
  const marker = new mapboxgl.Marker({
    color: "#D783B5",
    draggable: false,
  })
    .setLngLat([-0.16463, 51.519])
    .addTo(map);
}, []);


  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "name") {
      setName(value);
    }
    if (name === "email") {
      setEmail(value);
    }
    if (name === "message") {
      setMessage(value);
    }
  };
  const handleChange2 = (event) => {
    const { name, value } = event.target;

    if (name === "name2") {
      setName2(value);
    }
    if (name === "email2") {
      setEmail2(value);
    }
  };

  const handleNewsLetterSubmit = async (e) => {
   
    e.preventDefault();
    const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const emailTest = validation.test(email2);

    if (name2.length > 1 && emailTest) {
    
      try {
        setLoading2(true)
        const response = await axios.post(
          "https://datagray-mail-service.herokuapp.com/datagen/api/mail-service2",
          {
            name:  name2,
            email: email2
          }
        );
        if(response.status === 200){
          setLoading2(false)
          setOpen(true)
          setIncomingMessage(response.data.message)
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
          setLoading2(false)
          setOpen(true)
          setErrorMessage(error.response.data.message)
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          // setOpenSnackbar(true)
          // setErrorMessage('oops something went wrong, check internet connectivity')
          setLoading2(false)
          setOpen(true)
          setErrorMessage('oops..something went wrong, check internet connectivity')
        } else {
          // Something happened in setting up the request that triggered an Error
          //console.log("Error", error.message);
          setLoading2(true)
          setOpen(true)
          setErrorMessage('oops..something went wrong, check internet connectivity')
        }
      }
    } else {
      setCaptionText2('Please fill all fields with the right information')
    }
  };



  const handleContactUsSubmit = async (e) => {
   
    e.preventDefault();

    const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const emailTest = validation.test(email);
    if (name.length > 1 && emailTest && message.length > 1) {
    
      try {
        setLoading(true)
        const response = await axios.post(
          "https://datagray-mail-service.herokuapp.com/datagen/api/mail-service1",
          {
            name,
            email,
            message,
          }
        );
  
      
        if (response.status === 200) {
          setLoading(false)
          setOpen(true);
          setIncomingMessage(response.data.message2);
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
  
          setLoading(false)
          setErrorMessage(error.response.data.message);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          // setOpenSnackbar(true)
          // setErrorMessage('oops something went wrong, check internet connectivity')
          setLoading(false)
          setOpen(true);
          setErrorMessage(
            "oops..something went wrong, check internet connectivity"
          );
        } else {
          // Something happened in setting up the request that triggered an Error
          //console.log("Error", error.message);
          setLoading(false)
          setOpen(true);
          setErrorMessage(
            "oops..something went wrong, check internet connectivity"
          );
        }
      }
    } else {
      setCaptionText('Please fill all fields with the right information')
    }
    
  };

  mapboxgl.accessToken =
    "pk.eyJ1Ijoia2F5b2RlMjQyNSIsImEiOiJja3Q2d2w1cGEwbXNqMzFxbGluMGhvOGxtIn0.Ng5TcF9G_TpQk6_QeNwwKA";



  return (
    <div className={styles.contact}>
      <Container maxWidth="md">
        <div className={styles.contact_content}>
          <div className={styles.contact_heading}>
            <Typography>Contact Us</Typography>
          </div>
          <div className={styles.contact_content_main}>
            <div className={styles.where}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={5}>
                  <div className={styles.where_content}>
                    <div className={styles.where_heading}>
                      <Typography variant="h6">
                        WHERE WE ARE <FaLongArrowAltRight />
                      </Typography>
                      <Typography>Address details:</Typography>
                    </div>
                    <div className={styles.where_location}>
                      <Typography>B-Datagray</Typography>
                      <Typography>Crawford Street 19-21 London</Typography>
                      <Typography>W1H 1PJ England UK</Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={7}>
                  <div id="map" className={styles.where_map}>
                    {/* <iframe
                  title='location'
                      loading="lazy"
                      allowfullscreen
                      src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}
    &q=Crawford+Street,London+UK`}
                    ></iframe> */}
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className={styles.email}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={5}>
                  <div className={styles.email_content}>
                    <div className={styles.email_heading}>
                      <Typography variant="h6">
                        EMAIL ADDRESS <FaLongArrowAltRight />
                      </Typography>
                      <Typography>Send us an email:</Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={7}>
                  <div className={styles.email_form}>
                    <form action="">
                      <input
                        type="text"
                        onChange={handleChange}
                        placeholder="Name *"
                        name="name"
                        id=""
                      />
                      <input
                        type="text"
                        onChange={handleChange}
                        placeholder="Email Address *"
                        name="email"
                      />
                      <textarea
                        onChange={handleChange}
                        name="message"
                        placeholder="Message*"
                        id=""
                        cols="30"
                        rows="10"
                      ></textarea>
                        <Typography style={{color: 'red'}} variant="caption" display="block" gutterBottom>
       {captionText}
      </Typography>
                      <button onClick={handleContactUsSubmit}>
                       {loading ?
                          <Loader
                          type="Puff"
                          color="#00BFFF"
                          height={25}
                          width={25}
                         
                        /> : 'Send'
                       }
                        </button>
                    </form>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className={styles.join}>
              <div className={styles.join_heading}>
                <Typography variant="h6">
                  WHERE WE ARE ONLINE <FaLongArrowAltRight />
                </Typography>
                <Typography>Join our socials:</Typography>
              </div>
              <div className={styles.join_content}>
                <Grid container spacing={3}>
                  <Grid item xs={6} md={3}>
                    <div className={styles.join_socials}>
                      <a href="https://www.linkedin.com/company/b-datagray" target='_blank'>
                        <img src={linkedin} alt="" />
                        <Typography>LINKEDIN</Typography>
                      </a>
                    </div>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <div className={styles.join_socials}>
                      <a href="https://discord.gg/A9EhXheptg" target='_blank'>
                        <img src={discord} alt="" />
                        <Typography>DISCORD CHANNEL</Typography>
                      </a>
                    </div>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <div className={styles.join_socials}>
                      <a href="https://t.me/bdatagray" target='_blank'>
                        <img src={telegram} alt="" />
                        <Typography>TELEGRAM GROUP</Typography>
                      </a>
                    </div>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <div className={styles.join_socials}>
                      <a href="https://github.com/Datagen-Project" target='_blank'>
                        <img src={github} alt="" />
                        <Typography>GITHUB</Typography>
                      </a>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
            <div className={styles.newsletter}>
              <div className={styles.newsletter_heading}>
                <Typography>Newsletter</Typography>
              </div>
              <div className={styles.newsletter_content}>
                <div className={styles.left_content}>
                  <Typography>
                    Receive official news about Datagen project's developments
                    and updates by joining our community.
                  </Typography>
                </div>
                <div className={styles.right_content}>
                  <Typography>
                    Leave here your contact to join the community !
                  </Typography>
                  <form action="">
                    <input
                      onChange={handleChange2}
                      name="name2"
                      type="text"
                      value={name2}
                      placeholder="name*"
                    />
                    <input
                      onChange={handleChange2}
                      name="email2"
                      type="text"
                      value={email2}
                      placeholder="Email Address"
                    />
                          <Typography style={{color: 'red'}} variant="caption" display="block" gutterBottom>
       {captionText2}
      </Typography>

                    <button onClick={handleNewsLetterSubmit}>  
                   {
loading2 ?  <Loader
type="Puff"
color="#00BFFF"
height={25}
width={25}

/> : 'Subscribe'
                   }</button>
                  </form>
                </div>
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
    </div>
  );
};

export default Contact;
