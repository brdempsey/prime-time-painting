import Image from "next/image";

const one = "/why_ptp_3.jpg";
const two = "/why_ptp_2.jpg";

export default function WhyChoosePrimeTime() {
  return (
    <div className="flex flex-col md:flex-row p-8 gap-6">
      {/* Left Column - 30% Width */}
      <div className="w-full md:w-1/3">
        <Image 
          src={one} 
          width={1000} 
          height={1000} 
          alt="Prime Time Painting Logo" 
          layout="responsive" 
          objectFit="cover"
        />
      </div>
      
      <div className="w-full md:w-1/3">
        <Image 
          src={two} 
          width={1000} 
          height={1000} 
          alt="Prime Time Painting Logo" 
          layout="responsive" 
          objectFit="cover"
        />
      </div>

      {/* Right Column - 70% Width */}
      <div className="w-full md:w-2/3">
        <h1 className=" md:text-3xl lg:text-6xl font-bold text-red-700">Why Choose Prime Time Painting?</h1>
      </div>
    </div>
  );
}
