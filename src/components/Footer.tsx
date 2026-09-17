import Image from "next/image";

export const Footer = () => {
  return (
    <div className="container mx-auto w-full mt-12 mb-8">
      <footer className="bg- mt-12 pt-10 pb-10 text-sm text-gray-600">
        <div className="max-w-7xl mx-auto px-8 ">
          {/* TOP GRID */}
          <div className="grid grid-cols-5 gap-9 justify-between">
            {/* COLUMN 1 */}
            <div>
              <h3 className="text-black font-bold text-sm mb-5">
                SWOO - 1ST NYC TECH ONLINE MARKET
              </h3>

              <p className="text-[11px] text-black">HOTLINE 24/7</p>

              <p className="text-orange-500 font-semibold text-xl mt-1">
                (025) 3686 25 16
              </p>

              <p className="text-black text-xs mt-3 leading-relaxed">
                257 Thatcher Road St, Brooklyn, Manhattan, NY 10092
                <br />
                contact@swootechmart.com
              </p>

              {/* Socials */}
              <div className="flex gap-4 mt-5">
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center ">
                  <Image
                    src={"/Twitter.svg"}
                    alt="Twitter"
                    width={14}
                    height={14}
                    className="absolute"
                  />
                </div>
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center ">
                  <Image
                    src={"/Facebook.svg"}
                    alt="Facebook"
                    width={8}
                    height={8}
                    className="absolute"
                  />
                </div>
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center ">
                  <Image
                    src={"/Instagram.svg"}
                    alt="Instagram"
                    width={14}
                    height={14}
                    className="absolute"
                  />
                </div>
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center ">
                  <Image
                    src={"/Youtube.svg"}
                    alt="Youtube"
                    width={14}
                    height={14}
                    className="absolute"
                  />
                </div>
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center ">
                  <Image
                    src={"/Pintrest.svg"}
                    alt="Pintrest"
                    width={14}
                    height={14}
                    className="absolute"
                  />
                </div>
              </div>
            </div>

            {/* COLUMN 2 */}
            <div className="px-8">
              <h3 className="text-black font-bold text-sm mb-8">
                TOP CATEGORIES
              </h3>
              <ul className="space-y-2 text-[13px]">
                <li>Laptops</li>
                <li>PC & Computers</li>
                <li>Cell Phones</li>
                <li>Tablets</li>
                <li>Gaming & VR</li>
                <li>Networks</li>
                <li>Cameras</li>
                <li>Sounds</li>
                <li>Office</li>
              </ul>
            </div>

            {/* COLUMN 3 */}
            <div className="px-4">
              <h3 className="text-black font-bold text-sm mb-8">COMPANY</h3>
              <ul className="space-y-2 text-[13px]">
                <li>About Swoo</li>
                <li>Contact</li>
                <li>Career</li>
                <li>Blog</li>
                <li>Sitemap</li>
                <li>Store Locations</li>
              </ul>
            </div>

            {/* COLUMN 4 */}
            <div className="px-4" >
              <h3 className="text-black font-bold text-sm mb-8">HELP CENTER</h3>
              <ul className="space-y-2 text-[13px]">
                <li>Customer Service</li>
                <li>Policy</li>
                <li>Terms & Conditions</li>
                <li>Track Order</li>
                <li>FAQs</li>
                <li>My Account</li>
                <li>Product Support</li>
              </ul>
            </div>

            {/* COLUMN 5 */}
            <div className="px-4">
              <h3 className="text-black font-bold text-sm mb-8">PARTNER</h3>
              <ul className="space-y-2 text-[13px]">
                <li>Become Seller</li>
                <li>Affiliate</li>
                <li>Advertise</li>
                <li>Partnership</li>
              </ul>
            </div>         
          </div>
        </div>
        {/* MIDDLE SECTION */}
        <div className="flex items-center justify-between mt-10 pt-6 border-gray-200">
          {/* LEFT: Currency + Language */}
          <div className="flex items-center gap-3 mb-30">
            <div className="border border-gray-200 flex gap-1 rounded px-3 py-1 text-xs bg-white text-black">
              USD
              <Image
                src={"/arrow-down.svg"}
                alt="arrow down"
                width={8}
                height={8}
                className=""
              />
            </div>
            <div className="border border-gray-200 flex gap-1 rounded px-3 py-1 text-xs bg-white text-black">
              <Image src="/images/Flag.png" alt="Flag" width={15} height={15} />
              Eng
              <Image
                src={"/arrow-down.svg"}
                alt="arrow down"
                width={8}
                height={8}
                className=""
              />
            </div>
          </div>

          {/* RIGHT: Newsletter */}
          <div className="w-[70%] mb-18">
            {/* Text */}
            <p className="text-black font-bold mb-2">
              SUBSCRIBE & GET{" "}
              <span className="text-orange-500 font-bold">10% OFF</span> FOR
              YOUR FIRST ORDER
            </p>

            {/* Input */}
            <div className="flex items-center border-b border-gray-200 ">
              <input
                type="text"
                placeholder="Enter your email address"
                className="w-full bg-transparent outline-none text-xs py-2"
              />

              <button className="text-orange-500 text-sm font-semibold">
                SUBSCRIBE
              </button>
            </div>

            {/* Small note */}
            <p className="text-[12px] text-gray-400 mt-1">
              By subscribing, you agree to our Policy
            </p>
          </div>
        </div>
         
         {/* BOTTOM FOOTER */}
          <div className="flex items-center justify-between mt-10 pt-10  border-t border-gray-200 text-xs">

              {/* LEFT */}
              <p className="text-gray-400">
                © 2026 <span className="font-bold text-black">Shawonetc3</span>. All Rights Reserved
              </p>

              {/* CENTER (Payments) */}
              <div className="flex items-center gap-6">
                <Image src="/logos/paypal.png" alt="paypal" width={13} height={15} />
                <Image src="/logos/mastercard.png" alt="mastercard" width={26} height={15} />
                <Image src="/logos/visa.png" alt="visa" width={40} height={15} />
                <Image src="/logos/stripe.png" alt="stripe" width={38} height={15} />
                <Image src="/logos/klarna.png" alt="klarna" width={71} height={15} />
              </div>

              {/* RIGHT */}
              <p className="text-blue-500 cursor-pointer">
                Mobile Site
              </p>

          </div> 
      </footer>
    </div>
  );
};

export default Footer;
