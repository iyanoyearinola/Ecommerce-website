import Image from "next/image";

export const Download = () => {
  return (
    <div className="py-3 ">
      <div className="relative rounded-lg overflow-hidden ">
        <Image
          src="/luxury/step.png"
          alt="step"
          width={680}
          height={250}
          className="object-contain "
        />
        <div className="absolute inset-0 flex items-center px-6 text-white">
          {/* LEFT SIDE */}
          <div className="w-1/2">
            <h3 className="text-xl font-semibold leading-tight">
              Download <br /> our app
            </h3>

            <p className="text-xs text-gray-300 mt-2">
              Enter your phone number and we’ll send you a download link.
            </p>

            {/* INPUT */}
            <div className="flex items-center bg-white/10 rounded mt-3 overflow-hidden w-full ">
              <input
                type="text"
                placeholder="(+XX) XXX..."
                className="bg-transparent px-3 py-2 text-xs outline-none flex-1"
              />

              <button className="text-green-400 text-xs px-3 whitespace-nowrap ">
                SEND LINK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
