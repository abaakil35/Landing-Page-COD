import logo from "../assets/logo_white.png";

const socialLinks = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    svg: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
      </svg>
    ),
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    svg: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    svg: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.25 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z" />
      </svg>
    ),
  },
];

const Footer = () => (
  <footer className="w-full bg-[#5e255dff] text-gray-300 pt-16 pb-8 px-23 ">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center md:items-start text-center md:text-left gap-12 mb-8">
      {/* Logo and description */}
      <div className="md:w-1/4">
        <div className="flex items-center mb-4">
          <div className="w-[100px] h-[32px]rounded-md flex items-center justify-center mr-4 overflow-hidden">
            <img
              src={logo}
              alt="COD Rocket Logo"
              className="h-6 object-contain"
            />
          </div>
        </div>
        <p className="mb-6 text-base">
          The ultimate cash on delivery solution for Shopify stores. Streamline
          your COD process and boost sales.
        </p>
        <div className="flex gap-4">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="bg-[#232b36] hover:bg-[#1a202c] p-2 rounded-full transition-colors"
            >
              {link.svg}
            </a>
          ))}
        </div>
      </div>
      {/* Product */}
      <div className="md:w-1/4">
        <h3 className="text-lg font-bold text-white mb-4">Product</h3>
        <ul className="space-y-2 text-base">
          <li>
            <a href="#features" className="hover:underline">
              Features
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:underline">
              Pricing
            </a>
          </li>
          <li>
            <a href="#demo" className="hover:underline">
              Demo
            </a>
          </li>
          <li>
            <a href="#api" className="hover:underline">
              API
            </a>
          </li>
        </ul>
      </div>
      {/* Support */}
      <div className="md:w-1/4">
        <h3 className="text-lg font-bold text-white mb-4">Support</h3>
        <ul className="space-y-2 text-base">
          <li>
            <a href="#help" className="hover:underline">
              Help Center
            </a>
          </li>
          <li>
            <a href="#docs" className="hover:underline">
              Documentation
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#status" className="hover:underline">
              Status
            </a>
          </li>
        </ul>
      </div>
      {/* Company */}
      <div className="md:w-1/4">
        <h3 className="text-lg font-bold text-white mb-4">Company</h3>
        <ul className="space-y-2 text-base">
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#blog" className="hover:underline">
              Blog
            </a>
          </li>
          <li>
            <a href="#privacy" className="hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#terms" className="hover:underline">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
    </div>
    <hr className="border-gray-700 mb-6" />
    <div className="text-center text-gray-400 text-sm">
      © 2024 COD Rocket. All rights reserved.
    </div>
  </footer>
);

export default Footer;
