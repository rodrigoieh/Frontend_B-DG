// import React, { useEffect, useState } from "react";
// import './App.css';
// import { ethers } from "ethers";

// import abi from './utils/WavePortal.json';

// const App = () => {
//   const [currentAccount, setCurrentAccount] = useState("");
//   const [totalWaves, setTotalWaves] = useState(null);
//   const [isWaving, setIsWaving] = useState(false);
//   const [message,setMessage] = useState("")
//   const [username, setUsername] = useState("")
//   /*
//    * All state property to store all waves
//    */
//   const [allWaves, setAllWaves] = useState([]);
//     const contractAddress = "0x53ce4abB31Db423D7d04f1C4A95F3cA02869a497";
//       const contractABI = abi.abi;

//   /*
//    * Create a method that gets all waves from your contract
//    */
//   const getAllWaves = async () => {
//     try {
//       const { ethereum } = window;
//       if (ethereum) {
//         const provider = new ethers.providers.Web3Provider(ethereum);
//         const signer = provider.getSigner();
//         const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);

//         /*
//          * Call the getAllWaves method from your Smart Contract
//          */
//         const waves = await wavePortalContract.getAllWaves();
        

//         /*
//          * We only need address, timestamp, and message in our UI so let's
//          * pick those out
//          */
//         let wavesCleaned = [];
//         waves.forEach(wave => {
//           wavesCleaned.push({
//             address: wave.waver,
//             timestamp: new Date(wave.timestamp * 1000),
//             message: wave.message,
//             username: wave.username
//           });
//         });

//         /*
//          * Store our data in React State
//          */
//         setAllWaves(wavesCleaned);
//       } else {
//         console.log("Ethereum object doesn't exist!")
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   const checkIfWalletIsConnected = async () => {
//     try {
//       const { ethereum } = window;

//       if (!ethereum) {
//         console.log("Make sure you have metamask!");
//         return;
//       } else {
//         console.log("We have the ethereum object", ethereum);
//          const provider = new ethers.providers.Web3Provider(ethereum);
//         const signer = provider.getSigner();
//         const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);

//         let count = await wavePortalContract.getTotalWaves();
//         setTotalWaves(count.toNumber())
//       }

//       const accounts = await ethereum.request({ method: 'eth_accounts' });

//       if (accounts.length !== 0) {
//         const account = accounts[0];
//         console.log("Found an authorized account:", account);
//         setCurrentAccount(account);
//         getAllWaves()
//       } else {
//         console.log("No authorized account found")
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   /**
//   * Implement your connectWallet method here
//   */
//   const connectWallet = async () => {
//     try {
//       const { ethereum } = window;

//       if (!ethereum) {
//         alert("Get MetaMask!");
//         return;
//       }

//       const accounts = await ethereum.request({ method: "eth_requestAccounts" });

//       console.log("Connected", accounts[0]);
//       setCurrentAccount(accounts[0]); 
//       getAllWaves()
//     } catch (error) {
//       console.log(error)
//     }
//   }

// async function verifyUserName(username){
   
//         const provider = new ethers.providers.Web3Provider(ethereum);
//         const signer = provider.getSigner();
//         const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);

//         let isValid = await wavePortalContract.validateUserName(username);
     
//         if(isValid){
//           return true;
//         } else {
//           alert('Username already taken or Invalid');
//           return false;
//         }
// }
// const wave = async () => {
//     try {
//       const { ethereum } = window;

//       if (ethereum) {
//         await setIsWaving(true)
//         const provider = new ethers.providers.Web3Provider(ethereum);
//         const signer = provider.getSigner();
//         const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);

//         let count = await wavePortalContract.getTotalWaves();
     
//         const userNameIsAvailable = verifyUserName(username);
//         if(userNameIsAvailable){
//           const waveTxn = await wavePortalContract.wave(message,username, { gasLimit: 300000 })
//         console.log("Mining...", waveTxn.hash);

//         await waveTxn.wait();
//         console.log("Mined -- ", waveTxn.hash);

//         count = await wavePortalContract.getTotalWaves();
//         setTotalWaves(count.toNumber())
//          setIsWaving(false)
//          setMessage("");
//           setUsername("")
//         }

      
        
//       } else {
//         console.log("Ethereum object doesn't exist!");
//         await setIsWaving(false)

//       }
//     } catch (error) {
//       console.log(error)
//         await setIsWaving(false)

//     }
//   }
//   useEffect(() => {
//     checkIfWalletIsConnected();
//   }, [])
  
//   /**
//  * Listen in for emitter events!
//  */
// useEffect(() => {
//   let wavePortalContract;

//   const onNewWave = (from, timestamp, message,username) => {
//     console.log('NewWave', from, timestamp, username);
//     setAllWaves(prevState => [
//       ...prevState,
//       {
//         address: from,
//         timestamp: new Date(timestamp * 1000),
//         message,
//         username
//       },
//     ]);
//   };

//   if (window.ethereum) {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner();

//     wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);
//     wavePortalContract.on('NewWave', onNewWave);
//   }

//   return () => {
//     if (wavePortalContract) {
//       wavePortalContract.off('NewWave', onNewWave);
//     }
//   };
// }, []);
//   return (
//     <div className="mainContainer">
//       <div className="dataContainer">
//         <div className="header">
//         👋 Hey there!
//         </div>

//         <div className="bio">
//           I am codemon 💀, the greatest from West Africa,Nigeria to be more specific. Send me a wave and i could fund your address, who knows?

          
//         </div>
//     <strong align='center'>So far, i've got about {allWaves.length} wave(s) 😎</strong>
//         <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Your Awesome Username" className="username_input" />
//         <textarea value={message} placeholder="Your Message Here" onChange={e => setMessage(e.target.value)}></textarea>
//         <button className="waveButton" onClick={wave}>
//           {isWaving ? 'Sending Wave..🏃‍♀️🏃‍♀️' : 'Wave at me please 🤗'}
//         </button>
        
//         {/*
//         * If there is no currentAccount render this button
//         */}
//         {!currentAccount && (
//           <button className="waveButton" onClick={connectWallet}>
//             Connect Wallet
//           </button>
//         )}
// <div className="waves_container">
//            {allWaves.sort().map((wave, index) => {
//           return (
//             <div className="wave" key={index}>
//               <div className="wave_author"><span className="wave_at">@{wave.username}</span> <span>{new Date(wave.timestamp).toLocaleTimeString()}</span></div>
            
//               <div className="Wave_message"> {wave.message}</div>
//             </div>)
//         })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App