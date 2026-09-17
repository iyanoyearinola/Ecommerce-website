import Image from "next/image";

export const BestSeller = () => {
  return (
    <div className=" border rounded-lg border-white bg-white ">
      <div className="flex justify-between items-center px-3 ">
        {/* Left Tabs */}
        <div className="flex gap-10 text-sm mt-6">
          <span className="font-bold text-lg border-teal-500 pb-1">
            BEST SELLER
          </span>

          <span className="text-gray-500 text-lg">NEW IN</span>

          <span className="text-gray-500 text-lg">POPULAR</span>
        </div>
        {/* Right */}
        <span className="text-xs text-gray-500 ">View All</span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-5 gap-4 mt-6 px-8">
        {/* Product Card */}
        <div className=" rounded p-3">
          {/* Image */}
          <div className="flex justify-center ">
            <Image
              src="/brands/headphones.png"
              alt="headphones"
              width={192}
              height={199}
            />
          </div>
           <div className=" h-px w-ful top-2 bg-gray-100 mb-5"></div>
          <p className="text-[10px] pl-15 text-gray-400 mb-2">(152)</p>
          {/* Title */}
          <p className="text-black font-bold mb-3">
            Bose 2 Wireless On Ear Headphones
          </p>

          {/* Price */}
          <p className="font-bold text-black mb-5">$359.00</p>

          {/* Tags */}
          <div className="flex gap-2 mt-2">
            <span className="text-[10px] text-[#01A49E]  bg-[#e3f5f4] px-2 py-1 rounded">
              FREE SHIPPING
            </span>
            <span className="text-[10px] text-[#01A49E]  bg-[#e3f5f4] px-2 py-1 rounded">
              FREE GIFT
            </span>
          </div>
          <p className="flex text-[13px] gap-1 mt-2">
            <Image src={"/Symbol.svg"} alt="Symbol" width={10} height={10} />
            In stock
          </p>
          <div className="flex gap-2 mt-2">
            <Image
              src="/brands/smallheadset.png"
              alt="smallheadset"
              width={40}
              height={40}
            />
            <Image
              src="/brands/blackheadset.png"
              alt="blackheadset"
              width={40}
              height={40}
            />
          </div>
        </div>

        {/* product card 2 */}
        <div className="relative">
          <div className="absolute top-0 left-5 bg-teal-500 text-white text-[10px] px-2 py-2  rounded">
            SAVE $199.00
          </div>

          <div className="flex justify-center mb-5 mt-3">
            <Image
              src="/brands/tablet.png"
              alt="tablet"
              width={192}
              height={199}
            />
          </div>

          <p className="text-[10px] pl-15 text-gray-400 mb-2">(152)</p>

          <p className="text-black font-bold mb-3">
            OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS
          </p>

          <div className="flex gap-2 items-center mt-1">
            <p className="font-bold text-[#01A49E] mb-2">$569.00</p>
            <span className="text-[10px] line-through text-gray-400">
              $759.00
            </span>
          </div>

          <div className="mt-2">
            <span className="text-[10px] text-[#01A49E]  bg-[#e3f5f4] px-2 py-1 rounded">
              FREE SHIPPING
            </span>
          </div>

          <p className="text-[13px] flex gap-1 mt-2">
            <Image src={"/Symbol.svg"} alt="Symbol" width={10} height={10} />
            In stock
          </p>
        </div>

        {/* product card 3 */}
        <div className="relative">
          <div className="absolute top-0 left-5 bg-teal-500 text-white text-[10px] px-2 py-2  rounded">
            SAVE $59.00
          </div>

          <div className="flex justify-center mb-5 mt-3">
            <Image
              src="/brands/modem.png"
              alt="modem"
              width={192}
              height={199}
            />
          </div>

          <p className="text-[10px] pl-15 text-gray-400 mb-2 ">(8)</p>

          <p className="text-black font-bold mb-3">
            uLosk Mini case 2.0, Xenon i10 / 32GB / SSD 512GB / VGA 8GB
          </p>

          <div className="flex gap-2 items-center mt-1">
            <p className="font-bold text-[#01A49E] mb-1">$1,729.00</p>
            <span className="text-[10px] line-through text-gray-400 ">
              $1,729.00
            </span>
          </div>

          <div className="mt-2">
            <span className="text-[10px] text-[#01A49E]  bg-[#e3f5f4] px-2 py-1 rounded">
              FREE SHIPPING
            </span>
          </div>

          <p className="text-[13px] flex gap-1 mt-2">
            <Image src={"/xsymbol.svg"} alt="xsymbol" width={10} height={10} />
            In stock
          </p>
        </div>

        {/* product card 4 */}
        <div>
          <div>
            <div className="flex justify-center mb-8 mt-3">
              <Image
                src="/brands/wristwatch.png"
                alt="wristwatch"
                width={192}
                height={200}
              />
            </div>

            <p className="text-black font-bold mb-3 ">
              Opplo Watch Series 8 GPS + Cellular Stainless Steel Case with
              Milanese Loop
            </p>

            <p className="text-black font-bold mt-3 mb-3">
              $979.00 - $1,259.00
            </p>
            <div className="mt-2 mb-3">
              <span className="text-[10px] text-black bg-gray-200 px-2 py-1 rounded">
                $2.98 SHIPPING
              </span>
            </div>
            <p className="text-[13px] text-black mt-1">PRE - ORDER</p>
          </div>
        </div>

        {/* product 5 */}
        <div className="relative">
          <div className="absolute top-0 left-6 bg-teal-500 text-white text-[10px] px-2 py-1 rounded">
            SAVE $3.00
          </div>

          <div className="flex justify-center mb-3 mt-3">
            <Image
              src="/brands/chargerhead.png"
              alt="chargerhead"
              width={192}
              height={192}
            />
          </div>

          <p className=" text-center text-[10px] text-gray-400 mb-3 ">(9)</p>

          <p className="px-4 text-black font-bold">iSmart 24V Charger</p>

          <div className="px-4 flex gap-1 items-center mt-3 mb-5">
            <p className="text- text-[#01A49E] font-semibold">$9.00</p>
            <span className="text-[12px] line-through text-gray-400">
              $12.00
            </span>
          </div>
          <div className="px-5 mb-3">
            <span className="text-[10px] text-black bg-gray-200 px-3 py-1 rounded">
              $3.98 SHIPPING
            </span>
          </div>
          <p className="px-8 text-[13px] text-black mt-1">Contact</p>
        </div>
      </div>
    </div>
  );
};

// export default BestSeller
