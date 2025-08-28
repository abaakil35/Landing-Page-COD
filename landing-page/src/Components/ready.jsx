
const Ready = () => (
			<section className="w-full p-12 pt-14 bg-white text-center">
		<h2 className="text-4xl font-extrabold mb-6">Ready to Boost Your COD Sales?</h2>
		<p className="text-2xl text-gray-500 mb-12 max-w-3xl mx-auto">
			Join thousands of Shopify merchants who trust COD Rocket to manage their cash on delivery orders efficiently.
		</p>
		<div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
			<a
				href="#"
				className="px-10 py-5 rounded-lg font-bold text-lg border-2 border-transparent bg-white text-black shadow-sm hover:shadow-md transition-all"
				style={{
					borderImage: "linear-gradient(90deg, #36d1c4 0%, #5b6eff 100%) 1",
					borderStyle: "solid",
					borderWidth: "2px"
				}}
			>
				Install from Shopify App Store
			</a>
			<a
				href="#"
				className="px-10 py-5 rounded-lg font-bold text-lg border border-gray-300 bg-white text-black shadow-sm hover:shadow-md transition-all"
			>
				Schedule Demo
			</a>
		</div>
		<div className="text-lg text-gray-400">
			14-day free trial &bull; No credit card required &bull; Cancel anytime
		</div>
	</section>
);

export default Ready;
