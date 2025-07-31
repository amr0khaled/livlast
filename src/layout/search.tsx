import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronsUpDownIcon } from "lucide-react"
import { useEffect, useState } from "react"
import './style/search.css'
import type { ShopItemType } from "@/components/shop-item"
import ShopItem from "@/components/shop-item"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"

let items: ShopItemType[] = [
  {
    title: "Card 1",
    img: '/assets/images/card-1.jpg',
    location: "Texas",
    price: 5000,
    beds: 2,
    baths: 2,
    size: 1200
  },
  {
    title: "Card 2",
    img: '/assets/images/card-2.jpg',
    location: "Texas",
    price: 5000,
    beds: 2,
    baths: 2,
    size: 1200
  },
  {
    title: "Card 3",
    img: '/assets/images/card-3.jpg',
    location: "Texas",
    price: 5000,
    beds: 2,
    baths: 2,
    size: 1200
  },
  {
    title: "Card 4",
    img: '/assets/images/card-4.jpg',
    location: "Texas",
    price: 5000,
    beds: 2,
    baths: 2,
    size: 1200
  },
  {
    title: "Card 5",
    img: '/assets/images/card-5.jpg',
    location: "Texas",
    price: 5000,
    beds: 2,
    baths: 2,
    size: 1200
  },
  {
    title: "Card 6",
    img: '/assets/images/card-6.jpg',
    location: "Texas",
    price: 5000,
    beds: 2,
    baths: 2,
    size: 1200
  },
  {
    title: "Card 7",
    img: '/assets/images/card-7.jpg',
    location: "Texas",
    price: 5000,
    beds: 2,
    baths: 2,
    size: 1200
  },
  {
    title: "Card 8",
    img: '/assets/images/card-8.jpg',
    location: "Texas",
    price: 5000,
    beds: 2,
    baths: 2,
    size: 1200
  },
]
const max = items.length * 4

if (items.length < max) {
  for (let i = 0; i < (max / items.length); i++) {
    items = items.concat(...items)
  }
}

export default function Search() {
  const [shopItems] = useState<ShopItemType[]>(items)
  const [paginationIndex, setPaginationIndex] = useState(1)
  const [maxPaginationIndex, setMaxPaginationIndex] = useState(12)
  useEffect(() => {
    setMaxPaginationIndex(Math.ceil(shopItems.length / 9))
  }, [shopItems.length])

  const prevPagination = () => {
    if (paginationIndex !== 1) {
      setPaginationIndex(e => e - 1)
    }
  }
  const nextPagination = () => {
    if (paginationIndex !== maxPaginationIndex) {
      setPaginationIndex(e => e + 1)
    }
  }
  const selectPagination = (num: number) => {
    console.log(num)
    if (num <= maxPaginationIndex
      && num >= 1)
      setPaginationIndex(num)
  }


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
          Showing <span className='search-results'>
            {(paginationIndex - 1) * 9}-{
              paginationIndex * 9 > maxPaginationIndex * 8
                ? maxPaginationIndex * 8
                : paginationIndex * 9
            }
          </span> of total {maxPaginationIndex * 8} results
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
      <section className='search-items'>
        {shopItems.slice(
          (paginationIndex - 1) * 9,
          paginationIndex * 9 > maxPaginationIndex * 8
            ? maxPaginationIndex * 8
            : paginationIndex * 9).map((e, i) => <ShopItem key={i} item={e} />)}
      </section>
      <section className='search-pagination'>
        <Pagination className=''>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={prevPagination} />
            </PaginationItem>
            {paginationIndex !== 1 &&
              <PaginationItem>
                <PaginationLink
                  onClick={() =>
                    selectPagination(paginationIndex - 1)}>
                  {paginationIndex - 1}
                </PaginationLink>
              </PaginationItem>}
            <PaginationItem>
              <PaginationLink isActive>
                {paginationIndex}
              </PaginationLink>
            </PaginationItem>
            {paginationIndex !== maxPaginationIndex &&
              <PaginationItem>
                <PaginationLink
                  onClick={() =>
                    selectPagination(paginationIndex + 1)}>
                  {paginationIndex + 1}
                </PaginationLink>
              </PaginationItem>}
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              {paginationIndex + 5 < maxPaginationIndex &&
                <PaginationItem>
                  <PaginationLink
                    onClick={() =>
                      selectPagination(paginationIndex + 5)}>
                    {paginationIndex + 5}
                  </PaginationLink>
                </PaginationItem>}
            </PaginationItem>
            <PaginationItem>
              <PaginationNext onClick={nextPagination} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
    </main>
  </section>
}
