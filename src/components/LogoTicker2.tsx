import Image from "next/image";
import React from "react";

export const LogoTicker2 = () => {
  return (
    <div className="w-full h-full">
      <div className="bg-white p-4 rounded-lg border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-sm">TOP CATEGORIES</h2>
          <span className="text-xs text-gray-500 cursor-pointer">View All</span>
          <Image
            src="/images/div-arrows.png"
            alt="div arrows"
            height={30}
            width={70}
          />
        </div>

        {/* icons */}
        <div className="flex justify-between text-center mt-8">
          <div>
            <Image
              src="/icons/icon1.png"
              alt="icon 1"
              width={113}
              height={60}
            />
            <p className="text-xs mt-2">Laptops</p>
          </div>
          <div>
            <Image
              src="/icons/icon2.png"
              alt="icon 2"
              width={113}
              height={60}
            />
            <p className="text-xs mt-2">PC Gaming</p>
          </div>
          <div>
            <Image
              src="/icons/icon3.png"
              alt="icon 3"
              width={113}
              height={60}
            />
            <p className="text-xs mt-2">Headphones</p>
          </div>
          <div>
            <Image
              src="/icons/icon4.png"
              alt="icon 4"
              width={113}
              height={60}
            />
            <p className="text-xs mt-2">Monitors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker2;
