import Image from "next/image";

export const BrandDeals = () => {
  return (
    <div className="h-full w-full">
      {/* RIGHT SIDE (Ads) */}
      <div className="flex flex-col gap-4 h-full w-full">
        <div className="relative w-full h-30 ">
          <Image
            src="/icons/game-pad.png"
            alt="game"
            height={177}
            width={296}
          />
        </div>
        <div className="relative w-full mt-12 ">
          <Image src="/icons/tabs.png" alt="tabs" height={177} width={296} />
        </div>

        <div className="relative w-full bottom-3">
          <Image
            src="/icons/smartphone.png"
            alt="smartphone"
            height={177}
            width={296}
          />
        </div>
      </div>
    </div>
  );
};

// export default BrandDeals
