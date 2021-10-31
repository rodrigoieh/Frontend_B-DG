import { Container, Typography } from "@material-ui/core";
import React from "react";
import Banner from "./home-components/banner/Banner";
import What from "./home-components/what we do/What";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Container maxWidth='md'>
              <div className={styles.home_content}>
          <Banner />
          <What/>
        </div>
      </Container>
    </div>
  );
};

export default Home;
