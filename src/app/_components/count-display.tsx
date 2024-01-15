'use client'

import React from 'react'

import { useStore } from '../_providers/count-provider'

export default function CountDisplay() {
  const count = useStore()(state => state.count)

  return (
    <div className="py-10 flex justify-center">
      <span className="text-4xl font-extrabold">{count}</span>
    </div>
  )
}
