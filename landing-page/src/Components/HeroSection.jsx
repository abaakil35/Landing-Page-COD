import image from "./../assets/1597b2df-ea5c-47eb-adc8-cb4b80b8755c_removalai_preview.png";


const HeroSection = () => {

    return (
    <section className="hero-section flex flex-col md:flex-row items-center justify-between bg-white px-7 md:px-16 pb-7 md:pb-16 gap-x-8">
            <div className="hero-content flex flex-col justify-center md:items-start items-center text-left max-w-xl w-full">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-gray-900">
                    Streamline <span className="text-purple-600">Cash on<br className='block md:hidden'/> Delivery</span> for Your<br className='hidden md:block'/> Shopify Store
                </h1>
                <p className="mb-8 text-lg md:text-xl text-gray-700 font-medium">
                    Manage COD orders with customizable forms, workflows, and full order tracking – all in one app.
                </p>
                <div className="flex gap-4 w-full md:w-auto">
                    <button className="px-7 py-3 rounded-lg font-semibold text-lg text-white bg-purple-600 hover:bg-purple-700 transition-transform duration-200 transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2">
                        Start Free Trial
                    </button>
                    <button className="px-7 py-3 rounded-lg font-semibold text-lg text-purple-700 border-2 border-gray-300 bg-white hover:bg-gray-100 transition-transform duration-200 transform hover:scale-105 shadow focus:outline-none focus:ring-2 focus:ring-purple-200 focus:ring-offset-2">
                        Watch Demo
                    </button>
                </div>
                                <div className="mt-4 text-gray-500 text-base font-medium">
                                        No credit card required. <span className="font-semibold text-purple-600">5 months free for early users.</span>
                                </div>
                                {/* Stats Bar */}
                                <div className="flex flex-col sm:flex-row items-center gap-6 mt-8  rounded-xl px-6 py-4 w-full md:w-auto">
                                    <div className="flex items-center gap-2">
                                        {/* User Icon */}
                                        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.314 0-10 1.657-10 5v2c0 .553.447 1 1 1h18c.553 0 1-.447 1-1v-2c0-3.343-6.686-5-10-5z" fill="#a78bfa"/><path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.314 0-10 1.657-10 5v2c0 .553.447 1 1 1h18c.553 0 1-.447 1-1v-2c0-3.343-6.686-5-10-5z" fill="#a78bfa" fillOpacity=".2"/></svg>
                                        <span className="font-bold text-xl text-gray-800">50K<span className="font-normal text-lg">+ stores</span></span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        {/* 5 yellow stars */}
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} width="24" height="24" fill="#FFD600" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                                        ))}
                                        <span className="font-bold text-xl text-gray-800 ml-2">4.9</span>
                                        <span className="text-lg text-gray-600 ml-1">rating</span>
                                    </div>
                                </div>
            </div>
            <div className="relative flex justify-center items-center w-full md:w-auto mt-10 md:mt-0">
                {/* Purple blob background */}
                <svg className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" width="370" height="370" viewBox="0 0 370 370" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="185" cy="185" rx="185" ry="150" fill="#a78bfa" fillOpacity="0.25" />
                </svg>
                <div className="hero-image h-[28rem] w-64 md:h-[32rem] md:w-[28rem] flex justify-center items-center overflow-visible">
                    <img src={image} alt="Hero image" className="object-contain max-h-full max-w-full drop-shadow-2xl" />
                </div>
            </div>
        </section>
    )
};

export default HeroSection;
