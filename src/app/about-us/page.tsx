import Image from "next/image";

const goalOne = "/goal_1.png";
const goalTwo = "/goal_2.png";
const goalThree = "/goal_3.png";
const goalFour = "/goal_4.png";

export default function OurMission() {
  return (
    <div className="pt-14 text-black">
      {/* Hero Section */}
      <div className="mx-auto text-center flex justify-center px-4 py-32 lg:flex lg:h-full lg:items-start lg:justify-items-start bg-cover bg-center bg-[url('/our-mission-hero.png')]">
        <h1 className="text-6xl font-bold text-blue-700 text-center">
          About Us
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row paint_background p-4 gap-6">
        {/* Content Section */}
        <div className="flex flex-col gap-6 lg:w-1/2">
          <div className="flex flex-col text-center p-10 bg-white border-2 border-gray-300 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-bold mb-4 border-b-2 pb-2">
              Who We Are
            </h2>
            <p className="text-base">
              Welcome to{" "}
              <span className="text-red-700 font-bold">
                Primetime Painting and Remodeling
              </span>
              ! Locally owned by{" "}
              <span className="text-red-700 font-bold">
                Jorge Ibarra, Charlie Brunecz,
              </span>{" "}
              and <span className="text-red-700 font-bold">Matt Scott</span>,
              who share a combined 55 years of experience in the painting
              industry. At Primetime Painting and Remodeling, we pride ourselves
              on delivering top-notch painting services that transform spaces
              and bring visions to life. With a team of skilled and experienced
              painters, we offer a wide range of services, including residential
              painting, light commercial painting, siding replacement, and
              drywall repairs. Our commitment to quality and attention to detail
              ensures that every project, big or small, is completed to the
              highest standards. We use only the best materials and latest
              techniques to provide a flawless finish that lasts. Whether youre
              looking to refresh a single room or revamp an entire building,
              Primetime Painting and Remodeling is dedicated to making your
              painting experience smooth, efficient, and satisfying.
            </p>
          </div>

          <div className="flex flex-col text-center p-10 bg-white border-2 border-gray-300 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-bold mb-4 border-b-2 pb-2">
              What We Deliver
            </h2>
            <p className="text-base">
              Our most <span className="text-red-700 font-bold">important</span>{" "}
              goal is for you to love your home when we finish! From start to
              finish, we work with you to help walk you through the process. We
              give{" "}
              <span className="text-red-700 font-bold">free estimates</span>, we
              offer color and design services to help you achieve the look you
              want for your home, we love to educate! We will walk with you
              through your project to show you exactly what we are going to do,
              we will explain the benefits of the products that we use so you
              can make the best decision for your project, and most importantly,
              we don’t leave until you love your new paint job! We want you to
              brag to your neighbors, friends, and family about how much you
              loved your experience with us. Please leave a{" "}
              <span className="text-red-700 font-bold">Google review</span> and
              like and share our page on{" "}
              <span className="text-red-700 font-bold">
                Facebook and Instagram
              </span>
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex flex-col items-center md:flex-row lg:flex-col 2xl:flex-row items-start gap-6">
          <div className="flex flex-col gap-6">
            <Image
              src={goalOne}
              layout="intrinsic"
              width={500}
              height={300}
              className=" shadow-lg"
              alt="Goal Image 1"
            />
            <Image
              src={goalTwo}
              layout="intrinsic"
              width={500}
              height={300}
              className=" shadow-lg"
              alt="Goal Image 2"
            />
          </div>
          <div className="flex flex-col gap-6">
            <Image
              src={goalThree}
              layout="intrinsic"
              width={500}
              height={300}
              className=" shadow-lg"
              alt="Goal Image 3"
            />
            <Image
              src={goalFour}
              layout="intrinsic"
              width={500}
              height={300}
              className=" shadow-lg"
              alt="Goal Image 4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
