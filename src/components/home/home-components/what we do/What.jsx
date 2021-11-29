import React from "react";
import { Typography, Grid } from "@material-ui/core";
import styles from "./What.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import image1 from "./assets/illustration-elements_illustration01.svg";
import image2 from "./assets/illustration-elements_illustration02.svg";
import image3 from "./assets/illustration-elements_illustration03.svg";
import number1 from "./assets/1.svg";
import number2 from "./assets/2.svg";
import number3 from "./assets/3.svg";
import number4 from "./assets/4.svg";

const What = () => {
  return (
    <div className={styles.what}>
      <div className={styles.what_heading}>
        <Typography variant="h5">
          What we do <FaLongArrowAltRight />
        </Typography>
        <Typography variant="h6">
          We solve great and unique challenges with
        </Typography>
        <Typography>blockchain technology:</Typography>
      </div>
      <div className={styles.what_content}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <div
              data-AOS="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              className={styles.left_content}
            >
              <Typography>
                <span className={styles.number}>
                  <img src={number1} alt="" />
                </span>
                Allowing clients to exchange different currencies and
                cryptocurrencies from all over the world, instantly and for free;
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            {" "}
            <div
              data-AOS="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              className={styles.right_content}
            >
              <img src={image1} alt="" />
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            {" "}
            <div
              data-AOS="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              className={styles.left_content_md}
            >
              {" "}
              <img src={image2} alt="" />
            </div>
            <div
              data-AOS="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              className={styles.right_content_sm}
            >
              {" "}
              <Typography>
                <span className={styles.number}>
                  <img src={number2} alt="" />
                </span>
                Delivering an infrastructure to allow Search Engines to enhance the users’ privacy while increasing profitability and efficiency;
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            {" "}
            <div
              data-AOS="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              className={styles.right_content_md}
            >
              {" "}
              <Typography>
                <span className={styles.number}>
                  <img src={number2} alt="" />
                </span>
                Delivering an infrastructure to allow Search Engines to enhance the users’ privacy while increasing profitability and efficiency;
              </Typography>
            </div>
            <div
              data-AOS="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              className={styles.left_content_sm}
            >
              {" "}
              <img src={image2} alt="" />
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            {" "}
            <div
              data-AOS="fade-right"
              data-aos-delay="100"
              data-aos-duration="1000"
              className={styles.left_content}
            >
              {" "}
              <Typography>
                <span className={styles.number}>
                  <img src={number3} alt="" />
                </span>
               Democratizing cloud computing through an infrastructure for efficient and flexible decentralized data-mining applications.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            {" "}
            <div
              data-AOS="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              className={styles.right_content}
            >
              <img src={image3} alt="" />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default What;
