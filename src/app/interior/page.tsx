const blueBrush = "/paint_brush_background.png";

export default function Interior() {
  return (
    <section className="paint_background pt-20 lg:pt-[120px] flex flex-col">
      <div className="flex flex-col items-center">
        <div className="w-full">
          <div className="text-center mx-auto mb-12 lg:mb-20">
            <span className="text-3xl font-semibold text-lg text-primary mb-2 block">
              INTERIOR
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
              Transform Your Space with Expert Interior Painting!
            </h2>
            <p className="text-base text-body-color">
              Revitalize your homes interior space with our top-notch, Primetime
              interior painting services.
            </p>
          </div>
        </div>
      <div className="flex flex-col md:flex-row lg:flex-row">
        <div className="flex items-center flex-col">
          <div className="w-1/2 md:w-2/3 lg:w-2/3 px-4">
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
                Share Your Vision
              </h4>
              <p className="text-body-color">
                Tell us how you want to revitalize your space, and our experts
                will help you choose the perfect colors and finishes to match
                your style.
              </p>
            </div>
          </div>
          <div className="w-1/2 md:w-2/3 lg:w-2/3 ">
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
                Professional Painting, Done Right
              </h4>
              <p className="text-body-color">
                Our skilled painters use premium materials and innovative
                techniques to ensure a flawless, high-quality finish while
                prioritizing safety and efficiency.
              </p>
            </div>
          </div>
          <div className="w-1/2 md:w-2/3 lg:w-2/3">
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
                Enjoy Your Transformed Space
              </h4>
              <p className="text-body-color">
                Sit back and admire your beautifully refreshed interior, brought
                to life with expert craftsmanship and attention to detail.
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-full md:w--1/3 lg:w-1/3 min-h-[930px] bg-no-repeat bg-top flex items-start justify-center pt-4"
          style={{ backgroundImage: `url(${blueBrush})` }}
        >
          <h1 className="text-white text-3xl">Interior Services</h1>
        </div>
      </div>
      </div>
    </section>
  );
}
