import { Container, Typography } from "@material-ui/core";
import React, { Component } from "react";
import styles from "./About.module.css";
import catalyze_logo from "./assets/catalyze.png"
import profiles from "./../team";
import { useState } from "react";
import { useEffect } from "react";
import underlay from './assets/illustration-elements_second-gradient.svg'
import mobile_underlay from './assets/illustration-elements_mobile-home-gradient (1).svg'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import xeurope_logo from "./assets/xeurope.png";
import r930 from './assets/r930.PNG'


const About = () => {
  const [teams, setTeams] = useState(profiles);



 
  useEffect(() => {
    setTeams(profiles);
  }, []);



  return (
    <>
      <div className={styles.about}>
        <img className ={styles.about_underlay} src={underlay} alt="" />
      
        <img className ={styles.about_mobile_underlay} src={mobile_underlay} alt="" />
        
        <Container maxWidth="md">
          <div className={styles.about_content}>
            <div className={styles.about_heading}>
              <Typography>About us</Typography>
            </div>
            <div className={styles.team}>
              <div className={styles.team_heading}>
                <Typography>Team</Typography>
              </div>
              <div className={styles.team_profiles}>
                {teams.map((team) => {
                  return (
                    <div
                     
                      key={team.id}
                      className={styles.team_profile}
                    >
                      <div className={styles.team_img}>
                        <img src={team.image} alt="" />
                      </div>
                      <div>
                        <Typography variant="h5">{team.name}</Typography>
                        <Typography variant="h6">{team.post}</Typography>
                        <Typography>{team.quote}</Typography>
                        <div className={styles.modal_sm}>
                        {team.linkedInUrl && (
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={team.linkedInUrl}
                            >
                             <FaLinkedinIn />
                            </a>
                          )}
                         
                          {team.otherUrl && (
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={team.otherUrl}
                            >
                              <FaGithub />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.partners}>
              <div
                className={`${styles.partners_heading} ${styles.team_heading}`}
              >
                <Typography>Partners</Typography>
              </div>
              <div className={styles.partners_content}>
                <a href="https://www.catallyze.com/" target='_blank'>
                  <img src={catalyze_logo} alt="" />
                </a>
                <a href="https://www.xeurope.eu/" target='_blank'>
                  <img src={xeurope_logo} alt="" />
                </a>
                <a href="https://r-930capital.com/" target='_blank'>
                  <img src={r930} alt="" />
                </a>
              </div>
            </div>
          </div>
        </Container>
       
      </div>
    </>
  );
};

export default About;
