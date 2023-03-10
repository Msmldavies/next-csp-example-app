import React, {useEffect} from "react"


export default function App({ Component, pageProps }) {

  useEffect(() => {
      console.log('running app useEffect');
  }, [])

  return <Component {...pageProps} />
}
