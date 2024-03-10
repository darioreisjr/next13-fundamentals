export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulate loading time.

  const response = await fetch('https://api.github.com/users/darioreisjr')
  const user = await response.json()

  return <pre>{JSON.stringify(user, null, 2)}</pre>
}
