import heroImage from "../assets/hero-cargo.png";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center text-white">
        
        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 bg-blue-500/20 text-blue-200 rounded-full text-sm font-semibold">
            Trusted Cargo & Logistics Company
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Reliable Cargo & <br /> Logistics Solutions
          </h1>

          <p className="text-lg text-blue-100 mb-8 max-w-xl">
            Bilan Cargo delivers safe, efficient, and timely transportation
            services across sea, road, and air routes worldwide.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/services"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Our Services
            </a>

            <a
              href="/contact"
              className="border border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* RIGHT INFO BOX (OPTIONAL – VERY PROFESSIONAL) */}
        <div className="hidden md:grid grid-cols-2 gap-6">
          {[
            { value: "10+", label: "Years Experience" },
            { value: "1000+", label: "Shipments Delivered" },
            { value: "24/7", label: "Customer Support" },
            { value: "Global", label: "Service Coverage" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur p-6 rounded-xl text-center"
            >
              <h3 className="text-3xl font-bold">{item.value}</h3>
              <p className="text-blue-100 text-sm">{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
