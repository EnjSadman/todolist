"use client"

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./modal.module.css";
import { ModalState, todosType } from "@/lib/types";

interface ModalProps {
  isVisible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;

  modalAction: ModalState;

  todoToEdit: todosType;

  lastUserId: number,
  lastTodoId: number,
  setLastTodoId: Dispatch<SetStateAction<number>>;
}

export default function Modal(props : ModalProps) {
  const [todoTitle, setTodoTitle] = useState("");
  const [isInputValid, setIsInputValid] = useState(true);
  const [isTodoCreated, setTodoCreated] = useState(false);

  let timeout : NodeJS.Timeout;
  useEffect(() => {
   if (props.todoToEdit.title.length > 1) {
    setTodoTitle(props.todoToEdit.title);
   } 
  })

  if (props.modalAction == ModalState.new) {
    return(
      <div 
        className={`${styles.modal} ${styles.modal__backdrop} ${(props.isVisible) ? styles.modal__visible : styles.modal__nonvisible} `}
        onClick={() => {
          setTodoTitle("");
          props.setVisible(false);
        }}
      >
        <div
          className={styles.modal_body}
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          {
            (!isTodoCreated) ? 
            <>
            <input
            type="text"
            placeholder="What you need todo?"
            value={todoTitle}
            className={`${styles.modal_input} ${(isInputValid) ? "" : styles.modal_input_invalid}`}
            onChange={(event) => {
              setTodoTitle(event.target.value);
              setIsInputValid(true);
              if (event.target.value.length < 3) {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                  setIsInputValid(false)
                }, 1500)
              } else {
                clearTimeout(timeout);
              }
            }}
          />
          <div className={styles.modal_button_container}>
            <button className="button-red" onClick={() => {
              setTodoTitle("");
              setIsInputValid(true);
              props.setVisible(false);
            }}>Cancel</button>
            <button
              className={`button-green ${(todoTitle.length < 3) ? "button-green--disabled" : ""}`}
              disabled={todoTitle.length < 3}
              onClick={() => {
              const todo : todosType = {
                userId: props.lastUserId,
                id: props.lastTodoId + 1,
                title: todoTitle,
                completed: false,
              }
              props.setLastTodoId(todo.id);
              setTodoCreated(true);
              setTodoTitle("");
  
              setTimeout(() => {
                props.setVisible(false);
                setTodoCreated(false);
              }, 3000)
  
            }}>Save</button>
          </div>
            </>
            :<>
              <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>checkmark-circle</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Icon-Set" transform="translate(-100.000000, -1139.000000)" fill="#00c800"> <path d="M122.027,1148.07 C121.548,1147.79 120.937,1147.96 120.661,1148.43 L114.266,1159.51 L110.688,1156.21 C110.31,1155.81 109.677,1155.79 109.274,1156.17 C108.871,1156.54 108.85,1157.18 109.228,1157.58 L113.8,1161.8 C114.177,1162.2 114.81,1162.22 115.213,1161.84 C115.335,1161.73 122.393,1149.43 122.393,1149.43 C122.669,1148.96 122.505,1148.34 122.027,1148.07 L122.027,1148.07 Z M116,1169 C108.268,1169 102,1162.73 102,1155 C102,1147.27 108.268,1141 116,1141 C123.732,1141 130,1147.27 130,1155 C130,1162.73 123.732,1169 116,1169 L116,1169 Z M116,1139 C107.164,1139 100,1146.16 100,1155 C100,1163.84 107.164,1171 116,1171 C124.836,1171 132,1163.84 132,1155 C132,1146.16 124.836,1139 116,1139 L116,1139 Z" id="checkmark-circle"> </path> </g> </g> </g></svg>
            </> 
          }
          
        </div>
      </div>
    )
  } else if (props.modalAction == ModalState.edit) {
    return(
      <div 
        className={`${styles.modal} ${styles.modal__backdrop} ${(props.isVisible) ? styles.modal__visible : styles.modal__nonvisible} `}
        onClick={() => {
          setTodoTitle("");
          props.setVisible(false);
        }}
      >
        <div
          className={styles.modal_body}
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          {
            (!isTodoCreated) ? 
            <>
            <input
            type="text"
            placeholder="What you need todo?"
            value={todoTitle}
            className={`${styles.modal_input} ${(isInputValid) ? "" : styles.modal_input_invalid}`}
            onChange={(event) => {
              setTodoTitle(event.target.value);
              setIsInputValid(true);
              if (event.target.value.length < 3) {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                  setIsInputValid(false)
                }, 1500)
              } else {
                clearTimeout(timeout);
              }
            }}
          />
          <div className={styles.modal_button_container}>
            <button className="button-red" onClick={() => {
              setTodoTitle("");
              setIsInputValid(true);
              props.setVisible(false);
            }}>Cancel</button>
            <button
              className={`button-green ${(todoTitle.length < 3) ? "button-green--disabled" : ""}`}
              disabled={todoTitle.length < 3}
              onClick={() => {
              const todo : todosType = {
                userId: props.lastUserId,
                id: props.lastTodoId + 1,
                title: todoTitle,
                completed: false,
              }
              props.setLastTodoId(todo.id);
              setTodoCreated(true);
              setTodoTitle("");
  
              setTimeout(() => {
                props.setVisible(false);
                setTodoCreated(false);
              }, 3000)
  
            }}>Save</button>
          </div>
            </>
            :<>
              <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>checkmark-circle</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Icon-Set" transform="translate(-100.000000, -1139.000000)" fill="#00c800"> <path d="M122.027,1148.07 C121.548,1147.79 120.937,1147.96 120.661,1148.43 L114.266,1159.51 L110.688,1156.21 C110.31,1155.81 109.677,1155.79 109.274,1156.17 C108.871,1156.54 108.85,1157.18 109.228,1157.58 L113.8,1161.8 C114.177,1162.2 114.81,1162.22 115.213,1161.84 C115.335,1161.73 122.393,1149.43 122.393,1149.43 C122.669,1148.96 122.505,1148.34 122.027,1148.07 L122.027,1148.07 Z M116,1169 C108.268,1169 102,1162.73 102,1155 C102,1147.27 108.268,1141 116,1141 C123.732,1141 130,1147.27 130,1155 C130,1162.73 123.732,1169 116,1169 L116,1169 Z M116,1139 C107.164,1139 100,1146.16 100,1155 C100,1163.84 107.164,1171 116,1171 C124.836,1171 132,1163.84 132,1155 C132,1146.16 124.836,1139 116,1139 L116,1139 Z" id="checkmark-circle"> </path> </g> </g> </g></svg>
            </> 
          }
          
        </div>
      </div>
    )
  } else if (props.modalAction == ModalState.delete) {

  }

  
}