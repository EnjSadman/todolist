"use client"

import { fetchMethods, fetchType, todosType } from "@/lib/types"
import styles from "./singleTodo.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateStatus } from "@/lib/features/todos/todosSlice";
import dataFetcher from "../dataFetcher/dataFetcher";

interface Props {
  props: todosType
}

function completion(props : todosType) {
  const [isChecked, setChecked] = useState(props.completed);
  const dispatch = useDispatch();
  if (isChecked) {
    return (

      <div className="">
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

      <div className="">
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

export default function SingleTodo({props} : Props) {
  return (
    <div className={styles.todo}>
      <div className={styles.todo__info}>
        <p className={styles.todo__info__username}>User {props.userId}</p>
        <p className="">{props.title}</p>
      </div>
      <div className={styles.todo__status}>
        {
          (props.completed) ? completion(props) : completion(props)
        }
      </div>
    </div>
  )
}