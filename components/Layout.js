import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = (props) => {

  return (

    <div>
      <Head>
        <title>{props.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Navbar transparent={true} />
      </header>
      <main>
        {props.children}
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Layout
