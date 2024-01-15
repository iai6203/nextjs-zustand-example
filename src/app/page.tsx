import CountProvider from './_providers/count-provider'

import CountDisplay from './_components/count-display'
import CountController from './_components/count-controller'

export default function Home() {
  return (
    <>
      <CountProvider preloadedState={{ count: 0 }}>
        <CountDisplay />
        <CountController />
      </CountProvider>
    </>
  )
}
