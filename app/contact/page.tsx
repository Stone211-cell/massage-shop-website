import { BannerTime } from "@/components/Header/Banner"
import MapDetail from "../../components/Contacted/MapDetail"

const page = () => {
  return (
    <div>
      
      <div>
        <MapDetail />
      </div>

      <div>
        <BannerTime
                  bgsrc=
                    "/Imgs/HomeImg/907b43_f73122ce29a749c4a0500af848e24ace~mv2.avif"
                  
                  text="OPENING HOURS"
                
                />
      </div>
    </div>
  )
}
export default page