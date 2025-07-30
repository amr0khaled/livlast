
import { Button } from '@/components/ui/button'
import './style/hero.css'
import { ChevronsUpDownIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select'
import { SelectItem } from '@radix-ui/react-select'
import { useState } from 'react'
export default function Hero() {
  const [uiSelectOptions] = useState([
    'Flat',
    'Ville',
    'Building',
    'Mansion'
  ])
  const [selectedType, setSelectedType] = useState('')
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
    <footer className='hero-footer'>
      <section className='hero-search'>
        <div className='search-row gap-0'>
          <Input className='w-50 rounded-e-none' type='text' placeholder='Enter address' />
          <Input className='w-50 rounded-e-none rounded-s-none' type='text' placeholder='Location' />
          <Select value={selectedType} onValueChange={e => setSelectedType(e)}>
            <SelectTrigger className='w-50 rounded-s-none'>
              <SelectValue placeholder='Property Type' />
            </SelectTrigger>
            <SelectContent>
              {uiSelectOptions.map((e, i) =>
                <SelectItem key={i} value={e.toLowerCase()}>
                  {e}
                </SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>
        <div className='search-row'>
          <Button>
            Search Property
          </Button>
          <Button variant='outline'>
            <ChevronsUpDownIcon />Advanced Search
          </Button>
        </div>
      </section>
    </footer>
  </section>
}
