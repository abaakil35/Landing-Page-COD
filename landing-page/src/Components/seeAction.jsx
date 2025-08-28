
const checklist = [
	"Easy form customization with drag & drop builder",
	"Real-time order tracking and management",
	"Automated customer notifications and confirmations"
];

import demoImage from "../assets/ChatGPT Image Aug 28, 2025, 11_43_20 AM.png";

const SeeAction = () => (
		<section className="w-full p-12 bg-gray-50">
	   <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-x-16">
			{/* Left: Text and checklist */}
			   <div className="flex-1 mb-12 md:mb-0">
				   <h2 className="text-4xl font-extrabold mb-8">See COD Rocket in Action</h2>
				   <p className="text-2xl md:text-2xl text-gray-500 mb-10 max-w-2xl">
					   Watch how easy it is to set up and manage cash on delivery orders with COD Rocket's intuitive interface.
				   </p>
				   <ul className="space-y-6">
					   {checklist.map((item, idx) => (
						   <li key={idx} className="flex items-center text-lg text-gray-700">
							   <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 mr-4">
								   <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M5 10.5l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
							   </span>
							   {item}
						   </li>
					   ))}
				   </ul>
			   </div>
			   {/* Right: Demo Image */}
			   <div className="flex-1 flex justify-center items-center">
				   <div className="relative w-[600px] h-[400px] rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden">
					   <img src={demoImage} alt="Demo section" className="object-cover w-full h-full" />

				   </div>
			   </div>
		</div>
	</section>
);

export default SeeAction;
