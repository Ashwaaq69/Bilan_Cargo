const Services = () => {
  const services = [
    "Sea Freight",
    "Road Transport",
    "Air Freight",
    "Warehousing",
    "Customs Clearance",
  ];

  return (
    <section className="py-16">
      <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div key={i} className="border p-6 rounded-lg hover:shadow-lg">
            <h4 className="text-xl font-semibold">{service}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
