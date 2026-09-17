import { Media } from "./Media"
import { Gaming } from "./Gaming" 
import { Equipment} from "./Equipment"

const MediaEquipments = () => {
  return (
    <div className="container mx-auto w-full mb-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <Media />
        <Gaming />
        <Equipment />
      </div>
    </div>
  )
}
export default MediaEquipments