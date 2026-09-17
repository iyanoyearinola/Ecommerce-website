import Image from "next/image";

export const Media = () => {
  const audioItems = [
    { name: "Speaker", items: "12 items", image: "/pictures/speaker.png" },
    { name: "DSLR Camera", items: "9 items", image: "/pictures/camera.png" },
    { name: "Earbuds", items: "5 items", image: "/pictures/earbuds.png" },
    {
      name: "Microphone",
      items: "12 items",
      image: "/pictures/microphone.png",
    },
  ];
  return (
    <div className="container w-full  mx-auto mt-4 mb-8 bg-white border rounded-lg border-white">
      {/* product card 1 */}
      <div className="rounded-xl p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">AUDIOS & CAMERAS</h3>
          <span className="text-xs text-gray-400">View All</span>
        </div>
        <div className="relative rounded-xl overflow-hidden mb-4 mt-6">
          <Image
            src="/pictures/Audio-Speaker.png"
            alt="Audio Speakers"
            width={368}
            height={190}
            className="w-full h-48 object-cover"
          />
          {/* TEXT ON IMAGE */}
          <div className="absolute top-10 left-7 text-white">
            <p className="text-sm font-semibold">Best</p>
            <h4 className="text-sm font-semibold leading-relaxed">
              Speaker <br /> 2023
            </h4>
          </div>
        </div>
        <div className="w-full h-1 mb-3 bg-gray-200 mt-10"></div>

        <div className="grid grid-cols-2 gap-10 text-center mt-8">
          {audioItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* ICON */}
              <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center mb-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={140}
                  height={140}
                />
              </div>
              {/* NAME */}
              <p className="text-[13px] font-bold mt-2">{item.name}</p>

              {/* ITEMS COUNT */}
              <span className="text-[11px] text-gray-500">{item.items}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
