import Image from 'next/image'
import Product from './components/Product'


const products: Product[] =[
  {
    id:"1",
    name:"Go Pro",
    price:75,
    quantity: 0,
  },
  {
    id:"2",
    name:"TV",
    price:200,
    quantity: 0,
  },
  {
    id:"3",
    name:"Bag",
    price:40,
    quantity: 0,
  }
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex flex-col gap-8'>
        <h1 className='text-3xl'>E-commerce Cart app</h1>
        <div className='grid grid-cols-3 gap-4'>
          {products.map((product) =>(
            <Product key={product.id} product={product}  />
          ))}
        </div>
      </div>
    </main>
  )
}
