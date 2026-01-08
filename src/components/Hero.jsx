import heroImage from "../assets/hero-cargo.png";

const Hero = () => {
  return (
    <section
      className="relative h-[85vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Reliable Cargo & Logistics Solutions
        </h2>
        <p className="text-lg mb-8">
          Bilan Cargo delivers safe, efficient, and timely cargo transportation
          across sea, road, and air routes.
        </p>
        <div className="space-x-4">
          <button className="bg-white text-blue-600 px-6 py-3 rounded hover:bg-blue-100 text-">
            Our Services
          </button>
          <button className="border border-white px-6 py-3 rounded hover:bg-white hover:text-blue-900">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
