import { CategorySidebar } from './CategorySidebar'
import { HeroContent } from './HeroContent'
import { LogoTicker1 } from "./LogoTicker1"
import { LogoTicker2 } from "./LogoTicker2"

const Hero = () => { 
  return (
    <div className='container mx-auto w-full my-4 '>
    <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-[300px_1fr] gap-4 p-4 lg:p-0'>
      <CategorySidebar />
      <HeroContent />
    </div>
     <div className='container mx-auto w-full my-4 '>
      <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-[600px_1fr] gap-4 p-4 lg:p-0 mt-4'>
       <LogoTicker1 />
       <LogoTicker2 />
      </div>
     </div>

    </div>
  )
}

export default Hero