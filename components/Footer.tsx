import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div className="">
          <h1 className="text-3xl font-bold mb-4"><span className="text-gray-500">Vima</span> Blog</h1>
          <p className="text-gray-300 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
            reprehenderit, deserunt iusto consectetur commodi laborum expedita
            ipsam! Doloribus veniam aliquam voluptatibus cumque! Dolores rem
            quos at, consequatur nobis voluptatibus tempora deserunt commodi!
          </p>
        </div>
        <div className="">
          <h1 className="text-2xl font-bold mb-4">Vima Blog App</h1>
          <p className="text-sm text-gray-300">
            Sharing ideas, stories, and experiences through well-crafted
            articles and posts.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/about" className="hover:text-primary transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex gap-4">
            <a href="#" className="text-gray-300 hover:text-primary text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-300 hover:text-primary text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-300 hover:text-primary text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-300 hover:text-primary text-xl">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} BlogApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
