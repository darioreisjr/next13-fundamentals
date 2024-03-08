'use client'

interface ProductProps {
  params: {
    data: string[]
  }
}

export default function Product({ params }: ProductProps) {
  const [productId, size, color] = params.data
  return (
    <div>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      <button className="btn bg-color-red" onClick={() => alert('Add to cart')}>
        Adicionar ao carrinho
      </button>
    </div>
  )
}
