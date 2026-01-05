function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-6">

        {/* About */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">About BILAN CARGO</h2>
          <p className="text-gray-600 leading-relaxed">
            BILAN CARGO is a professional logistics and cargo company specializing
            in container shipping and air freight services. We focus on delivering
            reliable, secure, and cost-effective cargo solutions to meet the
            growing needs of businesses and individuals.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Vision */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">🌍 Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become a trusted regional and international cargo partner,
              recognized for efficiency, reliability, and excellence in
              logistics services.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">🎯 Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide safe, timely, and affordable cargo solutions by focusing
              on container shipping, supporting urgent air freight needs, and
              maintaining strong customer relationships through professional
              service.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
