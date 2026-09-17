import Image from "next/image";

export const CategorySidebar = () => {
  return (
    <section className="w-full h-full">
      <div className="bg-white p-4 border border-gray-100 rounded-lg h-full">
        <h1 className="font-semibold text-gray-600 mb-3 mt-4">Category</h1>
        <div className="w-32 h-0.5 bg-teal-500 mb-6"></div>
        {/* Item 1 */}
        <div className="flex items-center justify-between border border-gray-100 p-2 rounded mb-3">
          <div className="flex items-center gap-2">
            <Image src="/images/Lappy.png" alt="Lappy" width={28} height={22} />
            <span className="text-sm">Laptops</span>
          </div>
          <span className="text-xs bg-teal-100 px-2 rounded-full">1</span>
        </div>

        {/* item 2 */}
        <div className="flex items-center justify-between border border-gray-100 p-2 rounded mb-3">
          <div className="flex items-center gap-2">
            <Image
              src="/images/Small-PC.png"
              alt="Small PC"
              height={28}
              width={28}
            />
            <span className="text-xs">PC & Computers</span>
          </div>
          <span className="text-xs bg-teal-100 px-2 rounded-full">2</span>
        </div>

        {/* item 3 */}
        <div className="flex items-center justify-between border border-gray-100 p-2 rounded mb-3">
          <div className="flex items-center gap-2">
            <Image
              src="/images/Small-Mobile.png"
              alt="Small Mobile"
              height={30}
              width={19}
            />
            <span className="text-xs">Cell Phones</span>
          </div>
          <span className="text-xs bg-teal-100 px-2 rounded-full">3</span>
        </div>

        {/* item 4 */}
        <div className="flex items-center justify-between border border-gray-100 p-2 rounded mb-3">
          <div className="flex items-center gap-2">
            <Image
              src="/images/Small-Tab.png"
              alt="Small Tab"
              height={28}
              width={33}
            />
            <span className="text-xs">Tablets</span>
          </div>
          <span className="text-xs bg-teal-100 px-2 rounded-full">4</span>
        </div>

        {/* item 5 */} 
        <div className="flex items-center justify-between border border-gray-100 p-2 rounded mb-3">
          <div className="flex items-center gap-2">
            <Image
              src="/images/Small-Camera.png"
              alt="Small Camera"
              height={26}
              width={26}
            />
            <span className="text-xs">Cameras</span>
          </div>
          <span className="text-xs bg-teal-100 px-2 rounded-full">5</span>
        </div>
      </div>
    </section>
  );
};


