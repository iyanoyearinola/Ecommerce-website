import Image from "next/image";

export const Navbar = () => {
  return (
    <section className="container w-full  mx-auto">
      <div className="flex items-center justify-between py-2 border rounded-lg bg-[#01A49E] text-white px-4">
        <div className="flex items-center gap-2 bg-white rounded-full px-3 py-4 w-105">
          <select className="text-gray-700 text-sm bg-transparent outline-none">
            <option>All Categories</option>
          </select>
          <div className="w-px h-5 bg-gray-300" />
          <input
            type="text"
            placeholder="search anything..."
            className="flex  border-white text-sm text-gray-700 rounded-lg"
            height={60}
            width={380}
          />
          <Image src={"/Search.svg"} alt="Search" height={14} width={14} />
        </div>
        <div className="flex items-center gap-24 font-medium text-xs px-12 ">
          <span>FREE SHIPPING OVER $199</span>
          <span>30 DAYS MONEY BACK</span>
          <span>100% SECURE PAYMENT</span>
        </div>
      </div>
    </section>
  );
};
