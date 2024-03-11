'use client'

import { useState } from 'react'

export function AddToCartButton() {
  const [count, setCount] = useState(0)

  function addToCart() {
    setCount((state) => state + 1)
  }

  return (
    <button className="btn bg-color-red" onClick={addToCart}>
      Adicionar ao carrinho ({count})
    </button>
  )
}
