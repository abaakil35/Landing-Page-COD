
const testimonials = [
	{
		name: "Sarah Johnson",
		role: "Fashion Store Owner",
		text: '"COD Rocket transformed our cash on delivery process. Our conversion rates increased by 40% within the first month!"',
		img: "https://randomuser.me/api/portraits/women/44.jpg"
	},
	{
		name: "Ahmed Hassan",
		role: "Electronics Retailer",
		text: '"The order management dashboard is incredible. We can track everything in real-time and our fake orders dropped significantly."',
		img: "https://randomuser.me/api/portraits/men/32.jpg"
	},
	{
		name: "Maria Garcia",
		role: "Beauty Products",
		text: '"Super easy to set up and the customer support is amazing. Highly recommend for any Shopify store offering COD!"',
		img: "https://randomuser.me/api/portraits/women/68.jpg"
	}
];

const Customers = () => (
		<section className="w-full p-12 bg-white">
		<div className="max-w-7xl mx-auto">
			<h2 className="text-4xl font-extrabold text-center mb-16">What Our Customers Say</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{testimonials.map((t, idx) => (
					<div key={idx} className="bg-gray-50 rounded-2xl shadow p-8 flex flex-col justify-between min-h-[320px]">
						<div>
							<div className="flex items-center mb-4">
								<span className="text-yellow-400 text-xl mr-2">★★★★★</span>
							</div>
							<p className="text-xl text-gray-700 mb-8">{t.text}</p>
						</div>
						<div className="flex items-center mt-auto">
							<img src={t.img} alt={t.name} className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-white shadow" />
							<div>
								<div className="font-bold text-lg">{t.name}</div>
								<div className="text-gray-500 text-base">{t.role}</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	</section>
);

export default Customers;
