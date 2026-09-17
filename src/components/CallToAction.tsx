import { Luxury } from "./Luxury"
import { Download } from "./Download"

const CallToAction = () => {
  return (
    <div className="container mx-auto w-full my-4">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Luxury />
        <Download />
      </div>
    </div>
  )
}

export default CallToAction