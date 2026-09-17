import Image from "next/image";

export const PreOrder = () => {
  return (
    <div>
      <div className="h-30">
        {/* TOP BANNER */}
        <div className="bg-teal-600 h-30 text-white rounded-lg flex items-center justify-between px-5  overflow-hidden">
          {/* LEFT TEXT */}
          <div>
            <p className="text-lg uppercase">PRE ORDER</p>
            <p className="text-sm font-semibold mt-1">From $399</p>
          </div>

          {/* IMAGE */}
          <div className="relative  md:flex items-center justify-center bottom-3 ">
            <div className="absolute w-100 h-100 bg-[#5F81A2] rounded-full"></div>
            <Image
              src="/icons/smartwatch.png"
              alt="smartwatch"
              width={330}
              height={90}
              className="top-4 relative"
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="items-center text-center pr-12">
            <p className="text-xs h-6">Opplo Watch Sport Series 8</p>
            <h3 className="text-xl">A healthy leap ahead</h3>
          </div>

          {/* BUTTON */}
          <button className="bg-white text-black text-xs px-4 py-2 rounded-full">
            Discover Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreOrder;
