import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container-custom px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                {/* <span className="text-white font-bold text-lg">L</span> */}
                <img src="/logo-s.png" alt="" />
              </div>
              <span className="font-geist text-xl font-bold text-gray-900">
                Mankrish Global
              </span>
            </div>
            <p className="font-manrope text-gray-600 text-sm leading-relaxed max-w-md">
              A dynamic startup revolutionizing healthcare and household
              automation with AI-powered robotics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-manrope font-bold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="font-manrope text-gray-600 hover:text-primary-600 text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="font-manrope text-gray-600 hover:text-primary-600 text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="font-manrope text-gray-600 hover:text-primary-600 text-sm transition-colors">
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-manrope font-bold text-gray-900 mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">
                <span className="font-manrope font-medium">Email:</span>{" "}
                contact@logicboots.com
              </li>
              <li className="text-gray-600 text-sm">
                <span className="font-manrope font-medium">Location:</span>{" "}
                Tides, IIT Roorkee, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-manrope text-gray-500 text-sm">
            © 2025 Mankrish Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
