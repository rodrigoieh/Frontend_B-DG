import React from "react";
import { Container, Typography, Grid, LinearProgress } from "@material-ui/core";
import styles from "./TokenSale.module.css";
import symbol from './assets/illustration-elements_token-logo.svg'
import { useState } from "react";
import { useEffect } from "react";




const TokenSale = () => {


  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  }, [])


  return (
    <div className={styles.token_sale}>
      <Container maxWidth="md">
        <div className={styles.token_sale_content}>
          <div className={styles.token_sale_heading}>
            <Typography>Token Sale</Typography>
          </div>
            <div className={styles.banner_btn}>
        <button>retail #DG token sale SOON</button>
         <button>VCs #DG token sale SOON</button>
      </div>
          <div className={styles.tokenomics}>
            <div className={styles.tokenomics_heading}>
              <Typography>Tokenomics</Typography>
            </div>
            <div className={styles.tokenomics_data}>
              <Grid container spacing={3}>
                <Grid item xs={6} sm={6} md={4}>
                  <div className={styles.item}>
                    <Typography>Name: DataGen (#DG) </Typography>
                  
                  </div>
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <div className={styles.item}>
                    <Typography>Max supply: 30M</Typography>
                  
                  </div>
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <div className={styles.item}>
                    <Typography>Decimals: 18</Typography>
                  
                  </div>
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <div className={styles.item}>
                    <Typography>Symbol:  <img src={symbol} alt="" /></Typography>
                   
                  </div>
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <div className={styles.item}>
                    <Typography>Initial supply: see smart contracts</Typography>
                  
                  </div>
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <div className={styles.item}>
                    <Typography>Typology: ERC-20 later bridged to native blockchain </Typography>
                  
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
          <div className={styles.tokenomics_progress}>
            <div className={styles.progress_item}>
              <div className={styles.progress_item_text}>
                <Typography>Reserved for Mining</Typography>
                <Typography>50%</Typography>
              </div>
              <div className={styles.progress_item_bar}>
                <LinearProgress
                  className={styles.my_progress}
                  variant="determinate"
                  value={show? 50: 0}
                />
              </div>
            </div>
            <div className={styles.progress_item}>
              <div className={styles.progress_item_text}>
                <Typography>Public sale</Typography>
                <Typography>11.67%</Typography>
              </div>
              <div className={styles.progress_item_bar}>
                <LinearProgress
                  className={styles.my_progress2}
                  variant="determinate"
                  value={show? 11.67: 0}
                />
              </div>
            </div>
            <div className={styles.progress_item}>
              <div className={styles.progress_item_text}>
                <Typography>Co-founders</Typography>
                <Typography>10.00%</Typography>
              </div>
              <div className={styles.progress_item_bar}>
                <LinearProgress
                  className={styles.my_progress3}
                  variant="determinate"
                  value={show? 10: 0}
                />
              </div>
            </div>
            <div className={styles.progress_item}>
              <div className={styles.progress_item_text}>
                <Typography>Liquidity</Typography>
                <Typography>8.33%</Typography>
              </div>
              <div className={styles.progress_item_bar}>
                <LinearProgress
                  className={styles.my_progress4}
                  variant="determinate"
                  value={show? 8.33: 0}
                />
              </div>
            </div>
            <div className={styles.progress_item}>
              <div className={styles.progress_item_text}>
                <Typography>Private sale (VC + retail investors)
                </Typography>
                <Typography>8.33%</Typography>
              </div>
              <div className={styles.progress_item_bar}>
                <LinearProgress
                  className={styles.my_progress5}
                  variant="determinate"
                  value={ show? 8.33: 0}
                />
              </div>
            </div>
            <div className={styles.progress_item}>
              <div className={styles.progress_item_text}>
                <Typography>Team & Advisor</Typography>
                <Typography>6.67%</Typography>
              </div>
              <div className={styles.progress_item_bar}>
                <LinearProgress
                  className={styles.my_progress6}
                  variant="determinate"
                  value={show? 6.67: 0}
                />
              </div>
            </div>
            <div className={styles.progress_item}>
              <div className={styles.progress_item_text}>
                <Typography>B-Datagray Reserve Pool</Typography>
                <Typography>5.00%</Typography>
              </div>
              <div className={styles.progress_item_bar}>
                <LinearProgress
                  className={styles.my_progress7}
                  variant="determinate"
                  value={show? 5 : 0   }
             />
              </div>
            </div>
          </div>
          <div className={styles.whitepaper_download}>
            <Typography>
              Long version Tokenomics
            </Typography>
            
               <a href="/datagen-tokenomic.pdf" target="_blank" download>
                  <button>Download Tokenomics</button>
                </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TokenSale;
