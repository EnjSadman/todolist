"use client"

import { Dispatch, SetStateAction } from "react";
import styles from "./modal.module.css";

interface ModalProps {
  isVisible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

export default function Modal(props : ModalProps) {
  console.log(props.isVisible)
  return(
    <div className={`${styles.modal} ${styles.modal__backdrop} ${(props.isVisible) ? styles.modal__visible : styles.modal__nonvisible} `}>
      <div className="">
        <input type="text" />
        <button onClick={() => {
          props.setVisible(false);
        }}>Cancel</button>
        <button onClick={() => {
          props.setVisible(false);
        }}>Save</button>
      </div>
    </div>
  )
}