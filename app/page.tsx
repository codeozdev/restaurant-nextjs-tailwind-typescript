import Featured from '@/components/Featured'
import Offer from '@/components/Offer'
import Slider from '@/components/Slider'

export default function Home() {
  return (
    <main className='text-4xl text-green-500'>
      <Slider />
      <Featured />
      <Offer />
    </main>
  )
}
