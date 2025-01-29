import "@/styles/globals.css"
import '../styles/home.css'
import '../styles/informations.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

import { SessionProvider } from "next-auth/react"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

