import React from "react";
import { Grid, Typography } from "@material-ui/core";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div
        data-AOS="fade-left"
        data-aos-delay="50"
        data-aos-duration="1000"
        className={styles.banner_text}
      >
        <Typography variant="h6">DATAGEN PROJECT</Typography>
        <Typography>Upgrading blockchain revolution</Typography>
        <Typography>Journey to a decentralized cloud computing infrastructure</Typography>
      </div>
      <div  data-AOS="fade-right"
                data-aos-delay="100"
                data-aos-duration="1000" className={styles.banner_btn}>
        <button>retail token sale SOON</button>
         <button>VCs token sale SOON</button>
      </div>
    </div>
  );
};

export default Banner;
