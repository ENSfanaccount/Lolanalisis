import "@/styles/globals.css"
import '../styles/home.css'
import '../styles/informations.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

{
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

