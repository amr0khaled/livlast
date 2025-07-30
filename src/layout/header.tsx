import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu'
import './style/header.css'
import { useState } from 'react'

export default function Header() {
  const [items] = useState([
    'Home',
    'About',
    'Contact Us',
    'Log in',
    'Join us'
  ])
  return <header className='header'>
    <div className='navbar'>
      <span className='logo'>Livlast</span>
      <NavigationMenu>
        <NavigationMenuList>
          {items.map((e, i) => <NavigationMenuItem key={i}>
            <NavigationMenuLink asChild>
              <a className={`nav-link ${items.length - 1 === i ? 'sign-up' : ''}`}>{e}</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </header>
}
