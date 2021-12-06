import React, { useEffect, useState } from "react";
import WalletConnectProvider from "@walletconnect/web3-provider";
import AppSnackbar from "../snackbar/Snackbar";
import { ethers, providers } from "ethers";
import useWindowSize from "../customHooks/WindowSize";
export const dataCentral = React.createContext();

const DatagenContext = (props) => {
  const [activeLink, setActiveLink] = useState("");
  const [incomingMessage, setIncomingMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [account, setAccount] = useState("");
  const [accountBalance, setAccountBalance] = useState("");
  const [chainName, setChainName] = useState("");
  const [open, setOpen] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [errorCode, setErrorCode] = useState(null);
  const [contractPresent, setContractPresent] = useState(false);
  const [walletConnectDetails, setWalletConnectDetails] = useState({});
  const size = useWindowSize();

  useEffect(() => {
    if (size.width == undefined) {
    } else {
      if (size.width < 768) {
        if (localStorage.hasOwnProperty("walletconnect")) {
          setWalletConnectDetails(JSON.parse(localStorage.getItem("walletconnect")))
          if (JSON.parse(localStorage.getItem("walletconnect")).connected) {
            handleConnectWalletConnect();
          } else {
          }
        } else {
        }
      } else {
        if (JSON.parse(localStorage.getItem("metaConnected"))) {
          handleConnectMeta();
        } else {
        }
      }
    }
  }, [size]);

  const walletConnectprovider = new WalletConnectProvider({
    infuraId: "143051dc478748b09ddf3c152afe3de5", // Required

    qrcodeModalOptions: {
      mobileLinks: [
        "rainbow",
        "metamask",
        "argent",
        "trust",
        "imtoken",
        "pillar",
      ],
      desktopLinks: [
        "rainbow",
        "metamask",
        "argent",
        "trust",
        "imtoken",
        "pillar",
      ],
    },
  });

  const handleConnectMeta = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        setOpen(true);
        setErrorMessage("install metamask to proceed");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const ethersProvider = new ethers.providers.Web3Provider(ethereum);
      const signer = await ethersProvider.getSigner();
      setAccount(accounts[0]);
      const balance = await ethersProvider.getBalance(accounts[0]);
      setAccountBalance(balance.toNumber());
      const chainID = await ethersProvider.network.chainId;
      const chainName = await ethersProvider.network.name;

      setChainName(chainName);
      setErrorCode(null);
      // localStorage.setItem('metaConnected', JSON.stringify(true))
      //getContracts(chainID, signer);
    } catch (error) {
      console.log(error.code);
      setErrorCode(error.code);

      setAccount("");
    }
  };

  window.ethereum.on("accountsChanged", (accounts) => {
    if (accounts.length > 0) {
      localStorage.setItem("metaConnected", JSON.stringify(true));
    } else {
      setAccount("");
      localStorage.setItem("metaConnected", JSON.stringify(false));
    }
  });

  window.ethereum.on("chainChanged", (chainId) => {
    handleConnectMeta();
  });

  const handleConnectWalletConnect = async () => {
    try {
      await walletConnectprovider.enable();
      const ethersProvider = new ethers.providers.Web3Provider(
        walletConnectprovider
      );

      const signer = await ethersProvider.getSigner();

      //  Get Accounts
      const accounts = await ethersProvider.listAccounts();
      setAccount(accounts[0]);
      const balance = await ethersProvider.getBalance(accounts[0]);
      setAccountBalance(balance.toNumber());

      const chainID = await ethersProvider.network.chainId;

      const chainName = await ethersProvider.network.name;

      setChainName(chainName);

      //getContracts(chainID, signer);
    } catch (error) {
   
      window.location.reload();
    }
  };

  //Subscribe to accounts change
  walletConnectprovider.on("accountsChanged", (accounts) => {
  
    handleConnectWalletConnect();
    //setAccount(accounts[0])
  });

  // Subscribe to chainId change
  walletConnectprovider.on("chainChanged", (chainId) => {
    handleConnectWalletConnect();
    //window.location.reload();
  });

  // Subscribe to session connection
  walletConnectprovider.on("connect", () => {
    setWalletConnected(true);
  });

  // Subscribe to session disconnection
  walletConnectprovider.on("disconnect", (code, reason) => {
    setAccount("");
    setWalletConnectDetails({})
    setWalletConnected(false);
  });

  const disconnectWalletConnect = async () => {
    await walletConnectprovider.disconnect();
  };

  const getContracts = async (chainID, signer) => {
    try {
      const contract = contract.networks[chainID];
      if (contract) {
        const contractObject = new ethers.Contract(
          contract.address,
          contract.abi,
          signer
        );
        setContractPresent(true);
      } else {
        console.log("no contract at this net");
      }
    } catch (error) {}
  };

  return (
    <dataCentral.Provider
      value={{
        activeLink,
        setActiveLink,
        handleConnectMetaMask: handleConnectMeta,
        handleConnectWalletConnect,
        account,
        chainName,
        accountBalance,
        errorCode,
        walletConnected,
        disconnectWalletConnect,
        contractPresent,
      }}
    >
      {props.children}
      <AppSnackbar
        open={open}
        errorMessage={errorMessage}
        incomingMessage={incomingMessage}
        setOpen={setOpen}
      />
    </dataCentral.Provider>
  );
};

export default DatagenContext;
