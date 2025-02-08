import { FaHandshake, FaHouseUser } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";

export default function AboutUs() {
  return (
    <div className="roller_background relative p-8 flex flex-wrap gap-2 text-white lg:gap-10 sm:gap-4 justify-center sm:justify-start md:justify-start items-center">

      {/* Customer Focused */}
      <div className="flex flex-col items-center text-center space-y-2">
        <FaHandshake className="w-16 h-16 md:w-24 md:h-24 lg:w-42 lg:h-32" />

        <h1 className=" text-2xl  font-bold">Customer Focused</h1>
      </div>

      {/* Quality Driven */}
      <div className="flex flex-col items-center text-center space-y-2">
        <IoShieldCheckmark className="w-16 h-16 md:w-24 md:h-24 lg:w-42 lg:h-32" />
        <h1 className="text-2xl  font-bold">Quality Driven</h1>
      </div>

      {/* Locally Owned */}
      <div className="hidden sm:flex flex-col items-center text-center space-y-2">
        <FaHouseUser className="w-16 h-16 md:w-24 md:h-24 lg:w-42 lg:h-32" />
        <h1 className="text-2xl  font-bold">Locally Owned</h1>
      </div>
    </div>
  );
}

//Customer Focused
//Quality Driven
//Locally Owned
//satisfaction guaranteed
