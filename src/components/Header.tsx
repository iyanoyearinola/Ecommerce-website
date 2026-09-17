import Image from "next/image";

export const Header = () => {
  return (
    <section className="container w-full relative bg-white border border-white rounded-lg mx-auto">
      <div className="mx-auto flex items-center justify-between">
        <div className="flex w-full justify-between items-center  py-3 px-3 text-sm text-gray-600">
          {/* LEFT SIDE */}
          <div className="flex items-center gap-3 ">
            <p className="bg-[#EBEEF6] font-bold px-4 py-2 rounded-sm lg:rounded-lg ">
              Hotline 24/7
            </p>

            <p className="font-bold">(025) 388 25 16</p>
          </div>

          {/* RIGHT SIDE */}

          <p className="hidden md:block hover:text-black">Sell on Swoo</p>

          <p className="hidden md:block hover:text-black">Order Tracking</p>

          {/* Currency */}
          <div className="flex items-center ">
            <div className="flex gap-1">
              USD
              <Image
                src={"/arrow-down.svg"}
                alt="arrow down"
                width={10}
                height={10}
                className="mt-1"
              />
              <div className="w-px h-5 bg-gray-300" />
              <Image
                src="/images/Flag.png"
                alt="Flag"
                width={20}
                height={15}
                className="mt-1"
              />
              <span>Eng</span>
              <Image
                src={"/arrow-down.svg"}
                alt="Arrow down"
                width={10}
                height={10}
                className="mt-1"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex px-3 py-4  gap-3 items-center justify-between">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-2">
          <Image
           src="/logos/menu.png"
           alt="Menu"
           height={8}
           width={20}
           className="md:hidden"
           />
          <Image
            src="/images/Logo.png"
            alt="Logo"
            height={55}
            width={65}
            className="relative"
          />
          <Image
            src="/images/Logo-smile.png"
            alt="Logo smile"
            height={8}
            width={22}
            className="absolute ml-10 mt-3" 
          />
          
          <div className="font-bold">
            <span> SWOO TECH MART</span>
          </div>
        </div>

        {/* MENU */}
        <div className="hidden md:block justify-between items-center  font-bold text-sm ">
          <nav className="flex gap-3 items-center">
            <a className="flex items-center gap-1">
              <span> Homes </span>
              <Image
                src={"/arrow-down.svg"}
                alt="Arrow down"
                width={10}
                height={10}
                className="mt-1"
              />
            </a>
            <a className="flex items-center gap-1">
              <span> Pages </span>
              <Image
                src={"/arrow-down.svg"}
                alt="Arrow down"
                width={10}
                height={10}
                className="mt-1"
              />
            </a>
            <a className="flex items-center gap-1">
              <span> Products </span>
              <Image
                src={"/arrow-down.svg"}
                alt="Arrow down"
                width={10}
                height={10}
                className="mt-1"
              />
            </a>
            <span> Contact </span>
          </nav>
        </div>
        {/* </div> */}

        {/* RIGHT SIDE */}
        
        <div className=" flex items-center gap-3">
          {/* Wishlist */}
          <div className="justify-between item-center hidden md:block">
          <div className="flex pr-8 gap-3 ">
            <Image
              src="/images/Circle-navbar1.png"
              alt="Circle Navbar1"
              height={40}
              width={40}
            />
            <Image
              src="/images/Circle-navbar2.png"
              alt="Circle navbar2"
              height={40}
              width={40}
            />
            <Image
              src="/images/Circle-navbar1.png"
              alt="Circle navbar1"
              height={40}
              width={40}
            />
          </div>
          </div>
          {/* User */}
          <div className="">
            <p className="text-[#bcbcbc] font text-sm">WELCOME</p>
            <p className="font-bold">LOG IN/REGISTER</p>
          </div>
          {/* Cart */}
          <div className=" flex items-center gap-2">
            <Image
              src="/images/divcon.png"
              alt="divcon"
              width={50}
              height={40}
            />
            <div className="hidden md:block">
              <p className="text-[#bcbcbc] font text-sm">CART</p>
              <p className="font-bold">$1,689.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
