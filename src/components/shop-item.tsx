import { Bath, Bed, MapPin, MoveDiagonal2 } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import './style/shop-item.css'

export interface ShopItemType {
  title: string
  img: string
  location: string
  size: number
  beds: number
  baths: number
  price: number
}

type Props = {
  item: ShopItemType
}

export default function ShopItem({ item }: Props) {
  return <section className='shop-item-card'>
    <main className='item-main'>
      <div className='item-image'>
        <img src={item.img} alt={item.title} />
      </div>
      <h3 className='item-title'>
        {item.title}
      </h3>
      <span className='item-location'>
        <MapPin />
        {item.location}
      </span>
      <span className='item-details'>
        <span className='item-info'>
          <MoveDiagonal2 />
          {item.size} sq. ft.
        </span>
        <Separator orientation="vertical" decorative />
        <span className='item-info'>
          <Bed />
          {item.beds} Bed
        </span>
        <Separator orientation="vertical" decorative />
        <span className='item-info'>
          <Bath />
          {item.baths} Bath
        </span>
      </span>
    </main>
    <footer className='item-footer'>
      <span className='item-price'>${item.price.toLocaleString('en-US')}</span>
      <Button className='item-invest' size='sm' variant={'outline'}>Invest now</Button>
    </footer>
  </section>
}
