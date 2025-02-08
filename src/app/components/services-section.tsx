import Image from "next/image";

const design = "/services_design.jpg";
const interior = "/services_interior.jpg";
const exterior = "/services_exterior.jpg";

export default function ServicesSection() {
  return (
    <section
      id="features"
      className="text-black w-full paint_background mx-auto px-4 space-y-6 py-8 md:py-12 lg:py-20"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-5xl  leading-[1.1] md:text-6xl text-red-700">
          Services
        </h2>

        <p className=" max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          At{" "}
          <strong className="text-red-700">
            PrimeTime Painting & Remodeling
          </strong>{" "}
          we deliver top-quality results with premium materials, skilled
          professionals, efficient service, and a commitment to safety and
          customer satisfaction.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[100rem] md:grid-cols-3">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-white  shadow-lg overflow-hidden hover:shadow-xl transition-all">
          <div className="relative w-full">
            <Image
              src={design}
              alt="design pic"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>

          <div className="p-5 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Design</h3>
            </div>

            <div className="flex justify-between items-center">
              <p className="">
                Expert Design & Flawless Painting. Our design team helps you
                choose the perfect color, and our painters bring it to life with
                precision, efficiency, and a clean workspace. Sit back and enjoy
                the transformation!
              </p>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3  transition-colors">
              More Info
            </button>
          </div>
        </div>
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-white  shadow-lg overflow-hidden hover:shadow-xl transition-all">
          <div className="relative w-full">
            <Image
              src={interior}
              alt="interior pic"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>

          <div className="p-5 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Interior</h3>
            </div>

            <div className="flex justify-between items-center">
              <p className="mb-6">
              Elevate Your Interior! Our expert painters use premium materials
              to refresh your space with flawless, lasting results. Experience
              the Primetime touch!
              </p>
              
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 transition-colors">
              More Info
            </button>
          </div>
        </div>
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-white  shadow-lg overflow-hidden hover:shadow-xl transition-all">
          <div className="relative w-full">
            <Image
              src={exterior}
              alt="exterior pic"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>

          <div className="p-5 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Exterior</h3>
            </div>

            <div className="flex justify-between items-center">
              <p className="mb-5">
              Boost Your Curb Appeal! Our expert exterior painting enhances your
              home with durable, high-quality finishes. Trust Primetime for a
              beautiful, lasting transformation!
              </p>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3  transition-colors">
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
