import { Container, Typography } from "@material-ui/core";
import React from "react";
import styles from "./Product.module.css";
import number1 from "./../home/home-components/what we do/assets/1.svg";
import number2 from "./../home/home-components/what we do/assets/2.svg";
import number3 from "./../home/home-components/what we do/assets/3.svg";
import number4 from "./../home/home-components/what we do/assets/4.svg";

import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className={styles.product}>
      <Container maxWidth="md">
        <div className={styles.product_content}>
          <div className={styles.product_heading}>
            <Typography>Products</Typography>
          </div>
          <div className={styles.solving}>
            <div className={styles.solving_heading}>
              <Typography>What we are solving</Typography>
            </div>
            <div className={styles.solving_content}>
              <Typography>
                <span className={styles.number}>
                  <img src={number1} alt="" />
                </span>
                Inefficiency in the Cloud Computing and Search Engine
                industries: Both Search Engines (S.E.) & High Computing Power
                Requiring Applications (H.C.P.R.A.) relies on mammoth
                centralized server farms unable to allow flexibility and
                oligopolizing the market
              </Typography>
              <Typography>
                <span className={styles.number}>
                  <img src={number2} alt="" />
                </span>
                The Privacy vs Profitability dilemma: S.E. (like other
                H.C.P.R.A) are trapped in a mechanism heavily relying on user’s
                data exploitation: the more privacy the less revenues and vice
                versa. At the same time, business models with users paying
                subscriptions for otherwise free-services is unable to reach
                economy of scale.
              </Typography>
              <Typography>
                <span className={styles.number}>
                  <img src={number3} alt="" />
                </span>
               Blockchain technology is relegated to niche markets and has
                severe problems in scaling up: companies shaping the backbone of
                internet services lack the transparency provided by blockchain
                technology, while blockchain technology companies systematically
                design their product to operate just in marginal niches of the
                digital economy
              </Typography>
              <Typography>
                <span className={styles.number}>
                  <img src={number4} alt="" />
                </span>
                Web 3.0 is revolutionizing just the “skin” of digital
                economy: While web 3.0 is revolutionizing some software
                application (like with DApps, DeFi or different decentralized
                providers), the web-based tools still heavily rely on Web 2.0
                backbones: centralized cloud computing and centralized search
                engines
              </Typography>
            </div>
          </div>
          <div className={styles.creating}>
            <div className={styles.creating_heading}>
              <Typography>What we are creating</Typography>
            </div>
            <div className={styles.creating_sub_heading}>
              <Typography>
                A complex blockchain ecosystem offering different services and
                products each ones helping the others to solve scale problems:
              </Typography>
            </div>
            <div className={styles.creating_content}>
              <div className={styles.creating_content_tab}>
                <div className={styles.horizontal_typo}>
                  <Typography>DataGen Token</Typography>
                </div>
                <Typography>
                  A new cryptocurrency used to settle all the payments in the
                  ecosystem. Initially it will be an Ethereum Smart Contract
                  Token and later updated in a native cryptocurrency suitable
                  for in-chain payments. (Eventual creation of a second token,
                  related only to the open-source infrastructure as a fork of
                  the first one)
                </Typography>
              </div>
              <div className={styles.creating_content_tab}>
                <div className={styles.horizontal_typo}>
                  <Typography>The Portal</Typography>
                </div>
                <Typography>
                  A semi-decentralized exchange platform, designed to exchange
                  cryptocurrencies and fiat currencies. Like other existing
                  exchanges, the Portal acts as the owner of an ordinary
                  account/wallet of the cryptocurrencies and as the owner of a
                  bank account of the Fiat currencies. What makes our exchange
                  different and innovative? A Fee Free Model
                </Typography>
              </div>
              <div className={styles.creating_content_tab}>
                <div className={styles.horizontal_typo}>
                  <Typography>EARLY DATAGEN INFRASTRUCUTRE & MINIDATA RESEARCH</Typography>
                </div>
                <Typography>
                The Early Datagen infrastructure is a blockchain-based infrastructure providing to web browsers and searching tools: 
                  <ul>
                    <li>
                    decentralized cloud computing, in the most efficient, transparent and flexible possible way, thanks to our native customized blockchain;
                    </li>
                    <li>
                    the ability to exit from the Privacy vs Profitability dilemma by using the blockchain technology to decouple the users’ personal data from the advertising analytics.
                    </li>
                  </ul>
                </Typography>
                <Typography>Minidata Research will be a proprietary specialistic search engine created both as a proof-of-concept to assess the features of the infrastructure and as a full functional product.</Typography>
              </div>
              <div className={styles.creating_content_tab}>
                <div className={styles.horizontal_typo}>
                  <Typography>Datagen</Typography>
                </div>
                <Typography>
                  DataGen is a decentralized blockchain-powered open
                  infrastructure, where demand and supply of computing power can
                  meet. Thought as a marketplace of computing power, can have
                  different uses, with different applications allowing different
                  computational problems to be solved on demand. The
                  infrastructure is open-source, so anyone can develop
                  applications using the computing power of DataGen's network.
                </Typography>
              </div>
            </div>
          </div>
          <div className={styles.whitepaper}>
            <div className={styles.whitepaper_heading}>
              <Typography>Whitepaper</Typography>
            </div>
            <div className={styles.whitepaper_content}>
              <Typography>
                For further technical details on the products download “DataGen
                Project technical Whitepaper by B-Datagray LTD”
              </Typography>
              <div>
                <a href="/datagen-whitepaper.pdf" target="_blank" download>
                  <button>Download</button>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.roadmap}>
            <div className={styles.roadmap_heading}>
              <Typography>Roadmap</Typography>
            </div>
            <div className={styles.roadmap_content}>
              <div className={styles.stage}>
                <div className={styles.upper}></div>
                <div className={styles.icon}>
                  <Typography>Q1</Typography>
                </div>
                <div className={styles.stage_content}>
                  <div className={styles.stage_content_upper}>
                    <Typography>August 2020 B- Datagray LTD incorporation.</Typography>
                   
                  </div>
                  <div className={styles.stage_content_lower}>
                  <Typography>April 2021 Website- Landing page. </Typography>
                  </div>
                </div>
              </div>
              <div className={styles.stage}>
                <div className={styles.upper}></div>
                <div className={styles.icon2}>
                  <Typography>Q2</Typography>
                </div>
                <div className={styles.stage_content}>
                  <div className={styles.stage_content_upper}>
                    <Typography>November/December 2021 Token Launch</Typography>
                  
                  </div>
                  <div className={styles.stage_content_lower}>
                   
                    <Typography>March/April 2022 IDO/IEO </Typography>
                  </div>
                </div>
              </div>
              <div className={styles.stage}>
                <div className={styles.upper}></div>
                <div className={styles.icon3}>
                  <Typography>Q3</Typography>
                </div>
                <div className={styles.stage_content}>
                  <div className={styles.stage_content_upper}>
                    
                    <Typography>November 2022 Full functional exchange. </Typography>
                  </div>
                  <div className={styles.stage_content_lower}>
                    
                    <Typography>August 2023 Beta of the Search Engine. </Typography>
                  </div>
                </div>
              </div>
              <div className={styles.stage}>
                <div className={styles.upper}></div>
                <div className={styles.icon4}>
                  <Typography>Q4</Typography>
                </div>
                <div className={styles.stage_content}>
                  <div className={styles.stage_content_upper}>

                    <Typography>August 2024 Full functional Search Engine – BETA Datagen Infrastructure. </Typography>
                  </div>
                  <div className={styles.stage_content_lower}>
                   
                    <Typography>August 2024 shift in chain. </Typography>
                  </div>
                </div>
              </div>
              <div className={styles.stage}>
                <div className={styles.upper}></div>
                <div className={styles.icon5}>
                  <Typography>Q5</Typography>
                </div>
                <div className={styles.stage_content}>
                  <div className={styles.stage_content_upper}>
                  
                    <Typography>2026 Full functional Datagen Infrastructure </Typography>
                  </div>
                  <div className={styles.stage_content_lower}>
                  
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.roadmap_content_sm}>
              <div className={styles.stage_sm}>
                <div className={styles.upper_sm}></div>
                <div className={styles.icon_sm}>
                  <Typography>Q1</Typography>
                </div>
                <div className={styles.stage_content_sm}>
                  <div className={styles.stage_content_upper_sm}>
                  <Typography>August 2020 B- Datagray LTD incorporation.</Typography>
                  </div>
                  <div className={styles.stage_content_lower_sm}>
                    <Typography>April 2021 Website- Landingpage. </Typography>
                  </div>
                </div>
              </div>
              <div className={styles.stage_sm}>
                <div className={styles.upper_sm}></div>
                <div className={styles.icon_sm2}>
                  <Typography>Q2</Typography>
                </div>
                <div className={styles.stage_content_sm}>
                  <div className={styles.stage_content_upper_sm}>
                    <Typography>November/December 2021 Token Launch</Typography>
                  </div>
                  <div className={styles.stage_content_lower_sm}>
                     <Typography>March/April 2022 IDO/IEO </Typography>
                  </div>
                </div>
              </div>
              <div className={styles.stage_sm}>
                <div className={styles.upper_sm}></div>
                <div className={styles.icon_sm3}>
                  <Typography>Q3</Typography>
                </div>
                <div className={styles.stage_content_sm}>
                  <div className={styles.stage_content_upper_sm}>
               <Typography>November 2022 Full functional exchange. </Typography>
                  </div>
                  <div className={styles.stage_content_lower_sm}>
                 
                    <Typography>August 2023 Beta of the Search Engine. </Typography>
                  </div>
                </div>
              </div>
              <div className={styles.stage_sm}>
                <div className={styles.upper_sm}></div>
                <div className={styles.icon_sm4}>
                  <Typography>Q4</Typography>
                </div>
                <div className={styles.stage_content_sm}>
                  <div className={styles.stage_content_upper_sm}>
                     <Typography>August 2024 Full functional Search Engine – BETA Datagen Infrastructure. </Typography>
                  </div>
                  <div className={styles.stage_content_lower_sm}>
                   <Typography>August 2024 shift in chain. </Typography>
                  </div>
                </div>
              </div>
              <div className={styles.stage_sm}>
                <div className={styles.upper_sm}></div>
                <div className={styles.icon_sm5}>
                  <Typography>Q5</Typography>
                </div>
                <div className={styles.stage_content_sm}>
                  <div className={styles.stage_content_upper_sm}>
                     <Typography>2026 Full functional Datagen Infrastructure </Typography>
                  </div>
                  <div className={styles.stage_content_lower_sm}>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;
