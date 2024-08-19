"use client"

import styles from "./page.module.css";
import dataFetcher from "./Components/dataFetcher/dataFetcher";
import { fetchMethods, fetchType, ModalState, todosType } from "@/lib/types";
import { useEffect, useState } from "react";
import SingleTodo from "./Components/singleTodo/singleTodo";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { initializeTodos } from "@/lib/features/todos/todosSlice";
import Modal from "./Components/modal/modal";

export default function Home() {
  const todos = useSelector((state : RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalState, setModalState] = useState<ModalState>(ModalState.new);

  const [editedTodo, setEditedTodo] = useState<todosType>(
    {
      id: 0,
      userId: 0,
      title: "",
      completed: false,
    }
  );

  const [lastTodoId, setLastTodoId] = useState(0);
  const [lastUserId, setLastUserId] = useState(0);

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

  useEffect (() => {
    setLastTodoId(Math.max(...todos.map(el => el.id)));
    if (lastUserId == 0 || lastUserId < 0) {
      setLastUserId(Math.max(...todos.map(el => el.userId)))
    }
  }, [todos, lastUserId]);

  return (
    <main className={`${styles.main} ${(isModalVisible) ? styles.no_owerflow : styles.overflow}`}>
      <Modal
        modalAction={modalState}
        todoToEdit={editedTodo}
        isVisible={isModalVisible}
        setVisible={setIsModalVisible}
        lastUserId={lastUserId}
        lastTodoId={lastTodoId}
        setLastTodoId={setLastTodoId}
      />
      <div className={styles.search_bar}>
        <div className={styles.search_container}>
          <input placeholder="Search" type="text" className={styles.search_input} onChange={(event) => {
            setSearch(event.target.value);
          }} value={search}/>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#888888"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div>
        <button
          className="button-plain"
           onClick={() => {
            setIsModalVisible(true);
            setModalState(ModalState.new)
          }}>
            add todo
          </button>
      </div>
        
        <div className={`${styles.container, styles.todos__container}`}>
        {  todos.filter(todo => todo.title.includes(search)).map(el => {
          return(<SingleTodo
              key={uuidv4()}
              todo={el}
              todoEditor={setEditedTodo}
              setVisible={setIsModalVisible}
              modalAction={setModalState}
              />)     
        })   }
        </div>
    </main>
  );
}
