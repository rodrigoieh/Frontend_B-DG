import { Container, Typography } from "@material-ui/core";
import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./Airdrop1.module.css";
import tokenLogo from "./../../../assets/tokenLogo.png";
import metamask from "./../../../assets/metamask-fox.svg";
import walletConnectIcon from "./../../../assets/walletconnect-logo.svg";
import arrow from "./../../../assets/Vector 1.svg";
import Moralis from "moralis";
import AppSnackbar from "../../../snackbar/Snackbar";
import { ethers, providers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { dataCentral } from "../../../context/DatagenContext";
import useWindowSize from "../../../customHooks/WindowSize";

const SalesPage1 = () => {
  const {
    account,
    handleConnectMetaMask,
    handleConnectWalletConnect,
    walletConnected,
  } = useContext(dataCentral);
  const size = useWindowSize();



  const getContracts = async (ethereum) => {
    try {
      //const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.airdrop1}>
      <Container maxWidth="md">
        <div className={styles.airdrop1_content}>
          <div className={styles.airdrop1_header}>
            <Typography>Connect to your MetaMask Wallet:</Typography>
          </div>
          <div className={styles.airdrop1_icons}>
            <div className={styles.icon_div}>
              <img src={tokenLogo} alt="" />
            </div>
            <div className={styles.arrow}>
              <img src={arrow} alt="" />
            </div>
            <div className={styles.icon_div}>
              <img
                src={size.width <= 768 ? walletConnectIcon : metamask}
                alt=""
              />
            </div>
          </div>
          <div className={styles.airdrop1_btn}>
            {size.width <= 768 ? null : (
              <button disabled={account === '' ? false : true} onClick={handleConnectMetaMask}> {account === '' ? 'Connect Metamask' : 'wallet connected' } </button>
            )}
            {size.width <= 768 ? (
              <button disabled={account === '' ? false : true} onClick={handleConnectWalletConnect }>
                {account === ''? "Connect WalletConnect" : "wallet connected"}
              </button>
            ) : null}
       
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SalesPage1;
