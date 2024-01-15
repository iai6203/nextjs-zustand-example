'use client'

import React from 'react'

import { useStore } from '../_providers/count-provider'

export default function CountController() {
  const { increment, decrement } = useStore()(state => ({
    increment: state.increment,
    decrement: state.decrement,
  }))

  return (
    <div className="flex justify-center gap-x-4">
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={increment}>INCREMENT</button>
    </div>
  )
}
