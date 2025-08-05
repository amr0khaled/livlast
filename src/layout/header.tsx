import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu'
import './style/header.css'
import { useEffect, useState } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Sling as Menu } from 'hamburger-react'

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
  const [currentWidth, setWidth] = useState(420)
  useEffect(() => {
    const resizeEvent = () => {
      setWidth(window.innerWidth)
    }
    resizeEvent()
    window.addEventListener('resize', resizeEvent)
    return () => {
      window.removeEventListener('resize', resizeEvent)
    }
  }, [])
  const [dropdownOpen, setOpen] = useState(false)
  return <header className='header'>
    <div className='navbar'>
      <span className='logo'>Livlast</span>
      {
        currentWidth > 420
          ? <NavigationMenu>
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
          : <DropdownMenu onOpenChange={v => setOpen(v)} defaultOpen={dropdownOpen}>
            <DropdownMenuTrigger className='focus-visible:outline-none'>
              <Menu direction="right" size={28} label='Show header dropdown menu' hideOutline={false} toggled={dropdownOpen} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {items.map((e, i) => <DropdownMenuItem>
                <a
                  href={hrefs[
                    e.toLowerCase().split(' ').join('')
                  ]}
                  className={`nav-link ${items.length - 1 === i ? 'join' : ''}`}>{e}</a>
              </DropdownMenuItem>)}
            </DropdownMenuContent>
          </DropdownMenu>

      }
    </div>
  </header>
}
