import Image from "next/image";

const hero = "/hero_stock.png";

export default function HeroSection() {
  return (
    <div className="w-full paint_background">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-full lg:items-start lg:justify-items-start w-full">
        {/* Left Section */}
        <div className="max-w-xl flex flex-col items-center lg:items-start">
          <h1 className="text-4xl text-blue-700 font-extrabold sm:text-7xl text-center lg:text-left">
            Prime Time Painting
            <strong className="font-extrabold text-red-700 sm:block">
              {" "}
              & Remodeling{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl text-center lg:text-left lg:text-3xl">
            55 Years of Expertise,
            <br />
            One Trusted Team
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              className="block w-full rounded-sm bg-red-600 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:ring-3 focus:outline-hidden sm:w-auto"
              href="#"
            >
              Get a Quote
            </a>

          </div>
        </div>

        {/* Right Section */}
        <div className="max-w-xl flex flex-col items-center lg:items-start">
          <Image
            src={hero}
            width={1500}
            height={100}
            alt="hero section image"
          />
        </div>
      </div>
    </div>
  );
}
