function Hero() {
  return (
    <section className="relative h-[600px] md:h-[700px] flex flex-col md:flex-row items-center overflow-hidden">

      {/* Text Content on Left */}
      <div className="relative z-10 md:w-1/2 px-6 md:px-16 text-white">
        <h1 className="text-7xl text-blue-600 font-bold mb-6 drop-shadow-lg">
          Reliable Cargo & Logistics Solutions
        </h1>
        <p className="text-lg md:text-xl text-blue-600 mb-8 leading-relaxed drop-shadow-md">
          BILAN CARGO specializes in container shipping and air freight, delivering your cargo safely and efficiently.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="#services"
            className="bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="border text-blue-600 border-white px-6 py-3 rounded-lg font-semiboldhover:text-blue-600 transition shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Image on Right */}
      <div className="relative md:w-1/2 h-[400px] md:h-full">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBoDlmbQkV9fbEK7P1HSxanCgy4qUZzyi-BQ&s"
          alt="Shipping containers at port"
          className="absolute inset-0 w-full h-full object-cover rounded-4xl"
        />
        {/* Overlay if needed */}
        <div className="absolute inset-0 bg-black/25 rounded-4xl"></div>
      </div>
    </section>
  );
}

export default Hero;
