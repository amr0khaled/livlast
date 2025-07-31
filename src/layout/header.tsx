import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu'
import './style/header.css'
import { useState } from 'react'

export default function Header() {
  const [items] = useState([
    'Home',
    'Search',
    'Log in',
    'Join us'
  ])
  const [hrefs] = useState<{ [key: string]: string }>({
    home: '#home',
    search: '#search',
    login: '#',
    joinus: '#'
  })
  return <header className='header'>
    <div className='navbar'>
      <span className='logo'>Livlast</span>
      <NavigationMenu>
        <NavigationMenuList>
          {items.map((e, i) => <NavigationMenuItem key={i}>
            <NavigationMenuLink asChild>
              <a
                href={hrefs[
                  e.toLowerCase().split(' ').join('')
                ]}
                className={`nav-link ${items.length - 1 === i ? 'join' : ''}`}>{e}</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </header>
}
