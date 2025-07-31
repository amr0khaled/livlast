import { FaFacebookF, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { Button } from "@/components/ui/button"
import "./style/footer.css"


export default function Footer() {
  return <footer className='footer'>
    <header className='footer-header'>
      <h1 className='header-title'>
        Invest in real estate with<br />
        confidence
      </h1>
    </header>
    <main className='footer-main'>
      <section className='main-side'>
        <p className='quote'>
          Stay connected, explore opportunities, and invest with confidence. Your real estate success starts here.
        </p>
        <ul className='icons-list'>
          <li className='icons-items'>{[<FaFacebookF className='size-5' />, <FaInstagram className='size-5' />, <FaXTwitter className='size-5' />, <FaLinkedin className='size-5' />]
            .map((e, i) =>
              <Button size='icon' key={i}>
                {e}
              </Button>)}
          </li>
        </ul>
      </section>
      <aside className='footer-aside'>
        <ul className='aside-list'>
          {['Home', 'Services', 'Invest', 'Properties']
            .map((e, i) => <li className='aside-item' key={i}>
              <a>
                <Button className='font-medium text-lg text-primary-foreground' variant={'link'}>
                  {e}
                </Button>
              </a>
            </li>)}
        </ul>
        <ul className='aside-list'>
          {['About', 'Contact', 'Privacy Policy', 'Terms & Conditions']
            .map((e, i) => <li className='aside-item' key={i}>
              <a>
                <Button className='font-medium text-base text-primary-foreground' variant={'link'}>
                  {e}
                </Button>
              </a>
            </li>)}
        </ul>
      </aside>
    </main>
    <div className='footer-rights'>
      All Rights Reserved {new Date().getFullYear()}| Livlast
    </div>
    <div className='footer-logo'>
      <span className='logo'>
        LivLast
      </span>
    </div>
  </footer>
}
