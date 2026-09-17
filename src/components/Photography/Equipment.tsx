import Image from "next/image"


export const Equipment = () => {
   const audioItems = [
  { name: "printer", items: "9 items", image: "/pictures/printer.png" },
  { name: "router", items: "90 items", image: "/pictures/router.png" },
  { name: "security", items: "12 items", image: "/pictures/security.png" },
  { name: "projector", items: "12 items", image: "/pictures/projector.png" },
];
  return (
   <div className="container w-full  mx-auto mt-4 mb-8 bg-white border rounded-lg border-white">
                 {/* product card 3 */}
           <div className="rounded-xl p-4">
               <div className="flex justify-between items-center mb-4">
                 <h3 className="text-lg font-bold">
                   OFFICE EQUIPMENT
                 </h3>
                 <span className="text-xs text-gray-400">View All</span>
               </div>
                 <div className="relative rounded-xl overflow-hidden mb-4 mt-6">
                 <Image 
                   src="/pictures/Laser-Projector.png"
                   alt="Laser Projector"
                   width={368}
                   height={190}
                   className="w-full h-48 object-cover"
                 />
                 {/* TEXT ON IMAGE */}
                 <div className="absolute inset-0 flex flex-col items-center top-6 text-white text-center">
                   <p className="text-xs text-[#b8b8b9] leading-relaxed">Home Theater 4K</p>
                    <h4 className="text-xl font-semibold">
                      Laser Projector
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
                       <span className="text-[11px] text-gray-500">
                        {item.items}
                       </span>
                     </div>
                   ))}
               </div>
           </div>
       </div>
  )
}

export default Equipment