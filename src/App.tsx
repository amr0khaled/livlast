import ShopItem from './components/shop-item'
import Header from './layout/header'
import Hero from './layout/hero'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <ShopItem item={{
        title: "Title",
        img: '/assets/images/card-1.jpg',
        baths: 2,
        beds: 3,
        size: 1200,
        price: 5000,
        location: "Austin, Texas"
      }} />
    </>
  )
}

export default App
