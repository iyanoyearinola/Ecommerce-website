import Image from "next/image";

export const Luxury = () => {
  return (
    <div>
      <div className="bg-[#01A49E] rounded-xl p-6 flex items-center justify-between text-white">
        <div>
          <p className="text-lg font-semibold">MASSAGE CHAIR</p>

          <h3 className="text-lg font-semibold leading-tight mt-1">LUXURY</h3>

          <p className="text-xs mt-2 text-teal-100">
            Fuka Relax Full Body <br /> Massage Chair
          </p>

          <button className="mt-4 bg-white text-black text-xs px-4 py-2 rounded-xl font-bold">
            Shop Now
          </button>
        </div>
        <div className="h-35 w-40">
        <Image
          src="/Luxury/orange-sofa.png"
          alt="orange sofa"
          height={193}
          width={176}
          className="object-contain"
        />
        </div>
      </div>
    </div>
  );
};

export default Luxury;
