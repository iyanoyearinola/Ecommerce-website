import Image from "next/image";

export const Brand = () => {
  return (
    <div className="container w-full  mx-auto">
     <div className=" bg-white p-4 rounded-lg mb-3">
         <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold">
              BRAND NEW FOR YOU
            </h2>

            {/* small icon */}
            <div className="flex gap-1">
              <Image
                src="/images/div-arrows.png"
                alt="div arrows"
                height={30}
                width={70}
              />
           </div>
         </div>
                 {/* Cards Grid */}
          <div className="grid grid-cols-4 gap-4">
              
              {/* Card 1 */}
              <div>
                    {/* Image */}
                <div className="w-full h-35 mb-2 relative mt-6 border-radius-10">
                  <Image
                    src="/products/speaker.png"
                    alt="speaker"
                    height={230}
                    width={302}
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="mt-25">
                  
                  {/* Title */}
                  <h3 className="font-bold mb-3">
                    Zumac Steel Computer Case
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 mb-5">
                    And an option to upgrade every three years
                  </p>

                  {/* Button */}
                  <button className="text-xs border border-teal-500 text-teal-600 px-6 py-2 rounded">
                    SHOP NOW
                  </button>

                </div>

              </div>

              {/* Card 2 */}
              <div>
                <div className="w-full h-35 mb-2 relative mt-6 border-radius-10">
                  <Image
                    src="/products/smartTV.png"
                    alt="smart TV"
                    height={230}
                    width={302}
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="mt-25">
                  
                  {/* Title */}
                  <h3 className="font-bold mb-3">
                    Summer Sale with Sale up to 50% OFF for SmartTV.
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 mb-5">
                    Limited time offer. Hurry up
                  </p>

                  {/* Button */}
                  <button className="text-xs border border-teal-500 text-teal-600 px-6 py-2 rounded">
                    SHOP NOW
                  </button>

                </div>
              </div>

              {/* Card 3 */}
              <div>
                <div className="w-full h-35 mb-2 relative mt-6 border-radius-10">
                  <Image
                    src="/products/chair.png"
                    alt="chair"
                    height={230}
                    width={302}
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="mt-25">
                  
                  {/* Title */}
                  <h3 className="font-bold mb-3">
                    Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 mb-5">
                    Limited time offer. Hurry up
                  </p>

                  {/* Button */}
                  <button className="text-xs border border-teal-500 text-teal-600 px-6 py-2 rounded">
                    SHOP NOW
                  </button>

                </div>
              </div>

              {/* Card 4 */}
              <div>
                <div className="w-full h-35 mb-2 relative mt-6 border-radius-10">
                  <Image
                    src="/products/ipad.png"
                    alt="ipad"
                    height={230}
                    width={302}
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="mt-25">
                  
                  {/* Title */}
                  <h3 className="font-bold mb-3">
                   iPed Pro Mini 6 - Powerful l in hand
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                    From $19.99/month for 36 months. $280.35 final payment due in month 37
                  </p>

                  {/* Button */}
                  <button className="text-xs border border-teal-500 text-teal-600 px-6 py-2 rounded">
                    SHOP NOW
                  </button>

                </div>
              </div>
            </div>

     </div>
   </div>
  )
}

export default Brand