
export default function GoalSection() {
    return (
      <div className="bg-white w-full py-16 px-6 flex flex-col items-center">
        <div className="max-w-6xl">
          <h1 className="text-5xl font-extrabold text-red-700 text-center lg:text-left mb-6">
            Our Goal
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed text-center lg:text-left">
            <strong className="text-red-700">Primetime Premium Service:</strong> Our most important goal is for you to 
            love your home when we get finished! From start to finish, we work with you to 
            guide you through the process. We offer <strong className="text-red-700">free estimates</strong>, color and design 
            services to help you achieve the perfect look for your home.
            <br /><br />
            We love to educate! We walk with you through your project, explaining exactly what 
            we’ll do and the benefits of the products we use so you can make the best decisions. 
            Most importantly, <strong className="text-red-700">we don’t leave until you love your new paint job!</strong>
            <br /><br />
            We want you to brag to your neighbors, friends, and family about your experience 
            with us. <strong className="text-red-700">Please leave a Google review</strong> and follow us on Facebook and Instagram!
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              className="font-extrabold block w-50 rounded-sm bg-red-600 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:ring-3 focus:outline-hidden sm:w-auto"
              href="/about-us"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    );
  }
  