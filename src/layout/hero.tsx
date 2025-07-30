
import './style/hero.css'
export default function Hero() {
  return <section className='hero'>
    <main className='hero-main'>
      <img className='hero-img' src='/assets/images/hero-2.png' alt='' />
      <img className='hero-img' src='/assets/images/hero-3.png' alt='' />
      <section className='section-1'>
        <header>
          <h1>
            Find your perfect <br />
            investment properties
          </h1>
          <p>
            Explore a selection of high-value real estate opportunities<br />
            designed for financial growth and stability
          </p>
        </header>
      </section>
    </main>
  </section>
}
