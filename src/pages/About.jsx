import heroImage from "../assets/hero-cargo.png";
import cargoTeam from "../assets/cargo-team.png";

const About = () => {
  return (
    <div className="bg-gray-50">

      {/* HERO SECTION */}
      <section className="relative h-[55vh] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="absolute inset-0 bg-blue-900/70"></div>

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Bilan Cargo
          </h1>
          <p className="text-lg">
            A trusted cargo and logistics company delivering reliability,
            efficiency, and excellence.
          </p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Bilan Cargo is a professional cargo and logistics company committed to
            providing safe, secure, and timely transportation services across sea,
            road, and air routes.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We support businesses and individuals with reliable logistics solutions,
            built on professionalism, transparency, and customer satisfaction.
          </p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src={cargoTeam}
            alt="Bilan Cargo logistics team"
            className="w-full h-80 object-cover"
          />
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          {[
            { value: "10+", label: "Years Experience" },
            { value: "1000+", label: "Shipments Delivered" },
            { value: "24/7", label: "Customer Support" },
            { value: "Global", label: "Service Network" },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg hover:shadow-md transition"
            >
              <h3 className="text-4xl font-bold text-blue-900 mb-2">
                {item.value}
              </h3>
              <p className="text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <div className="bg-white p-8 rounded-xl shadow">
          <h3 className="text-2xl font-bold text-blue-900 mb-3">
            Our Vision
          </h3>
          <p className="text-gray-600 leading-relaxed">
            To become a leading and trusted cargo company recognized for reliability,
            safety, and service excellence across regional and international markets.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow">
          <h3 className="text-2xl font-bold text-blue-900 mb-3">
            Our Mission
          </h3>
          <p className="text-gray-600 leading-relaxed">
            To deliver efficient, secure, and customer-focused logistics solutions
            through professionalism, innovation, and integrity.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <h3 className="text-3xl font-bold mb-4">
          Your Trusted Logistics Partner
        </h3>
        <p className="mb-6">
          Choose Bilan Cargo for reliable and timely cargo delivery.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-500 px-8 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Contact Us
        </a>
      </section>

    </div>
  );
};

export default About;
