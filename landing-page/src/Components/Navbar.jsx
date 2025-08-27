

import logo from "../assets/logo.png";

const Navbar = () => {
	return (
			<nav className="w-full flex items-center justify-between py-4 px-8 border-b border-gray-100 fixed top-0 left-0 z-50 bg-transparent">
				<div className="flex items-center gap-12">
					<img src={logo} alt="Logo" className="h-6 w-auto mr-8" />
					<a href="#features" className="text-gray-700 text-lg font-medium hover:text-blue-600 transition-colors">Features</a>
					<a href="#pricing" className="text-gray-700 text-lg font-medium hover:text-blue-600 transition-colors">Pricing</a>
					<a href="#demo" className="text-gray-700 text-lg font-medium hover:text-blue-600 transition-colors">Demo</a>
				</div>
				   <a
					   href="#install"
					   className="px-6 py-2 rounded-lg font-bold text-lg text-white bg-purple-600 hover:bg-purple-700 transition-transform duration-200 transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
				   >
					   Install Now
				   </a>
			</nav>
	);
};

export default Navbar;
