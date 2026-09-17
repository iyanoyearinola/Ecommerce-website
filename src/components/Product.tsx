import Image from "next/image";

export const Product = () => {
  return (
    <div className="container w-full  mx-auto  mb-4 bg-white border rounded-lg border-white">
      <div className="flex items-center justify-between gap-4 mb-4 mt-4 px-3">
        <h2 className="font-bold">YOUR RECENTLY VIEWED</h2>

        <span className="text-xs text-gray-400 cursor-pointer">View All</span>
        <Image
          src="/images/div-arrows.png"
          alt="div arrows"
          height={30}
          width={70}
        />
      </div>
      <div className="grid grid-cols-4 gap-6 px-8">
        <div className="flex relative mb-8 items-center gap-3 ">
          {/* BADGE */}
          <div className="absolute top-0 left-0 bg-gray-800 text-white text-[9px] px-2 py-1 rounded">
            NEW
          </div>

          {/* IMAGE */}
          <div className="flex justify-center mt-4">
            <Image
              src="/Luxury/XiomiSportwatch.png"
              alt="Luxury Sport"
              width={120}
              height={90}
              className="object-contain"
            />
          </div>

          {/* DOT */}
          <div className="absolute top-2 right-0 w-4 h-4 bg-gray-300 rounded-full"></div>
          <div className="flex-1">
            {/* TITLE */}
            <p className="text-center text-[10px] text-gray-400 mb-2">(152)</p>

            {/* title */}
            <p className="text-[12px] font-semibold leading-relaxed">
              Xomie Redmi 8 Sport Water Resistance Watch
            </p>

            {/* price */}
            <p className="text-sm font-semibold mt-3">$579.00</p>
          </div>
        </div>

        <div className="flex relative mb-8 items-center gap-3 ">
          {/* BADGE */}
          <div className="absolute top-0 left-0 bg-gray-800 text-white text-[9px] px-2 py-1 rounded">
            NEW
          </div>

          {/* IMAGE */}
          <div className="flex justify-center mt-4">
            <Image
              src="/Luxury/Laptop.png"
              alt="Laptop"
              width={120}
              height={90}
              className="object-contain"
            />
          </div>

          {/* DOT */}
          <div className="absolute top-2 right-0 w-4 h-4 bg-gray-300 rounded-full"></div>
          <div className="flex-1">
            {/* title */}
            <p className="text-[12px] font-semibold leading-relaxed">
              Microte Surface 2.0 Laptop
            </p>

            {/* price */}
            <p className="text-sm font-semibold mt-3">$979.00</p>
          </div>
        </div>

        <div className="flex relative mb-8 items-center gap-3 ">
          {/* IMAGE */}
          <div className="flex justify-center mt-4">
            <Image
              src="/Luxury/tab.png"
              alt="tab"
              width={120}
              height={90}
              className="object-contain"
            />
          </div>

          {/* DOT */}
          <div className="absolute top-2 right-0 w-4 h-4 bg-gray-300 rounded-full"></div>
          <div className="flex-1">
            {/* title */}
            <p className="text-[13px] font-semibold leading-relaxed">
              aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB
            </p>

            {/* price */}
            <p className="text-sm font-semibold mt-3">$979.00 - $1,259.00</p>
          </div>
        </div>

        <div className="flex relative mb-8 items-center gap-3 ">
          {/* BADGE */}
          <div className="absolute top-0 left-0 bg-[#01A49E] text-white text-[9px] px-2 py-1 rounded">
            SAVE $192.00
          </div>

          {/* IMAGE */}
          <div className="flex justify-center mt-4">
            <Image
              src="/Luxury/phone.png"
              alt="phone"
              width={120}
              height={90}
              className="object-contain"
            />
          </div>

          {/* DOT */}
          <div className="absolute top-2 right-0 w-4 h-4 bg-gray-300 rounded-full"></div>
          <div className="flex-1">
            {/* TITLE */}
            <p className="text-center text-[10px] text-gray-400 mb-2">(152)</p>

            {/* title */}
            <p className="text-[13px] font-semibold leading-relaxed">
              SROK Smart Phone 128GB, Oled Retina
            </p>

            {/* price */}
            <div className="mt-3">
              <span className="text-teal-600 font-bold ">$569.00</span>
              <span className="text-gray-400 line-through text-sm ml-1">
                $779.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
