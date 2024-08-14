"use client"

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '../../../lib/store';
import { todosType } from '@/lib/types';

export default function StoreProvider({
  children,
  todos,
}: {
  children: React.ReactNode
  todos: todosType[]
}) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    //storeRef.current.dispatch(initializeTodos(todos))
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}