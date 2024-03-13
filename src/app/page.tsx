import { Suspense } from 'react'

import { GithubProfile } from './components/github-profile'
import { LongWaitComponent } from './components/long-wait-component'

export default async function Home() {
  // Simulate loading time.
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return (
    <div>
      <h1>Home!</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis provident sit voluptatem, harum tenetur vel repellat corporis quia dolorem, sapiente reprehenderit, aspernatur numquam. Deleniti facilis magnam ullam aperiam perspiciatis delectus?
      </p>

      <Suspense fallback={<p>Carregando LongWaitComponent</p>}>
        <LongWaitComponent />
      </Suspense>

      <Suspense fallback={<p>Carregando GithubProfile</p>}>
        <GithubProfile />
      </Suspense>
    </div>
  )
}
