import Image from "next/image";

const exteriorOne = "/exterior/exterior_step_1.jpg";
const exteriorTwo = "/exterior/exterior_step_2.jpg";
const exteriorThree = "/exterior/exterior_step_3.jpg";

export default function Exterior() {
  return (
    <div className="paint_background pt-20 text-black px-4 lg:px-20">
      {/* Title */}
      <div className="flex flex-col items-center text-center pb-10">
        <h1 className="text-4xl font-bold">Exterior</h1>
        <h2 className="text-3xl">
          Enhance Your Home&apos;s Curb Appeal with Professional Exterior
          Painting!
        </h2>
        <p className="text-base text-body-color">
          Give your home a fresh, vibrant look with Primetime&apos;s expert
          exterior painting services.
        </p>
      </div>

      {/* Steps Section */}
      <div className="flex flex-col md:flex-row md:justify-between gap-10 pb-10">
        <div className="flex flex-col space-y-10 w-full">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Description */}
            <div className="w-full md:w-1/2 bg-white shadow-md hover:shadow-lg p-6">
              <h1 className="text-3xl font-bold text-red-700 mb-4">Step 1</h1>
              <h4 className="font-semibold text-xl text-dark mb-3">
                Consultation & Quote
              </h4>
              <p>
                We assess your home’s exterior and provide a detailed,
                transparent estimate.
              </p>
            </div>
            {/* Image */}
            <div className="w-full md:w-1/2">
              <Image
                src={exteriorOne}
                width={500}
                height={300}
                alt="Step One exterior Image"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-6">
            {/* Description */}
            <div className="w-full md:w-1/2 bg-white shadow-md hover:shadow-lg p-6">
              <h1 className="text-3xl font-bold text-red-700 mb-4">Step 2</h1>
              <h4 className="font-semibold text-xl text-dark mb-3">
                Precision Painting
              </h4>
              <p>
                Our skilled painters prep, prime, and paint using top-quality
                materials for a flawless finish.
              </p>
            </div>
            {/* Image */}
            <div className="w-full md:w-1/2">
              <Image
                src={exteriorTwo}
                width={500}
                height={300}
                alt="Step Two exterior Image"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Description */}
            <div className="w-full md:w-1/2 bg-white shadow-md hover:shadow-lg p-6">
              <h1 className="text-3xl font-bold text-red-700 mb-4">Step 3</h1>
              <h4 className="font-semibold text-xl text-dark mb-3">
                Enjoy the Results
              </h4>
              <p>
                Stand back and admire your home’s refreshed, vibrant look with
                lasting curb appeal!
              </p>
            </div>
            {/* Image */}
            <div className="w-full md:w-1/2">
              <Image
                src={exteriorThree}
                width={500}
                height={300}
                alt="Step Three exterior Image"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="flex flex-col items-center w-full md:w-1/3 bg-white shadow-lg p-6 bg-cover bg-center bg-[url('/exterior/exterior_bg.jpg')]">
          <h1 className="text-4xl text-center md:text-start font-bold text-red-700 mb-6">
            Exterior Services
          </h1>
          <ul className="space-y-3 text-xl text-white font-bold">
            <li className="flex items-center gap-2">
              {" "}
              Exterior House Painting
            </li>
            <li className="flex items-center gap-2"> Epoxy Flooring</li>
            <li className="flex items-center gap-2"> Power Washing</li>
            <li className="flex items-center gap-2"> Concrete Staining</li>
            <li className="flex items-center gap-2"> Deck Staining</li>
            <li className="flex items-center gap-2"> Wood Staining</li>
            <li className="flex items-center gap-2"> Fence Painting</li>
            <li className="flex items-center gap-2">
              {" "}
              Sanding & Preparatory Work
            </li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-red-700 text-white text-lg font-semibold shadow-md hover:bg-red-800 transition-all duration-300">
            <a href="/contact-us">Book a Consultation</a>
          </button>
        </div>
      </div>
    </div>
  );
}
