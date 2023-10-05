import Image from 'next/image'
import HeroSection from './components/HeroSection'

export default function Home() {
  return (
    <main>
     <HeroSection title="LET'S WATCH MOVIE TOGETHER" imageUrl="/hero.svg"/>
    </main>
  )
}
