import Image from "next/image";

const pic = "/contact-us.jpg";

export default function ContactUs() {
    return (
        <div className="paint_background pt-20 flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            {/* Heading Section */}
            <div className="text-center max-w-2xl mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch with Primetime Painting & Remodeling</h1>
                <p className="text-gray-600 leading-relaxed">
                    Have questions or ready to start your next painting project? Contact Primetime Painting & Remodeling today! 
                    With over 55 years of combined experience, our expert team is here to help transform your home or business 
                    with top-quality painting, siding replacement, and drywall repair services. Whether you need a fresh interior 
                    update or a complete exterior makeover, we ensure a seamless, stress-free experience with flawless results. 
                    Reach out to us today and let’s bring your vision to life!
                </p>
            </div>

            {/* Contact Form Section */}
            <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col md:flex-row w-full max-w-3xl">
                {/* Form Section */}
                <div className="md:w-1/2 md:pr-6">
                    <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Contact Us</h2>
                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input 
                                type="text" 
                                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input 
                                type="email" 
                                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                placeholder="Your Email"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Services</label>
                            <select 
                                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300">
                                <option value="">Select a service</option>
                                <option value="design">Design</option>
                                <option value="interior">Interior</option>
                                <option value="exterior">Exterior</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea 
                                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                rows={4}
                                placeholder="Your Message"
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition text-lg">
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
                    <Image 
                        src={pic} 
                        width={500} 
                        height={400} 
                        alt="Contact Us Image" 
                        className="rounded-lg w-full h-auto object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
