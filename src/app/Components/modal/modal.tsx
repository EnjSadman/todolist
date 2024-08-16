"use client"

import { Dispatch, SetStateAction, useState } from "react";
import styles from "./modal.module.css";

interface ModalProps {
  isVisible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

export default function Modal(props : ModalProps) {
  const [todoTitle, setTodoTitle] = useState("");
  const [isTodoCreated, setTodoCreated] = useState(false);

  return(
    <div className={`${styles.modal} ${styles.modal__backdrop} ${(props.isVisible) ? styles.modal__visible : styles.modal__nonvisible} `}>
      <div className={styles.modal_body}>
        <input
          type="text"
          placeholder="What you need todo?"
          value={todoTitle}
          onChange={(event) => {
            setTodoTitle(event.target.value);
          }}
        />
        <button className="button-red" onClick={() => {
          props.setVisible(false);
        }}>Cancel</button>
        <button className="button-green" onClick={() => {
          props.setVisible(false);
        }}>Save</button>
      </div>
    </div>
  )
}