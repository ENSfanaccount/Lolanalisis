import "@/styles/globals.css"

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

