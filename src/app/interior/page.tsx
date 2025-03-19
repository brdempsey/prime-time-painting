import Image from "next/image";

const interiorOne = "/interior/interior_step_1.jpg";
const interiorTwo = "/interior/interior_step_2.jpg";
const interiorThree = "/interior/interior_step_3.jpg";

export default function Interior() {
  return (
    <div className="paint_background pt-20 text-black px-4 lg:px-20">
      {/* Title */}
      <div className="flex flex-col items-center text-center pb-10">
        <h1 className="text-4xl font-bold">INTERIOR</h1>
        <h2 className="text-3xl">
          Transform Your Space with Expert Interior Painting!
        </h2>
        <p className="text-base text-body-color">
          Revitalize your homes interior space with our top-notch, PrimeTime
          interior painting services.
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
                Share Your Vision
              </h4>
              <p>
                Tell us how you want to revitalize your space, and our experts
                will help you choose the perfect colors and finishes to match
                your style.
              </p>
            </div>
            {/* Image */}
            <div className="w-full md:w-1/2">
              <Image
                src={interiorOne}
                width={500}
                height={300}
                alt="Step One interior Image"
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
                Professional Painting, Done Right
              </h4>
              <p>
                Our skilled painters use premium materials and innovative
                techniques to ensure a flawless, high-quality finish while
                prioritizing safety and efficiency.
              </p>
            </div>
            {/* Image */}
            <div className="w-full md:w-1/2">
              <Image
                src={interiorTwo}
                width={500}
                height={300}
                alt="Step Two interior Image"
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
                Enjoy Your Transformed Space
              </h4>
              <p>
                Sit back and admire your beautifully refreshed interior, brought
                to life with expert craftsmanship and attention to detail.
              </p>
            </div>
            {/* Image */}
            <div className="w-full md:w-1/2">
              <Image
                src={interiorThree}
                width={500}
                height={300}
                alt="Step Three interior Image"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="flex flex-col items-center w-full md:w-1/3 bg-white shadow-lg p-6 bg-cover bg-center bg-[url('/interior/interior_bg.jpg')]">
          <h1 className="text-4xl text-center md:text-start font-bold text-red-700 mb-6">
            Interior Services
          </h1>
          <ul className="space-y-3 text-xl text-white font-bold">
            <li className="flex items-center gap-2">
              {" "}
              Interior House Painting
            </li>
            <li className="flex items-center gap-2"> Kitchen Painting</li>
            <li className="flex items-center gap-2"> Cabinet Painting</li>
            <li className="flex items-center gap-2"> Bathroom Painting</li>
            <li className="flex items-center gap-2">Bedroom Painting</li>
            <li className="flex items-center gap-2">Wallpaper Removal</li>
            <li className="flex items-center gap-2">Drywall Repair</li>
            <li className="flex items-center gap-2">Popcorn Ceiling Removal</li>
            <li className="flex items-center gap-2">Specialty Texture Painting</li>

          </ul>
          <button className="mt-6 px-6 py-3 bg-red-700 text-white text-lg font-semibold shadow-md hover:bg-red-800 transition-all duration-300">
            Book a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
