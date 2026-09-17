import Image from "next/image";

export const HeroContent = () => {
  return (
    
    <div className="hidden lg:block relative w-full flex justify-center items-center p-4 rounded-2xl ">
      <Image
        src="/images/Background.png"
        alt="Background "
        fill
        className="relative w-full h-80 object-cover rounded-4xl "
      />

      {/* Dark Overlay */}
       <div className=" absolute inset-0  bg-black/20 rounded-4xl"></div>

      <div className="absolute inset-0 flex flex-col justify-center px-8 text-white">
        <h1 className="text-7xl font-semibold mb-2 px-6 leading-tight">
          Don’t miss amazing <br /> grocery deals
        </h1>

        {/* Subtitle */}
        <p className="text-4xl mb-4 mt-4 px-8">
          Sign up for the daily newsletter
        </p>

        {/* Input + Button */}
        <div className="flex items-center px-10 py-3  mt-6">
          <div className=" relative">
          <Image
            src="/images/send.png"
            alt="send"
            height={24}
            width={24}
            className="absolute ml-4 mt-4"
          />
          <input
            height={64}
            width={379}
            type="text"
            placeholder="Your email address" 
            className="relative flex-1 px-15 py-5 text-sm text-white font-bold border  border-[#9A9A9A] rounded-full" 
          />
          </div>

          <button 
           className="bg-teal-500 ml-50 absolute text-white h-16 px-10 w-40 border rounded-full text-sm">
            Subscribe 
          </button>
        </div>
      </div>
      {/* Dots (bottom center) */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
        <div className="w-2 h-2 bg-white rounded-full opacity-70"></div>
      </div>
    </div>
  );
};

// export default HeroContent

// import Image from "next/image";

//     <div className="relative w-full h-75 rounded-lg overflow-hidden">

//       {/* Background Image */}
//       <Image
//         src="/images/banner.jpg" // put your image here
//         alt="banner"
//         fill
//         className="object-cover"
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* Content */}
//       <div className="absolute inset-0 flex flex-col justify-center px-8 text-white">

//         {/* Title */}
//         <h1 className="text-3xl font-semibold mb-2">
//           Don’t miss amazing <br /> grocery deals
//         </h1>

//         {/* Subtitle */}
//         <p className="text-sm mb-4">
//           Sign up for the daily newsletter
//         </p>

//         {/* Input + Button */}
//         <div className="flex items-center bg-white rounded-full p-1 w-75">

//           <input
//             type="text"
//             placeholder="Your email address"
//             className="flex-1 px-3 py-2 text-sm text-gray-700 outline-none rounded-full"
//           />

//           <button className="bg-teal-500 text-white text-sm px-4 py-2 rounded-full">
//             Subscribe
//           </button>
//         </div>

//       </div>

//       {/* Dots (bottom center) */}
//       <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
//         <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
//         <div className="w-2 h-2 bg-white rounded-full opacity-70"></div>
//       </div>

//     </div>
