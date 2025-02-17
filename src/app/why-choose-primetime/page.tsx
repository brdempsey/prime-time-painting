import { RiPaintFill } from "react-icons/ri";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegThumbsUp } from "react-icons/fa";
import { LuAlarmClock } from "react-icons/lu";
import {
  FaRegCheckSquare,
  FaAward,
  FaRegLightbulb,
  FaPercent,
  FaRecycle,
  FaFileContract
} from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

export default function WhyChoosePrimeTime() {
  return (
    <div className="pt-20 pb-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-red-700 font-semibold tracking-wide uppercase">
            PrimeTime Painting
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Why Choose PrimeTime?
          </p>
          <p className="mt-4 max-w-2xl text-xl  lg:mx-auto">
            Discover what sets PrimeTime Painting & Remodeling apart—exceptional
            quality, reliability, and a commitment to customer satisfaction!
          </p>
        </div>

        {/* Quality */}
        <div className="mt-10">
          <div>
            <h2 className="text-3xl pb-4 font-bold">Quality</h2>
          </div>
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white">
                  <RiPaintFill size={25} />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium">
                  Premium Materials
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-700">
                We use only the highest quality paints and materials to ensure a
                flawless finish.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white">
                  <FaMagnifyingGlass size={25} />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium">
                  Attention to Detail
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-700">
                Every project is meticulously inspected to meet our rigorous
                standards.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white">
                  <FaRegThumbsUp size={25} />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium">
                  Customer Satisfaction
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-700">
                Our goal is to exceed your expectations with every job.
              </dd>
            </div>
          </dl>
        </div>

        {/* Time Efficiency */}
        <div className="mt-10">
          <div>
            <h2 className="text-3xl pb-4 font-bold">Time Efficiency</h2>
          </div>
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white">
                  <LuAlarmClock size={25} />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium">
                  Prompt Service
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-700">
                We respect your time and complete projects within the agreed
                timeframe.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white">
                  <FaRegCheckSquare size={25} />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium">
                  Efficient Processes
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-700">
                Our streamlined workflow minimizes downtime and maximizes
                productivity.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white">
                  <LuCalendarDays size={25} />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium">
                  Flexible Scheduling
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-700">
                We work around your schedule to minimize disruption to your
                daily routine.
              </dd>
            </div>
          </dl>
        </div>

        {/* Expertise */}
        <div className="mt-10">
          <div>
            <h2 className="text-3xl pb-4 font-bold">Expertise</h2>
          </div>
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white">
                  <FaAward size={25} />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium">
                  Skilled Professionals
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-700">
                Our team consists of experienced painters with extensive
                training.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white">
                  <FaRegLightbulb size={25} />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium">
                  Innovative Techniques
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-700">
                We stay updated with the latest painting methods and
                technologies.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white">
                  <FaPercent size={25} />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium">
                  Comprehensive Services
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-700">
                From residential to commercial projects, we handle it all with
                expertise.
              </dd>
            </div>
          </dl>
        </div>

        {/* Safety */}
        <div className="mt-10">
          <div>
            <h2 className="text-3xl pb-4 font-bold">Safety</h2>
          </div>
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white">
                <IoShieldCheckmarkSharp size={25} />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium">
                  Safe Practices
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-700">
                We adhere to strict safety protocols to protect our team and
                your property.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white">
                  <FaRecycle size={25} />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium">
                  Eco-Friendly Options
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-700">
                We offer environmentally friendly paint choices to ensure a safe
                environment.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white">
                  <FaFileContract size={25} />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium">
                  Insurance Coverage
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-700">
                Our fully insured services provide peace of mind for all our
                clients.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
