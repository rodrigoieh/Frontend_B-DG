import { Container } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import logo from "./../../../assets/cube_grad.svg";
import { dataCentral } from "../../../context/DatagenContext";

const SalesNavbar = () => {
  const { account, chainName, errorCode,  accountBalance } =
    useContext(dataCentral);
  const [firstChar, setFirstChar] = useState("");
  const [lastChar, setlastChar] = useState("");

  useEffect(() => {
    removeSomeChar();
  }, [account]);

  const removeSomeChar = () => {
    setFirstChar(account.slice(0, 6));

    setlastChar(account.slice(-4));
  };

  return (
    <div className={styles.navbar}>
      <Container>
        <div className={styles.navbar_content}>
          <img src={logo} alt="" />

          <div className={styles.wallet_info}>
            {account === "" ? (
              <button>Not connected</button>
            ) : (
              <>
                <button>
                  {chainName === "homestead" ? "Mainnet" : chainName}
                </button>
                <button>{accountBalance}</button>

                <button>{`${firstChar}...${lastChar}`}</button>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SalesNavbar;
