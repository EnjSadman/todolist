"use client"

import { todosType } from "@/lib/types"
import "./singleTodo.css";

interface Props {
  props: todosType
}

export default function SingleTodo({props} : Props) {
  return (
    <div className="todo">
      <p>{props.title}</p>

    </div>
  )
}