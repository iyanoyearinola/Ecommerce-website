import { Subdeal } from "./Subdeal"
import { BrandDeals } from "./BrandDeals"
import { PreOrder } from "./PreOrder"
import { BestSeller } from "./BestSeller"

 const TopDeal = () => {
  return (
    <div className="container mx-auto w-full my-6 ">
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-[970px_1fr] gap-4 p-4 lg:p-0 mt-4">
        <Subdeal />
        <BrandDeals />
      </div>
      <div>
        <PreOrder />
        <BestSeller />
      </div>
    </div>
  )
}

export default TopDeal