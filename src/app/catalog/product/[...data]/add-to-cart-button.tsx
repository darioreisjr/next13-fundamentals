'use client'

import { ReactNode, useState } from 'react'

export function AddToCartButton({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0)

  function addToCart() {
    setCount((state) => state + 1)
  }

  return (
    <div>
      <button className="btn bg-color-red" onClick={addToCart}>
        Adicionar ao carrinho ({count})
      </button>
      {children}
    </div>
  )
}

// Client Boundaries
