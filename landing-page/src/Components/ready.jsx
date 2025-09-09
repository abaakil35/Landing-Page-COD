const Ready = () => (
  <section className="relative w-full py-12 lg:py-20 px-4 lg:px-6 bg-[#FCFCFC] text-center overflow-hidden">
    {/* Decorative blurred circles */}
    <div className="absolute top-1/2 -translate-y-1/2 -left-12 lg:-left-24 w-48 lg:w-72 h-48 lg:h-72 bg-[#9d3ecb]/20 rounded-full blur-3xl opacity-60 z-0" />
    <div className="absolute top-1/2 -translate-y-1/2 -right-12 lg:-right-24 w-48 lg:w-72 h-48 lg:h-72 bg-[#5affff]/20 rounded-full blur-3xl opacity-60 z-0" />
    <div className="max-w-4xl mx-auto relative z-10 px-4">
      <div className="mx-auto w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-[#e5e5e5] py-12 md:py-16 px-8 flex flex-col items-center">
        <div className="flex items-center justify-center mb-4">
          <span className="inline-block w-12 lg:w-16 h-2 rounded-full bg-gradient-to-r from-[#9d3ecb] via-[#a259c9] to-[#702c91] opacity-90 shadow-md mr-3" />
          <span className="uppercase tracking-widest text-xs font-semibold text-[#702c91]">
            Get Started
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6 text-[#2d123a] drop-shadow-sm tracking-tight">
          Ready to Boost Your COD Sales?
        </h2>
        <p className="text-base md:text-lg lg:text-2xl text-[#3f3f3f] mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
          Join thousands of Shopify merchants who trust COD Rocket to manage
          their cash on delivery orders efficiently.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 lg:gap-6 mb-6 lg:mb-8 px-2">
          <a
            href="#"
            className="w-full md:w-auto px-6 lg:px-10 py-4 lg:py-5 rounded-lg font-bold text-base lg:text-lg bg-[#5e255dff] text-white shadow-md hover:shadow-xl transition-all border-2 border-transparent text-center"
          >
            Install from Shopify App Store
          </a>
          <a
            href="#"
            className="w-full md:w-auto px-6 lg:px-10 py-4 lg:py-5 rounded-lg font-bold text-base lg:text-lg border-2 border-[#9d3ecb] bg-white text-[#2d123a] shadow-md hover:bg-[#f9f4f9] hover:shadow-xl transition-all text-center"
          >
            Schedule Demo
          </a>
        </div>
        <div className="text-sm md:text-base lg:text-lg text-[#702c91] opacity-80 px-4">
          14-day free trial &bull; No credit card required &bull; Cancel anytime
        </div>
      </div>
    </div>
  </section>
);

export default Ready;
