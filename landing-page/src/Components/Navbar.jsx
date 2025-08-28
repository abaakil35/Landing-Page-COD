

import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navLinks = [
	{ to: "/features", label: "Features" },
	{ to: "/pricing", label: "Pricing" },
	{ to: "/demo", label: "Demo" },
];

const Navbar = () => {
	const location = useLocation();
	return (
		<nav className="w-full flex items-center justify-between py-4 px-8 border-b border-gray-100 sticky top-0 left-0 z-50 bg-white bg-opacity-90 backdrop-blur">
			<div className="flex items-center">
				<img src={logo} alt="Logo" className="h-6 w-auto" />
			</div>
			<div className="flex-1 flex justify-center gap-12">
				{navLinks.map((link) => {
					const isActive = location.pathname === link.to;
					return (
						<motion.div
							key={link.to}
							whileTap={{ scale: 0.92 }}
							className="relative"
						>
							<Link
								to={link.to}
								className={`text-gray-700 text-lg font-medium hover:text-blue-600 transition-colors px-1 ${isActive ? "text-blue-600" : ""}`}
							>
								{link.label}
								{isActive && (
									<motion.span
										layoutId="nav-underline"
										className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 rounded"
										initial={{ opacity: 0, y: 4 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: 4 }}
										transition={{ type: "spring", stiffness: 400, damping: 30 }}
									/>
								)}
							</Link>
						</motion.div>
					);
				})}
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
