import Image from "next/image";

const one = "/why_ptp_3.jpg";
const two = "/why_ptp_2.jpg";

export default function WhyChoosePrimeTime() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row p-8 gap-4 paint_background">
      {/* Left Column - 30% Width */}
      <div className="w-full md:w-1/3">
        <Image
          src={one}
          width={1000}
          height={1000}
          alt="PrimeTime Painting Logo"
          layout="responsive"
          objectFit="cover"
        />
      </div>

      <div className="w-full md:w-1/3">
        <Image
          src={two}
          width={1000}
          height={1000}
          alt="PrimeTime Painting Logo"
          layout="responsive"
          objectFit="cover"
        />
      </div>

      {/* Right Column - 70% Width */}
      <div className="w-full md:w-2/3">
        <h1 className="text-5xl md:text-3xl lg:text-5xl font-bold my-4 text-red-700 text-center md:text-left">
          Why Choose PrimeTime Painting?
        </h1>

        {/* First Row of Cards */}
        <div className="flex flex-col md:flex-row gap-4 py-4 items-center md:justify-center lg:justify-start">
          <div className="max-w-sm min-h-[200px] rounded bg-white overflow-hidden shadow-lg flex flex-col">
            <div className="px-6 py-4 flex flex-col h-full">
              <div className="font-bold text-blue-700 text-2xl mb-2">
                Quality
              </div>
              <p className="text-gray-700 text-base flex-grow">
                We use top-quality paints and materials for a flawless finish,
                ensuring every project meets our high standards. Our commitment
                to detail and customer satisfaction means we strive to exceed
                expectations with every job.
              </p>
            </div>
          </div>

          <div className="max-w-sm min-h-[200px] rounded bg-white overflow-hidden shadow-lg flex flex-col">
            <div className="px-6 py-4 flex flex-col h-full">
              <div className="font-bold text-blue-700 text-2xl mb-2">
                Time Efficiency
              </div>
              <p className="text-gray-700 text-base flex-grow">
                We complete projects on time with an efficient workflow that
                maximizes productivity while minimizing disruptions. Our
                flexible scheduling ensures a seamless experience that fits your
                routine.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row of Cards */}
        <div className="flex flex-col md:flex-row gap-4 items-center md:justify-center lg:justify-start">
          <div className="max-w-sm min-h-[200px] rounded bg-white overflow-hidden shadow-lg flex flex-col">
            <div className="px-6 py-4 flex flex-col h-full">
              <div className="font-bold text-blue-700 text-2xl mb-2">
                Expertise
              </div>
              <p className="text-gray-700 text-base flex-grow">
                Our skilled painters use the latest techniques to deliver expert
                results across residential and commercial projects.
              </p>
            </div>
          </div>

          <div className="max-w-sm min-h-[200px] rounded bg-white overflow-hidden shadow-lg flex flex-col">
            <div className="px-6 py-4 flex flex-col h-full">
              <div className="font-bold text-blue-700 text-2xl mb-2">
                Safety
              </div>
              <p className="text-gray-700 text-base flex-grow">
                We prioritize safety, offer eco-friendly paint options, and
                provide fully insured services for your peace of mind.
              </p>
            </div>
          </div>
        </div>
        <a
          href="/why-choose-primetime"
          className="w-1/4 block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 text-center transition-colors mt-4"
        >
          More Info
        </a>
      </div>
    </div>
  );
}
