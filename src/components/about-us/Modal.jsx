import React from "react";
import {
  Dialog,
  DialogActions,
  Button,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@material-ui/core";

import styles from "./About.module.css";
import { useEffect } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";


const Modal = ({ profile, open, handleClose }) => {
  return (
    <div>
      <div
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={styles.my_dialog}
        onClick={handleClose}
      >
        <div className={styles.my_modal}>
          <div className={styles.modal_img}>
            <img src={profile.image} alt="" />
          </div>
          <div className={styles.modal_sm}>
      
            <a target='_blank' rel="noreferrer" href={profile.linkedInUrl}>
              <FaLinkedinIn />
            </a>
            {
              profile.otherUrl &&
 <a target='_blank' rel="noreferrer" href={profile.otherUrl}>
              <FaGithub />
            </a>
            }
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
