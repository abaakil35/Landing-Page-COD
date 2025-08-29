const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fashion Store Owner",
    text: '"COD Rocket transformed our cash on delivery process. Our conversion rates increased by 40% within the first month!"',
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ahmed Hassan",
    role: "Electronics Retailer",
    text: '"The order management dashboard is incredible. We can track everything in real-time and our fake orders dropped significantly."',
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Maria Garcia",
    role: "Beauty Products",
    text: '"Super easy to set up and the customer support is amazing. Highly recommend for any Shopify store offering COD!"',
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Customers = () => (
  <section className="relative w-full py-20 px-6 md:px-16 bg-gradient-to-br from-white via-[#f9f4f9] to-[#f7eaf7] overflow-hidden">
    {/* Decorative blurred circle */}
    <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#9d3ecb]/20 rounded-full blur-3xl opacity-60 z-0" />
    <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#5affff]/20 rounded-full blur-3xl opacity-60 z-0" />
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="flex items-center justify-center mb-4">
        <span className="inline-block w-16 h-2 rounded-full bg-gradient-to-r from-[#9d3ecb] via-[#a259c9] to-[#702c91] opacity-90 shadow-md mr-3" />
        <span className="uppercase tracking-widest text-xs font-semibold text-[#702c91]">
          Testimonials
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#2d123a] drop-shadow-sm tracking-tight">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border-2 border-[#9d3ecb]/10 p-8 flex flex-col justify-between min-h-[320px] transition-transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <div>
              <div className="flex items-center mb-4">
                <span className="text-xl mr-2 bg-gradient-to-r from-[#FFD700] via-[#9d3ecb] to-[#702c91] bg-clip-text text-transparent">
                  ★★★★★
                </span>
              </div>
              <p className="text-lg md:text-xl text-[#3f3f3f] mb-8 italic">
                {t.text}
              </p>
            </div>
            <div className="flex items-center mt-auto">
              <img
                src={t.img}
                alt={t.name}
                className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-white shadow"
              />
              <div>
                <div className="font-bold text-base md:text-lg text-[#2d123a]">
                  {t.name}
                </div>
                <div className="text-[#702c91] text-sm md:text-base">
                  {t.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Customers;
