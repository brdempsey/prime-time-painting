export default function Design() {
  return (
    <section className="paint_background pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] flex flex-col items-center">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
              <span className="text-3xl font-semibold text-lg text-primary mb-2 block">
                DESIGN
              </span>
              <h2
                className="
                          font-bold
                          text-3xl
                          sm:text-4xl
                          md:text-[40px]
                          text-dark
                          mb-4
                          "
              >
                Relax and Let Us Handle the Rest!
              </h2>
              <p className="text-base text-body-color">
                Choosing the perfect paint color is all you need to do
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div
                className="
                       p-10
                       md:px-7
                       xl:px-10
                       rounded-[20px]
                       bg-white
                       shadow-md
                       hover:shadow-lg
                       mb-8
                       "
              >
                <div
                  className="
                          w-[100px]
                          h-[50px]
                          flex
                          items-start
                          justify-start
                          bg-primary
                          rounded-2xl
                          "
                >
                  <h1 className="text-3xl font-bold text-red-700">Step 1</h1>
                </div>
                <h4 className="font-semibold text-xl text-dark mb-3">
                  Choose Your Perfect Color
                </h4>
                <p className="text-body-color">
                  Select the ideal paint color for your space with the help of
                  our friendly and talented design team. We’ll guide you through
                  the selection process to ensure the perfect match for your
                  vision.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div
                className="
                       p-10
                       md:px-7
                       xl:px-10
                       rounded-[20px]
                       bg-white
                       shadow-md
                       hover:shadow-lg
                       mb-8
                       "
              >
                <div
                  className="
                          w-[100px]
                          h-[50px]
                          flex
                          items-start
                          justify-start
                          bg-primary
                          rounded-2xl
                          "
                >
                  <h1 className="text-3xl font-bold text-red-700">Step 2</h1>
                </div>
                <h4 className="font-semibold text-xl text-dark mb-3">
                  We Handle Everything
                </h4>
                <p className="text-body-color">
                  Our professional painters take care of all the prep work,
                  painting, and cleanup—ensuring a smooth, efficient, and
                  high-quality finish while maintaining a clean and safe
                  workspace.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div
                className="
                       p-10
                       md:px-7
                       xl:px-10
                       rounded-[20px]
                       bg-white
                       shadow-md
                       hover:shadow-lg
                       mb-8
                       "
              >
                <div
                  className="
                          w-[100px]
                          h-[50px]
                          flex
                          items-start
                          justify-start
                          bg-primary
                          rounded-2xl
                          "
                >
                  <h1 className="text-3xl font-bold text-red-700">Step 3</h1>
                </div>
                <h4 className="font-semibold text-xl text-dark mb-3">
                  Enjoy the Transformation
                </h4>
                <p className="text-body-color">
                  Sit back, relax, and watch your space come to life with a
                  flawless, stress-free painting experience.
                </p>
              </div>
            </div>
          </div>
          {/* <div>
            <h1>Design Services</h1>
          </div> */}
        </div>
      </div>
    </section>
  );
}
