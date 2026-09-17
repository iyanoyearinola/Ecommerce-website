import Image from "next/image";

export const Device = () => {
  const categories = [
    { name: "iPhone (iOS)", items: "74 items", image: "/devices/iphone.png" },
    { name: "Android", items: "35 items", image: "/devices/android.png" },
    { name: "5gsupport", items: "12 items", image: "/devices/5gsupport.png" },
    { name: "gaming", items: "9 items", image: "/devices/gaming.png" },
    { name: "Xiaomi", items: "52 items", image: "/devices/xiaomi.png" },
    {
      name: "Accessories",
      items: "29 items",
      image: "/devices/accessories.png",
    },
  ];
  return (
    <div className="container w-full  border rounded-lg border-white  mx-auto  mb-3 bg-white">
      <div className="flex justify-between items-center mb-4 px-2 mt-5 ">
        <h2 className="font-bold">TOP CELLPHONES & TABLETS</h2>

        <span className="text-xs text-gray-500">View All</span>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4 items-stretch">
        {/* LEFT BANNER */}
        <div className="col-span-1 px-3">
          <div className="flex items-center bg-gray-100 relative rounded-lg overflow-hidden h-45 ">
            {/* Background Image */}
            <Image
              src="/devices/redmi.png"
              alt="redmi"
              height={300}
              width={640}
              className="object-contain  rounded-lg"
            />

            {/* Content */}
            <div className="absolute inset-0 flex items-center px-6">
              <div className="">
                {/* Title */}
                <h3 className="text-[24px] font-semibold text-gray-800 leading-tight mb-5">
                  REDMI NOTE <br /> 12 PRO+ 5G
                </h3>

                {/* Subtext */}
                <p className="text-xs text-gray-500 mt-1 mb-3">
                  Rise to the challenge
                </p>

                {/* Button */}
                <button className="mt-3 bg-black text-white text-xs px-4 py-1 rounded">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CATEGORIES */}
        <div className="grid grid-cols-3 grid-rows-3 gap-y-8 h-full mt-6 px-6 gap-6">
          {categories.map((item, index) => (
            <div key={index} className="flex items-center justify-between ">
              <div>
                <p className="text-xs font-medium">{item.name} </p>
                <span className="text-[10px] text-gray-400">{item.items}</span>
              </div>
              <Image src={item.image} alt={item.name} width={50} height={50} />
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-[#f8f8f8] "></div>
      {/* product grid */}
      <div className="relative mt-16">
        {/* LEFT BUTTON */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-2 z-10">
          <div className="bg-[#01A49E] border-white border rounded-full w-8 h-8 flex items-center justify-center shadow cursor-pointer text-white">
            ‹
          </div>
        </div>

        {/* RIGHT BUTTON */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
          <div className="bg-[#01A49E] border-white border rounded-full w-8 h-8 flex items-center justify-center shadow cursor-pointer text-white">
            ›
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-5 gap-12 px-20">
          <div className="relative">
            {/* SAVE BADGE */}
            <div className="absolute left-0 bg-teal-500 text-white text-[12px] px-0.5 py-3 rounded">
              SAVE $199.00
            </div>

            {/* PRODUCT IMAGE */}
            <div className="flex justify-center mt-6">
              <Image
                src="/devices/bigphone1.png"
                alt="Bigphone 1"
                width={192}
                height={200}
                className="object-contain"
              />
            </div>

            {/* DOT ABOVE (design detail) */}
            <div className="absolute top-2 right-0 w-6 h-6 bg-gray-300 rounded-full"></div>

            {/* TEXT SECTION */}
            <div className="mt-3">
              <div className="w-full h-px mb-3 bg-gray-200 mt-3"></div>
              {/* Reviews */}
              <p className="text-[10px] text-gray-400 text-center">(152)</p>

              {/* Title */}
              <h3 className="text-xs mt-1 leading-tight font-bold">
                SROK Smart Phone 128GB, OLED Retina
              </h3>

              {/* Price */}
              <div className=" mt-4">
                <span className="text-teal-600 font-bold ">$579.00</span>
                <span className="text-gray-400 line-through text-sm ml-1">
                  $859.00
                </span>
              </div>

              {/* Tags */}
              <div className="flex gap-2 mt-3">
                <span className="text-[10px] text-[#01A49E] bg-[#e3f5f4] px-2 py-1 rounded">
                  FREE SHIPPING
                </span>
              </div>

              {/* Stock */}
              <div className="flex text-[13px] gap-1 mt-1">
                <Image
                  src={"/Symbol.svg"}
                  alt="Symbol"
                  width={10}
                  height={10}
                />
                In stock
              </div>
            </div>
          </div>

          {/* product card 2 */}
          <div className="relative">
            <div className="absolute top-0 left-1 bg-black text-white text-[10px] px-3 py-1  rounded">
              NEW
            </div>

            <div className="flex justify-center mb-5 mt-4">
              <Image
                src="/devices/bigphone2.png"
                alt="bigphone 2"
                width={192}
                height={220}
              />
            </div>

            {/* DOT ABOVE (design detail) */}
            <div className="absolute top-2 right-0 w-6 h-6 bg-gray-300 rounded-full"></div>

            <div className="w-full h-px mb-3 bg-gray-200 mt-3"></div>
            {/* Reviews */}

            <p className="text-xs font-bold mt-4">
              aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB
            </p>

            <div className="flex gap-2 items-center mt-3">
              <p className="font-bold text-black mb-1">$979.00 - $1,259.00</p>
            </div>

            <div className="mt-2">
              <span className="text-[10px] text-black  bg-[#dadada] px-2 py-1 rounded">
                $2.98 SHIPPING
              </span>
            </div>

            <p className="text-[13px] flex gap-1 mt-2">
              <Image src={"/Symbol.svg"} alt="Symbol" width={10} height={10} />
              In stock
            </p>
          </div>

          {/* Product 3 */}
          <div className="relative">
            <div className="flex justify-center mb-5 mt-4">
              <Image
                src="/devices/bigphone3.png"
                alt="bigphone 3"
                width={192}
                height={220}
              />
            </div>

            {/* DOT ABOVE (design detail) */}
            <div className="absolute top-2 right-0 w-6 h-6 bg-gray-300 rounded-full"></div>

            <div className="w-full h-px mb-2 bg-gray-200 mt-2"></div>
            {/* Reviews */}
            <p className="text-[10px] text-gray-400 text-center">(5)</p>

            <p className="text-sm mt-1 leading-tight font-bold">
              OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS
            </p>

            <div className="flex gap-2 items-center mt-4">
              <p className="font-bold text-black mb-1">$659.00</p>
            </div>

            <div className="flex gap-2 mt-2 ">
              <span className="text-[10px] text-[#01A49E] bg-[#e3f5f4] px-2 py-1 rounded">
                FREE SHIPPING
              </span>
              <span className="text-[10px] text-[#01A49E]  bg-[#e3f5f4] px-2 py-1 rounded">
                FREE GIFT
              </span>
            </div>

            <p className="text-[13px] flex gap-1 mt-2">
              <Image src={"/Symbol.svg"} alt="Symbol" width={10} height={10} />
              In stock
            </p>
            <div className="flex gap-2 mt-2">
              <Image
                src="/devices/phoneA.png"
                alt="phone A"
                width={40}
                height={40}
              />
              <Image
                src="/devices/phoneB.png"
                alt="phone B"
                width={40}
                height={40}
              />
              <Image
                src="/devices/phoneC.png"
                alt="phone C"
                width={40}
                height={40}
              />
            </div>
          </div>

          {/* product 4 */}
          <div className="relative">
            <div className="absolute left-0 bg-teal-500 text-white text-[12px] px-0.5 py-2 rounded">
              SAVE $59.00
            </div>
            <div className="flex justify-center mb-5 mt-4">
              <Image
                src="/devices/bigphone4.png"
                alt="bigphone 4"
                width={192}
                height={220}
              />
            </div>

            {/* DOT ABOVE (design detail) */}
            <div className="absolute top-2 right-0 w-6 h-6 bg-gray-300 rounded-full"></div>

            <div className="w-full h-px mb-2 bg-gray-200 mt-2"></div>
            {/* Reviews */}
            <p className="text-[10px] text-gray-400 text-center">(9)</p>

            <p className="text-sm mt-1 leading-tight font-bold">
              Xiamoi Redmi Note 5, 64GB
            </p>

            <div className=" mt-4">
              <span className="text-teal-600 font-bold ">$1,239.00</span>
              <span className="text-gray-400 line-through text-sm ml-1">
                $1,619.00
              </span>
            </div>

            <div className="mt-2 ">
              <span className="text-[10px] text-[#01A49E] bg-[#e3f5f4] px-2 py-1 rounded">
                FREE SHIPPING
              </span>
            </div>
            <p className="text-[13px] flex gap-1 mt-2">Contact</p>
          </div>

          {/* product 5 */}
          <div className="relative">
            <div className="flex justify-center mb-5 mt-4">
              <Image
                src="/devices/bigphone5.png"
                alt="bigphone 5"
                width={192}
                height={220}
              />
            </div>

            {/* DOT ABOVE (design detail) */}
            <div className="absolute top-2 right-0 w-6 h-6 bg-gray-300 rounded-full"></div>

            <div className="w-full h-px mb-2 bg-gray-200 mt-2"></div>
            {/* Reviews */}
            <p className="text-[10px] text-gray-400 text-center">(8)</p>

            <p className="text-sm mt-1 leading-tight font-bold">
              Microsute Alpha Ultra S5 Surface 128GB 2022, Sliver
            </p>

            <div className=" mt-2">
              <span className="font-bold text-black mb-1"> $1,729.00</span>
            </div>

            <div className="mt-2 ">
              <span className="text-[10px] text-[#01A49E] bg-[#e3f5f4] px-2 py-1 rounded">
                FREE SHIPPING
              </span>
            </div>
            <p className="text-[13px] flex gap-1 mt-2">Contact</p>
            <div className="flex gap-2 mt-2">
              <Image
                src="/devices/phoneD.png"
                alt="phone D"
                width={40}
                height={40}
              />
              <Image
                src="/devices/phoneE.png"
                alt="phone E"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Device;
