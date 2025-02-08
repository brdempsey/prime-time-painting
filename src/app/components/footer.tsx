import Link from "next/link";
import Image from "next/image";

const logo = "/full_size_logo.jpg";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4 text-center md:text-left">
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start mb-6">
          <Image src={logo} width={100} height={100} alt="Prime Time Painting Logo" />
        </div>

        {/* Footer Navigation Links */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 text-center md:text-left">
          <div>
            <h3 className="font-bold text-lg mb-2">Services</h3>
            <ul>
              <li>
                <Link href="/design" className="hover:text-red-600">
                  Design
                </Link>
              </li>
              <li>
                <Link href="/interior" className="hover:text-red-600">
                  Interior
                </Link>
              </li>
              <li>
                <Link href="/exterior" className="hover:text-red-600">
                  Exterior
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">About Us</h3>
            <ul>
              <li>
                <Link href="#" className="hover:text-red-600">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-600">
                  Meet Our Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Quick Links</h3>
            <ul>
              <li>
                <Link href="/gallery" className="hover:text-red-600">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contactus" className="hover:text-red-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Contact</h3>
            <ul>
              <li>
                <a href="tel:+15555555555" className="hover:text-red-600">
                  (555) 555-5555
                </a>
              </li>
              <li>
                <a href="mailto:info@primetimepainting.com" className="hover:text-red-600">
                  email@email.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 text-sm text-gray-400">
          <p>&copy; 2025 PrimeTime Painting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
