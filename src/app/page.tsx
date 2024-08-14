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
    <main className="main">
      <StoreProvider todos={todos}>
        <div className="todo__container container"></div>
        {todos.map(el => {
          //console.log
          return(<SingleTodo key={uuidv4()} props={el} />)
          
        })} 
      </StoreProvider>
    </main>
  );
}
