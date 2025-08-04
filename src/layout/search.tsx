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
    title: "Modern townhouse white theme",
    img: '/assets/images/card-1.jpg',
    location: "San Jose, California",
    price: 3_000_000,
    beds: 2,
    baths: 2,
    size: 3400
  },
  {
    title: "Small classic village house",
    img: '/assets/images/card-2.jpg',
    location: "Salt Lake City, Utah",
    price: 2_400_000,
    beds: 2,
    baths: 2,
    size: 1800
  },
  {
    title: "Downtown modern house with wooden theme",
    img: '/assets/images/card-3.jpg',
    location: "San Fransisco, California",
    price: 2_800_000,
    beds: 2,
    baths: 2,
    size: 2400
  },
  {
    title: "Decorated white townhouse",
    img: '/assets/images/card-4.jpg',
    location: "Los Angeles, California",
    price: 3_00_000,
    beds: 4,
    baths: 3,
    size: 2500
  },
  {
    title: "Comfy residential house",
    img: '/assets/images/card-5.jpg',
    location: "Queens, New York",
    price: 1_200_000,
    beds: 3,
    baths: 2,
    size: 2100
  },
  {
    title: "Small wooden house",
    img: '/assets/images/card-6.jpg',
    location: "Phoenix, Arizona",
    price: 20,
    beds: 1,
    baths: 1,
    size: 0.5
  },
  {
    title: "Stylish modern house",
    img: '/assets/images/card-7.jpg',
    location: "Miami, Florida",
    price: 800_000,
    beds: 3,
    baths: 1,
    size: 1200
  },
  {
    title: "Silver-themed modern house",
    img: '/assets/images/card-8.jpg',
    location: "Austin, Texas",
    price: 3_800_000,
    beds: 4,
    baths: 2,
    size: 3800
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
    <header className='search-header' id='search'>
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
            {paginationIndex + 5 < maxPaginationIndex &&
              <PaginationItem>
                <PaginationLink
                  onClick={() =>
                    selectPagination(paginationIndex + 5)}>
                  {paginationIndex + 5}
                </PaginationLink>
              </PaginationItem>}
            <PaginationItem>
              <PaginationNext onClick={nextPagination} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
    </main>
  </section>
}
