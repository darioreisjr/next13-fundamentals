export default async function Catalog() {
  await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulate loading time.

  return <h1>Catalog</h1>
}
