"use client"

import styles from "./page.module.css";
import dataFetcher from "./Components/dataFetcher/dataFetcher";
import { fetchMethods, fetchType, todosType } from "@/lib/types";
import { useEffect, useState } from "react";
import SingleTodo from "./Components/singleTodo/singleTodo";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { initializeTodos } from "@/lib/features/todos/todosSlice";

export default function Home() {
  const todos = useSelector((state : RootState) => state.todos.todos);
  const dispatch = useDispatch();
  //const [todosList, setTodosList] = useState<>([]);

  const fetchData = async () => {
    let result  = await dataFetcher({
      type: fetchType.todos,
      method: fetchMethods.get
    }).then(async res => {
      const response : todosType[] = await res?.json()
      dispatch(initializeTodos(response));
    })
  } 
  useEffect (() => {
    fetchData();
  }, []);

  return (
    <main className={styles.main}>
        <div>

        </div>
        <div>
          <button>
            add todo
          </button>
        </div>
        <div className={`${styles.container, styles.todos__container}`}>
        {  todos.map(el => {
          return(<SingleTodo key={uuidv4()} props={el} />)     
        })   }
        </div>
    </main>
  );
}
