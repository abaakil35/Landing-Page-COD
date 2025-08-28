
const steps = [
	{
		title: "Install & Setup",
		desc: "Install COD Rocket from the Shopify App Store and customize your COD form settings in minutes.",
	},
	{
		title: "Customize Forms",
		desc: "Design beautiful COD forms that match your brand and collect the information you need from customers.",
	},
	{
		title: "Manage Orders",
		desc: "Track, verify, and manage all your COD orders from one central dashboard with automated workflows.",
	},
];

const HowCODWorks = () => (
	<section className="w-full py-16 px-4 bg-white">
		<div className="max-w-6xl mx-auto">
			<h2 className="text-4xl font-extrabold text-center mb-4">How COD Rocket Works</h2>
			<p className="text-2xl text-gray-500 text-center mb-12 max-w-3xl mx-auto">
				Get started in minutes with our simple 3-step process
			</p>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
				{steps.map((step, idx) => (
					<div key={idx} className="flex flex-col items-center text-center">
						<div className="mb-6">
							<div className="w-28 h-28 rounded-full flex items-center justify-center mx-auto text-4xl font-bold text-white" style={{background: 'linear-gradient(90deg, #36d1c4 0%, #5b6eff 100%)'}}>
								{idx + 1}
							</div>
						</div>
						<h3 className="text-2xl font-bold mb-2">{step.title}</h3>
						<p className="text-gray-500 text-lg">{step.desc}</p>
					</div>
				))}
			</div>
		</div>
	</section>
);

export default HowCODWorks;
