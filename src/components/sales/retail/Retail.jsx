import React from "react";
import styles from "./Retail.module.css";
import underlay from "./../../assets/illustration-elements_second-gradient.svg";
import mobile_underlay from "./../../assets/illustration-elements_mobile-home-gradient (1).svg";
import SalesFooter from "../component/footer/SalesFooter";
import SalesNavbar from "../component/navbar/Navbar";
import SalesPage1 from "../component/page1/Airdrop1";

const Retail = () => {
  return (
    <div className={styles.retail}>
      <img className={styles.retail_underlay} src={underlay} alt="" />

      <img
        className={styles.retail_mobile_underlay}
        src={mobile_underlay}
        alt=""
      />

<div className={styles.retail_content}>
          <SalesNavbar/>
          {
            <SalesPage1/>
           
            }
          <SalesFooter/>
        </div>
    </div>
  );
};

export default Retail;
