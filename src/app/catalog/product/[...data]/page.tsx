import { AddToCartButton } from './add-to-cart-button'

interface ProductProps {
  params: {
    data: string[]
  }
}

// Server Components => A gente não USA Javascript no lado do cliente. Apenas do lado do servidor.
// Client Components => O JavaScript é enviado ao navegador (cliente)

// Streamig SSR => Ler/escrever dados de forma parcial + Server-side Rendering

// Renderizar um componente pelo lado do servidor de forma parcial

export default async function Product({ params }: ProductProps) {
  const response = await fetch('https://api.github.com/users/darioreisjr')
  const user = await response.json()

  const [productId, size, color] = params.data
  return (
    <div>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      <AddToCartButton />
    </div>
  )
}
