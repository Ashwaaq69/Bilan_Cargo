function Hero() {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center text-white overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNmFtqD1aOmCBXI_sDJRn0BEjjZgz8DqPUMQ&s)",
        }}
      ></div>

      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Hero Content */}
      <div className="relative text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
          Reliable Cargo & Logistics Solutions
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed drop-shadow-md">
          BILAN CARGO specializes in container shipping and air freight, delivering your cargo safely and efficiently.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#services"
            className="bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
