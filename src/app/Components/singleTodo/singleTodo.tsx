"use client"

import { fetchMethods, fetchType, ModalState, todosType } from "@/lib/types"
import styles from "./singleTodo.module.css";
import { useDispatch } from "react-redux";
import { updateStatus } from "@/lib/features/todos/todosSlice";
import dataFetcher from "../dataFetcher/dataFetcher";
import { Dispatch, SetStateAction } from "react";

interface Props {
  todo: todosType;
  setVisible: Dispatch<SetStateAction<boolean>>;
  modalAction: Dispatch<SetStateAction<ModalState>>;
  todoEditor: Dispatch<SetStateAction<todosType>>;
}

function completion(props : todosType) {
  const isChecked = props.completed;
  const dispatch = useDispatch();
  if (isChecked) {
    return (

      <div className={styles.completion_box}>
        <p className={styles.completed}>completed</p>
        <input type="checkbox" checked={isChecked} onChange={(event) => {
          dataFetcher({
            method: fetchMethods.put,
            type: fetchType.todos,
            requestBody: {completed: !props.completed},
            id: props.id,
          })
          dispatch(updateStatus({
            id: props.id,
            userId: props.userId,
            title: props.title,
            completed: !props.completed
          }))
          
        }}/>
      </div>
    )
  } else {
    return (
      <div className={styles.completion_box}>
        <p className={styles.notcompleted}>not completed</p>
        <input type="checkbox" checked={isChecked} onChange={(event) => {
          dataFetcher({
            method: fetchMethods.put,
            type: fetchType.todos,
            requestBody: {completed: !props.completed},
            id: props.id,
          })
          dispatch(updateStatus({ 
            id: props.id,
            userId: props.userId,
            title: props.title,
            completed: !props.completed
          }))
        }}/>
      </div>
    )
  }
  
}

export default function SingleTodo(props : Props) {
  return (
    <div
     className={styles.todo}
     onClick={() => {
      props.setVisible(true);
      props.modalAction(ModalState.edit);
      props.todoEditor(props.todo);
     }}
    >
      <div className={styles.todo__info}>
        <p className={styles.todo__info__username}>User {props.todo.userId}</p>
        <p className="">{props.todo.title}</p>
      </div>
      <div className={styles.todo__status}>
        {
          (props.todo.completed) ? completion(props.todo) : completion(props.todo)
        }
        <div className={styles.deletion_box}
          onClick={(event) => {
            event.stopPropagation();
            props.setVisible(true);
            props.modalAction(ModalState.delete);
            props.todoEditor(props.todo);
          }}
        >
        <svg fill="#d80000" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" stroke="#d80000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M767 336H233q-12 0-21 9t-9 21l38 505q1 13 12 21.5t30 8.5h434q18 0 29-8.5t13-21.5l38-505q0-12-9-21t-21-9zM344 841q-10 0-18-9t-8-21l-26-386q0-12 9-20.5t21-8.5 21 8.5 9 20.5l18 386q0 12-7.5 21t-18.5 9zm182-31q0 13-7.5 22t-18.5 9-18.5-9-7.5-22l-4-385q0-12 9-20.5t21-8.5 21 8.5 9 20.5zm156 1q0 12-8 21t-18 9q-11 0-18.5-9t-7.5-21l18-386q0-12 9-20.5t21-8.5 21 8.5 9 20.5zm101-605l-179-30q-12-2-15-15l-8-33q-4-20-14-26-6-3-22-3h-90q-16 0-23 3-10 6-13 26l-8 33q-2 13-15 15l-179 30q-19 3-31.5 14.5T173 249v28q0 9 6.5 15t15.5 6h610q9 0 15.5-6t6.5-15v-28q0-17-12.5-28.5T783 206z"></path></g></svg>
        </div>
      </div>
    </div>
  )
}