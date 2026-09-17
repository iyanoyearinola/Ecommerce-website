import Image from "next/image";

export const Subdeal = () => {
  return (
    <div className="w-full h-full  ">
      <div className="bg-white border border-white  rounded-lg">
        <div className="grid grid-cols-2 ">
          {/* LEFT SIDE (Product) */}
          <div className="col-span-2">
            <div className="flex bg-[#01A49E] text-white px-4  rounded-t-lg border rounded-lg justify-between items-center">
              <h2 className="font-bold text-sm">DEALS OF THE DAY</h2>
              <div className="text-xs leading-tight text-right">
                <p>e</p>
                <p>w</p>
                <p>a</p>
              </div>
            </div>

            <div className="col-span-2 border border-gray-100 rounded p-4">
              <div className="flex gap-4 mb-6">
                <div className="items-center gap-4 mt-10 mb-20">
                  <Image
                    src="/icons/phone1.png"
                    alt="phone 1"
                    height={60}
                    width={35}
                    className="border rounded mt-5"
                  />
                  <Image
                    src="/icons/phone2.png"
                    alt="phone 2"
                    height={60}
                    width={35}
                    className="border rounded mt-5"
                  />
                  <Image
                    src="/icons/phone3.png"
                    alt="phone 3"
                    height={60}
                    width={35}
                    className="border rounded mt-5"
                  />
                  <Image
                    src="/icons/phone4.png"
                    alt="phone 4"
                    height={60}
                    width={35}
                    className="border rounded mt-5"
                  />
                </div>

                <div className="flex flex-1  items-center relative ">
                  <div className="absolute top-16 left-8 bg-teal-500 text-white text-xs px-5 py-2 rounded">
                    SAVE <br /> $181.00
                  </div>
                  <Image
                    src="/icons/main-phone.png"
                    alt="main phone"
                    width={405}
                    height={280}
                    className="object-contain mt-10"
                  />
                </div>
                        {/* discount price */}
                <div className="flex-1 mt-6 mb-8">
                  <h3 className="text-sm font-bold text-black mb-2">
                    Xiaomi Redmi Note 11 Pro 256GB 2023, Black Smartphone
                  </h3>
                  <div className="flex gap-1">
                    <p className="text-teal-600 font-bold text-lg mb-2">
                      $569.00
                    </p>
                    <p className="text-xs text-gray-500 line-through mt-2 mb-3">
                      $750.00
                    </p>
                  </div>
                  <ul className="text-xs text-black space-y-1 mb-3 mt-2">
                    <li>
                      • Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel
                      Core
                    </li>
                    <li>• DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</li>
                    <li>
                      • Commanding Power Design: Twin 16+1+2 Phases Digital VRM
                    </li>
                  </ul>
                  <div className="flex gap-2 mt-10 mb-5">
                    <span className="text-[#01A49E] text-sm bg-gray-100 px-2 py-1 rounded">
                      FREE SHIPPING
                    </span>
                    <span className="text-[#01A49E] text-sm bg-gray-100 px-2 py-1 rounded">
                      FREE GIFT
                    </span>
                  </div>
                                {/* countdown */}
                  <div className="flex gap-3 mt-10 ">
                    <p className="text-2l text-black mb-2">
                      HURRY UP! PROMOTION WILL EXPIRE IN
                    </p>
                    <div className="bg-gray-100 px-3 py-2 text-center rounded">
                      <p className="text-sm font-semibold">-162</p>
                      <span className="text-[10px] text-gray-500">d</span>
                    </div>

                    <div className="bg-gray-100 px-3 py-2 text-center rounded">
                      <p className="text-sm font-semibold">-9</p>
                      <span className="text-[10px] text-gray-500">hrs</span>
                    </div>

                    <div className="bg-gray-100 px-3 py-2 text-center rounded">
                      <p className="text-sm font-semibold">-32</p>
                      <span className="text-[10px] text-gray-500">mins</span>
                    </div>

                    <div className="bg-gray-100 px-3 py-2 text-center rounded">
                      <p className="text-sm font-semibold">-34</p>
                      <span className="text-[10px] text-gray-500">sec</span>
                    </div>
                  </div>
                         {/* line between progress bar n countdown */}
                  <div className="border-t my-4 border-gray-200 " />
                  <div className="mt-8">
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div className="bg-teal-500 h-2 rounded-full w-[40%]"></div>
                    </div>
                    {/* Text */}
                    <div className="flex  text-xs text-gray-600 mb-1">
                      <span>Sold: </span>
                      <span className="font-bold text-black">26/75</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

// export default Subdeal
