'use client';

import { createContext, useContext } from 'react'
import { create } from 'zustand'

interface State {
  count: number
}

interface Action {
  increment: () => void
  decrement: () => void
}

interface Props {
  preloadedState: State
  children?: React.ReactNode
}

function createStore(
  preloadedState: State
) {
  return create<State & Action>((set) => ({
    ...preloadedState,

    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
  }))
}

const Context = createContext<ReturnType<typeof createStore> | null>(null)

export function useStore() {
  const context = useContext(Context)

  if (!context) throw new Error('Cannot find Provider');

  return context
}

export default function Provider({ preloadedState, children }: Props) {
  const store = createStore(preloadedState)

  return (
    <Context.Provider value={store}>
      {children}
    </Context.Provider>
  )
}
