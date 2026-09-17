import Image from "next/image";

export const Gadget = () => {
  const categories = [
    { name: "Macbook", items: "74 items", image: "/gadgets/smallMackbook.png" },
    { name: "Gaming PC", items: "5 items", image: "/gadgets/gamingPC.png" },
    {
      name: "Laptop Office",
      items: "22 items",
      image: "/gadgets/officeLappy.png",
    },
    { name: "Laptop 15’’", items: "55 items", image: "/gadgets/lappy15.png" },
    { name: "M1 2023", items: "32 items", image: "/gadgets/lappy2023.png" },
    {
      name: "Secondhand",
      items: "16 items",
      image: "/gadgets/lappySecondhand.png",
    },
  ];
  return (
    <div className="container w-full border rounded-lg border-white mx-auto  bg-white">
      <div className="flex justify-between items-center mb-4 px-2 mt-5">
        <h2 className="font-bold"> BEST LAPTOPS AND COMPUTERS</h2>

        <span className="text-xs text-gray-500">View All</span>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-4 items-stretch">
        {/* LEFT BANNER */}
        <div className="col-span-1 px-3">
          <div className="flex items-center bg-gray-100 relative rounded-lg overflow-hidden h-45">
            {/* Background Image */}
            <Image
              src="/gadgets/mackbook.png"
              alt="mackbook"
              height={300}
              width={640}
              className="object-contain  rounded-lg"
            />

            {/* Content */}
            <div className="absolute inset-0 flex items-center px-6 p-6">
              <div>
                <h3 className="text-xl font-bold text-white leading-tight">
                  Mobok 2 Superchard <br /> By M2
                </h3>

                <p className="text-sm mt-5 text-gray-300">Start from $1,199</p>
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
            <div className="absolute top-0 left-1 bg-black text-white text-[10px] px-3 py-1  rounded">
              NEW
            </div>

            {/* PRODUCT IMAGE */}
            <div className="flex justify-center mt-6">
              <Image
                src="/gadgets/biglaptop.png"
                alt="biglaptop"
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
              <h3 className="text-sm mt-1 leading-tight font-bold">
                Pineapple Macbook Pro 2022 M1 / 512 GB
              </h3>

              {/* Price */}
              <div className="flex gap-2 items-center mt-4">
                <p className="font-bold text-black mb-1">$579.00</p>
              </div>

              {/* Tags */}
              <div className="flex gap-2 mt-4">
                <span className="text-[10px] text-[#01A49E] bg-[#e3f5f4] px-2 py-1 rounded">
                  FREE SHIPPING
                </span>
              </div>

              {/* Stock */}
              <div className="flex text-[13px] gap-1 mt-3">
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
                src="/gadgets/speaker.png"
                alt="speaker"
                width={192}
                height={220}
              />
            </div>

            {/* DOT ABOVE (design detail) */}
            <div className="absolute top-2 right-0 w-6 h-6 bg-gray-300 rounded-full"></div>

            <div className="w-full h-px mb-3 bg-gray-200 mt-3"></div>
            {/* Reviews */}

            <p className="text-sm font-bold mt-7">C&O Bluetooth Speaker</p>

            <div className="items-center mt-3">
              <p className="font-bold text-black mb-1">$979.00</p>
            </div>

            <div className="flex gap-2 mt-5">
              <span className="text-[10px] text-[#01A49E] bg-[#e3f5f4] px-2 py-1 rounded">
                FREE SHIPPING
              </span>
            </div>

            <p className="text-[13px] flex gap-1 mt-4">
              <Image src={"/Symbol.svg"} alt="Symbol" width={10} height={10} />
              In stock
            </p>
            <div className="flex gap-2 mt-4">
              <Image
                src="/gadgets/miniSpeaker1.png"
                alt="phone A"
                width={40}
                height={40}
              />
              <Image
                src="/gadgets/miniSpeaker2.jpg"
                alt="minispeaker 2"
                width={40}
                height={40}
              />
            </div>
          </div>

          {/* Product 3 */}
          <div className="relative">
            <div className="flex justify-center mb-5 mt-4">
              <Image
                src="/gadgets/bigSpeaker.png"
                alt="bigSpeaker"
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
              Gigaby Custome Case, i7/ 16GB / SSD 256GB
            </p>

            <div className="flex gap-2 items-center mt-4">
              <p className="font-bold text-black mb-1">$1,259.00</p>
            </div>

            <div className="flex gap-2 mt-5 ">
              <span className="text-[10px] text-[#01A49E] bg-[#e3f5f4] px-2 py-1 rounded">
                FREE SHIPPING
              </span>
              <span className="text-[10px] text-[#01A49E]  bg-[#e3f5f4] px-2 py-1 rounded">
                FREE GIFT
              </span>
            </div>

            <p className="text-[13px] flex gap-1 mt-4">
              <Image src={"/Symbol.svg"} alt="Symbol" width={10} height={10} />
              In stock
            </p>
          </div>

          {/* product 4 */}
          <div className="relative">
            <div className="absolute left-0 bg-teal-500 text-white text-[12px] px-0.5 py-2 rounded">
              SAVE $59.00
            </div>
            <div className="flex justify-center mb-5 mt-4">
              <Image
                src="/gadgets/PCgaming.png"
                alt="PCgaming"
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

            <div className="mt-4">
              <span className="text-[10px] text-black  bg-[#dadada] px-2 py-1 rounded">
                $2.98 SHIPPING
              </span>
            </div>
            <p className="text-[13px] flex gap-1 mt-3">Contact</p>
          </div>

          {/* product 5 */}
          <div className="relative">
            <div className="flex justify-center mb-5 mt-4">
              <Image
                src="/gadgets/PCcomputer.png"
                alt="PCcomputer"
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
              aMoc All-in-one Computer M1
            </p>

            <div className=" mt-3">
              <span className="font-bold text-black mb-1"> $1,729.00</span>
            </div>

            <div className="mt-4 ">
              <span className="text-[10px] text-[#01A49E] bg-[#e3f5f4] px-2 py-1 rounded">
                FREE SHIPPING
              </span>
            </div>
            <p className="text-[13px] flex gap-1 mt-3">Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
