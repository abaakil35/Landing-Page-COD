const Ready = () => (
  <section className="relative w-full py-20 bg-[#FCFCFC] text-center overflow-hidden">
    {/* Decorative blurred circles */}
    <div className="absolute top-1/2 -translate-y-1/2 -left-24 w-72 h-72 bg-[#9d3ecb]/20 rounded-full blur-3xl opacity-60 z-0" />
    <div className="absolute top-1/2 -translate-y-1/2 -right-24 w-72 h-72 bg-[#5affff]/20 rounded-full blur-3xl opacity-60 z-0" />
    <div className="max-w-4xl mx-auto relative z-10">
      <div className="flex items-center justify-center mb-4">
        <span className="inline-block w-16 h-2 rounded-full bg-gradient-to-r from-[#9d3ecb] via-[#a259c9] to-[#702c91] opacity-90 shadow-md mr-3" />
        <span className="uppercase tracking-widest text-xs font-semibold text-[#702c91]">
          Get Started
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#2d123a] drop-shadow-sm tracking-tight">
        Ready to Boost Your COD Sales?
      </h2>
      <p className="text-lg md:text-2xl text-[#3f3f3f] mb-12 max-w-3xl mx-auto">
        Join thousands of Shopify merchants who trust COD Rocket to manage their
        cash on delivery orders efficiently.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
        <a
          href="#"
          className="px-10 py-5 rounded-lg font-bold text-lg bg-gradient-to-r from-[#9d3ecb] via-[#a259c9] to-[#702c91] text-white shadow-md hover:shadow-xl transition-all border-2 border-transparent"
        >
          Install from Shopify App Store
        </a>
        <a
          href="#"
          className="px-10 py-5 rounded-lg font-bold text-lg border-2 border-[#9d3ecb] bg-white text-[#2d123a] shadow-md hover:bg-[#f9f4f9] hover:shadow-xl transition-all"
        >
          Schedule Demo
        </a>
      </div>
      <div className="text-base md:text-lg text-[#702c91] opacity-80">
        14-day free trial &bull; No credit card required &bull; Cancel anytime
      </div>
    </div>
  </section>
);

export default Ready;
