import heroImage from "../assets/hero-cargo.png";

const services = [
  {
    title: "Sea Freight",
    description:
      "Cost-effective and reliable ocean freight solutions for international and regional cargo shipments.",
  },
  {
    title: "Road Transport",
    description:
      "Efficient inland transportation ensuring safe and timely delivery across cities and regions.",
  },
  {
    title: "Air Freight",
    description:
      "Fast and secure air cargo services for urgent and time-sensitive shipments.",
  },
  {
    title: "Warehousing",
    description:
      "Secure storage facilities with professional handling and inventory management solutions.",
  },
  {
    title: "Customs Clearance",
    description:
      "Smooth and hassle-free customs documentation and clearance support.",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50">

      {/* HERO SECTION */}
      <section className="relative h-[45vh] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="absolute inset-0 bg-blue-900/70"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            Comprehensive cargo and logistics solutions designed to meet your
            transportation needs.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="w-12 h-12 mb-4 bg-blue-100 text-blue-900 flex items-center justify-center rounded-full font-bold text-lg">
                {index + 1}
              </div>

              <h3 className="text-xl font-bold text-blue-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY OUR SERVICES */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Why Choose Bilan Cargo
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 mb-10">
            We deliver dependable logistics services through professionalism,
            efficiency, and a strong commitment to customer satisfaction.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Reliable Delivery",
              "Secure Handling",
              "Experienced Team",
              "Competitive Pricing",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 border rounded-lg hover:shadow transition"
              >
                <h4 className="font-semibold text-blue-900">{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <h3 className="text-3xl font-bold mb-4">
          Need Reliable Cargo Services?
        </h3>
        <p className="mb-6">
          Contact Bilan Cargo today and let us handle your logistics needs.
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

export default Services;
