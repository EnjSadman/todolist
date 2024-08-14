"use client"

import Image from "next/image";
import styles from "./page.module.css";
import dataFetcher from "./Components/dataFetcher/dataFetcher";
import { fetchMethods, fetchType, todosType } from "@/lib/types";
import { useEffect, useState } from "react";
import StoreProvider from "./Components/storeProvider/storeProvider";
import SingleTodo from "./Components/singleTodo/singleTodo";
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const [todos, setTodos] = useState<todosType[]>([]);

  const fetchData = async () => {
    let result  = await dataFetcher({
      type: fetchType.todos,
      method: fetchMethods.get
    }).then(async res => {
      const response : todosType[] = await res?.json()
      setTodos(response);
    })
  } 
  useEffect (() => {
    fetchData();
    console.log(fetchData());
  }, [])
  return (
    <main className={styles.main}>
      <StoreProvider todos={todos}>
        <div>
          
        </div>
        <div>
          <button>
            add todo
          </button>
        </div>
        <div className={`${styles.container, styles.todos__container}`}>
        {todos.map(el => {
          return(<SingleTodo key={uuidv4()} props={el} />)     
        })} 
        </div>
      </StoreProvider>
    </main>
  );
}
