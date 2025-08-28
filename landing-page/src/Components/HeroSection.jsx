import image from "./../assets/phone.png";


const HeroSection = () => {

    return(
        <section className="hero-section flex flex-col md:flex-row items-center justify-between bg-white p-14  gap-x-5 ">
            <div className="hero-content flex-col flex justify-center item ">
                <div className="hero-container flex-1 ">
                    <h1 className="text-4xl font-bold">Streamline Cash on Delivery <br />for Your Shopify Store</h1>
                    <p className="my-5 text-lg">COD Rocket makes it easy to manage cash on delivery orders <br /> with customizable forms, automated workflows, <br /> and comprehensive order tracking for Shopify merchants.</p>
                </div>
                <div className="justify-between ">
                    <button className="px-6 py-2 mx-5 rounded-lg font-bold text-lg text-white bg-purple-600 hover:bg-purple-700 transition-transform duration-200 transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2">
                        Start Free Trial
                    </button>
                    <button className="px-6 py-2 rounded-lg font-bold text-lg text-white bg-gray-600 hover:bg-gray-700 transition-transform duration-200 transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
                        Watch Demo
                    </button>
                </div>
            </div>
            <div className="hero-image h-80 w-80 flex justify-center items-center overflow-hidden">
                <img src={image} alt="Hero image" className="object-contain max-h-full max-w-full" />
            </div>

        </section>
)
};

export default HeroSection;
