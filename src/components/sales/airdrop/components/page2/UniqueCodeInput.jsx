import { Container } from "@material-ui/core";
import React from "react";
import styles from "./UniqueCodeInput.module.css";

const UniqieCodeInput = () => {
  return (
    <div className={styles.unique_code_input}>
      <Container maxWidth='sm'>
        <div className={styles.unique_code_input_content}>
          <form action="">
            <input type="text" placeholder="Enter your 27 digit unique code" />
            <button>Confirm</button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default UniqieCodeInput;
