import Image from "next/image";

const hero = "/hero_stock.png";
const exHero = "/exterior_hero.jpg";
const exHeroTwo = "/exterior_hero2.jpg";
const inHero = "/interior_hero.jpg";
const logo = "/ptp_hero_logo.png";


export default function HeroSection() {
  return (
    <div className="w-full paint_background">
      {/* Hero Section with background for sm and md */}
      <div className="mx-auto text-center flex justify-center max-w-screen-xl px-4 py-32 lg:flex lg:h-full lg:items-start lg:justify-items-start w-full bg-cover bg-center bg-[url('/exterior_hero.jpg')] lg:bg-none relative gap-4">
        {/* White Mask Overlay */}
        <div className="absolute inset-0 bg-white opacity-30 z-0"></div>

        {/* Left Section */}
        <div className="max-w-xl flex flex-col items-center lg:items-start z-10 relative">
          {/* <h1 className="text-4xl text-blue-700 font-extrabold sm:text-7xl text-center lg:text-left">
            PrimeTime Painting <br/>
            <strong className="font-extrabold text-red-700 sm:block">
              {" "}
              & Remodeling{" "}
            </strong>
          </h1> */}
      
            <Image
              src={logo}
              width={1000}
              height={100}
              alt="hero section image"
            />
          

          <div>

          </div>

          <p className="font-bold text-black mt-4 sm:text-xl text-center lg:text-left lg:text-3xl">
            55 Years of Expertise,
            <br />
            One Trusted Team
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              className="font-extrabold block w-full rounded-sm bg-red-600 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:ring-3 focus:outline-hidden sm:w-auto"
              href="#"
            >
              Get a Quote
            </a>
          </div>
        </div>

        {/* Right Section (4 images hidden on sm and md screens) */}
        <div className="gap-4 flex flex-row hidden lg:flex z-10 relative">
          <div className="max-w-xl flex flex-row flex-wrap items-center lg:items-start gap-4">
            <Image
              src={hero}
              width={400}
              height={100}
              alt="hero section image"
            />
            <Image
              src={exHeroTwo}
              width={400}
              height={100}
              alt="hero section image"
            />
          </div>
          <div className="max-w-xl flex flex-row flex-wrap items-center lg:items-start gap-4">
            <Image
              src={inHero}
              width={400}
              height={100}
              alt="hero section image"
            />
            <Image
              src={exHero}
              width={400}
              height={100}
              alt="hero section image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
