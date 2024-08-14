"use client"

import { todosType } from "@/lib/types"
import styles from "./singleTodo.module.css";
import { useState } from "react";

interface Props {
  props: todosType
}

function completion(arg : boolean) {
  const [isChecked, setChecked] = useState(arg)
  if (isChecked) {
    return (

      <div className="">
        <p className={styles.completed}>completed</p>
        <input type="checkbox" checked={isChecked} onClick={(event) => {
          setChecked(!isChecked);
        }}/>
      </div>
    )
  } else {
    return (

      <div className="">
        <p className={styles.notcompleted}>not completed</p>
        <input type="checkbox" checked={isChecked} onClick={(event) => {
          setChecked(!isChecked);
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
          (props.completed) ? completion(props.completed) : completion(props.completed)
        }
      </div>
    </div>
  )
}