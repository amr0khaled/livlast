import { useEffect } from 'react'
import Footer from './layout/footer'
import Header from './layout/header'
import Hero from './layout/hero'
import Search from './layout/search'

function App() {
  useEffect(() => {
    const list = document.documentElement.classList
    if (!list.contains('scroll-smooth')) {
      list.add('scroll-smooth')
    }
  }, [])
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Search />
        <Footer />
      </main>
    </>
  )
}

export default App
