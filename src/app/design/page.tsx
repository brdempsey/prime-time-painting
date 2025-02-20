import Image from "next/image";

const designOne = "/design/choose_color.jpg";
const designTwo = "/design/handle_everything.jpg";
const designThree = "/design/enjoy_transformation.jpg";

export default function Design() {
  return (
    <div className="paint_background pt-20 text-black px-4 lg:px-20">
      {/* Title */}
      <div className="flex flex-col items-center text-center pb-10">
        <h1 className="text-4xl font-bold">DESIGN</h1>
        <h2 className="text-3xl">Relax and Let Us Handle the Rest!</h2>
        <p className="text-base text-body-color">
          Choosing the perfect paint color is all you need to do.
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
                Choose Your Perfect Color
              </h4>
              <p>
                Select the ideal paint color for your space with the help of our
                friendly and talented design team. We’ll guide you through the
                selection process to ensure the perfect match for your vision.
              </p>
            </div>
            {/* Image */}
            <div className="w-full md:w-1/2">
              <Image
                src={designOne}
                width={500}
                height={300}
                alt="Step One design Image"
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
                We Handle Everything
              </h4>
              <p>
                Our professional painters take care of all the prep work,
                painting, and cleanup—ensuring a smooth, efficient, and
                high-quality finish while maintaining a clean and safe
                workspace.
              </p>
            </div>
            {/* Image */}
            <div className="w-full md:w-1/2">
              <Image
                src={designTwo}
                width={500}
                height={300}
                alt="Step Two design Image"
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
                Enjoy the Transformation
              </h4>
              <p>
                Sit back, relax, and watch your space come to life with a
                flawless, stress-free painting experience.
              </p>
            </div>
            {/* Image */}
            <div className="w-full md:w-1/2">
              <Image
                src={designThree}
                width={500}
                height={300}
                alt="Step Three design Image"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="flex flex-col items-center w-full md:w-1/3 bg-white shadow-lg p-6 bg-cover bg-center bg-[url('/design/design_services_bg.jpg')]">
          <h1 className="text-4xl text-center md:text-start font-bold text-red-700 mb-6">Design Services</h1>
          <ul className="space-y-3 text-xl text-white font-bold">
            <li className="flex items-center gap-2"> Color Consultation</li>
            <li className="flex items-center gap-2"> Custom Accent Walls</li>
            <li className="flex items-center gap-2"> Faux Finishes</li>
            <li className="flex items-center gap-2"> Ombre & Gradient Walls</li>
            <li className="flex items-center gap-2"> Metallic & Pearl Finishes</li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-red-700 text-white text-lg font-semibold shadow-md hover:bg-red-800 transition-all duration-300">
            Book a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
