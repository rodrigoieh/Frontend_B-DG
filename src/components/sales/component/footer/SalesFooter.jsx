import { Container, Typography } from "@material-ui/core";
import React from "react";
import styles from "./SalesFooter.module.css";

const SalesFooter = () => {
  return (
    <div className={styles.sales_footer}>
      <Container>
        <div className={styles.sales_footer_content}>
          <Typography>
            *Before proceeding read the guide and be sure that you installed the
            Polygon Network on your MetaMask, B-Datagray declines any
            responsibility if you have not installed the Polygon Network on your
            MetaMask: this may result in the permanent loss of your USDC &/or
            #DG.
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default SalesFooter;
