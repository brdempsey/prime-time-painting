
export default function GoalSection() {
    return (
      <div className="bg-white w-full py-16 px-6 flex flex-col items-center">
        <div className="max-w-6xl">
          <h1 className="text-5xl font-extrabold text-red-700 text-center lg:text-left mb-6">
            Our Goal
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed text-center lg:text-left">
            <strong className="text-red-700">PrimeTime Premium Service:</strong> Our main goal is to ensure you love your home when 
            the project is complete! From start to finish, we guide you through the entire process, offering 
             <strong className="text-red-700"> free estimates</strong>, and color/design 
            services to help you achieve the perfect look for your space.
            <br /><br />
           We're passionate about educating you throughout your project. We'll walk you through every step, explaining what 
           we'll do and the benefits of the products we use, so you can make informed decisions.
            Most importantly, <strong className="text-red-700">we don’t leave until you love your new paint job!</strong>
            <br /><br />
            We want you to be so thrilled with your experience that you'll brag to your neighbors, friends and family! 
             <strong className="text-red-700"> Please take a moment to leave us a Google review</strong> and 
             follow us on <strong><a className="text-red-700" href="https://www.facebook.com/profile.php?id=61573762149968">Facebook</a></strong> and Instagram to stay connected!
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
  