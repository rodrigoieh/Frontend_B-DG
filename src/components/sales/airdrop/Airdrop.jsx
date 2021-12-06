import React from "react";
import styles from "./Airdrop.module.css";
import underlay from "./../../assets/illustration-elements_second-gradient.svg";
import mobile_underlay from "./../../assets/illustration-elements_mobile-home-gradient (1).svg";
import { Container } from "@material-ui/core";

import SalesFooter from "./../component/footer/SalesFooter";
import UniqieCodeInput from "./components/page2/UniqueCodeInput";
import SalesNavbar from "../component/navbar/Navbar";
import SalesPage1 from "../component/page1/Airdrop1";

const Airdrop = () => {
  return (
    <div className={styles.airdrop}>
      <img className={styles.airdrop_underlay} src={underlay} alt="" />
     
      <img
        className={styles.airdrop_mobile_underlay}
        src={mobile_underlay}
        alt=""
      />
  
        <div className={styles.airdrop_content}>
          <SalesNavbar  />
          {
            <SalesPage1/>
            // <UniqieCodeInput/>
            }
          <SalesFooter/>
        </div>
 
    </div>
  );
};

export default Airdrop;
