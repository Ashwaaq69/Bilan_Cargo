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

      <section className="bg-white py-28">
        <div className="max-w-5xl mx-auto text-center px-6">

          <span className="inline-flex items-center gap-2 mb-6 px-4 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
            Logistics Solutions
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Our Services
          </h1>

          <div className="w-24 h-0.5 bg-blue-600 mx-auto mb-6"></div>

          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Comprehensive cargo and logistics solutions designed to meet your
            transportation needs through professionalism, reliability, and efficiency.
          </p>

        </div>
      </section>
      {/* SERVICES GRID */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <div className="w-12 h-12 mb-6 bg-blue-100 text-blue-900 flex items-center justify-center rounded-full font-bold text-lg">
                {index + 1}
              </div>

              <h3 className="text-xl font-bold text-blue-900 mb-4">
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
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Why Choose Bilan Cargo
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 mb-14 leading-relaxed">
            We deliver dependable logistics services through professionalism,
            efficiency, and a strong commitment to customer satisfaction.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Reliable Delivery",
              "Secure Handling",
              "Experienced Team",
              "Competitive Pricing",
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 border rounded-xl hover:shadow transition"
              >
                <h4 className="font-semibold text-blue-900">{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-24 text-center">
        <h3 className="text-3xl font-bold mb-6">
          Need Reliable Cargo Services?
        </h3>
        <p className="mb-8 text-blue-100">
          Contact Bilan Cargo today and let us handle your logistics needs.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-500 px-10 py-4 rounded-lg hover:bg-blue-600 transition font-semibold"
        >
          Contact Us
        </a>
      </section>

    </div>
  );
};

export default Services;
