import Image from 'next/image'

export const LogoTicker1 = () => {
  return (
    <div className='w-full h-full'>
      <div className='bg-white p-4 rounded-lg border border-gray-100'>

        {/* brands */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-sm">FEATURED BRANDS</h2>
            <span className="text-xs text-gray-500 cursor-pointer">View All</span>
          </div>
            <div className='grid grid-cols-5 gap-8 items-center mt-10'>
              <Image src="/logos/Logo1.png" alt='Logo 1' height={30} width={60} />
              <Image src="/logos/Logo2.png" alt='Logo 2' height={30} width={60} />
              <Image src="/logos/Logo3.png" alt='Logo 3' height={30} width={60} />
              <Image src="/logos/Logo4.png" alt='Logo 4' height={30} width={60} />
              <Image src="/logos/Logo5.png" alt='Logo 5' height={30} width={60} />

               <Image src="/logos/Logo6.png" alt='Logo 6' height={30} width={60} />
               <Image src="/logos/Logo7.png" alt='Logo 7' height={30} width={60} />
               <Image src="/logos/Logo8.png" alt='Logo 8' height={30} width={60} />
               <Image src="/logos/Logo9.png" alt='Logo 9' height={30} width={60} />
               <Image src="/logos/Logo10.png" alt='Logo 10' height={30} width={60} />
            </div>

      </div>
    </div>
  )
}

export default LogoTicker1