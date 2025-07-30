import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronsUpDownIcon } from "lucide-react"
import { useState } from "react"
import './style/search.css'


export default function Search() {

  const [uiSelectOptions] = useState([
    'Flat',
    'Ville',
    'Building',
    'Mansion'
  ])
  const [selectedType, setSelectedType] = useState('')

  const [uiSearchFilter] = useState<{ [key: string]: string }>({
    popular: "Most Popular",
    rate: "Top Rated"
  })
  const [searchFilter, setSearchFilter] = useState('popular')
  return <section className='search'>
    <header className='search-header'>
      <section className='search-section'>
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
    </header>
    <main className='search-main'>
      <div className='search-bar'>
        <span className='search-status'>
          Showing <span className='search-results'>1-9</span> of total { } results
        </span>
        <Select onValueChange={e => setSearchFilter(e)}>
          <SelectTrigger>
            <SelectValue
              placeholder={uiSearchFilter[searchFilter]} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='popular'>Most Popular</SelectItem>
            <SelectItem value='rate'>Top Rated</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </main>
  </section>
}
