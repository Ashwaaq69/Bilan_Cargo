const VisionMission = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">
            Vision & Mission
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Guiding principles that define our purpose, direction, and commitment
            to excellence in logistics services.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Vision Card */}
          <div className="bg-white p-10 rounded-xl shadow hover:shadow-lg transition">
            <div className="w-14 h-14 mb-6 bg-blue-100 text-blue-900 flex items-center justify-center rounded-full text-xl font-bold">
              👁️
            </div>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To become a trusted and leading cargo company recognized for
              reliability, safety, and service excellence across regional and
              international markets.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white p-10 rounded-xl shadow hover:shadow-lg transition">
            <div className="w-14 h-14 mb-6 bg-orange-100 text-orange-600 flex items-center justify-center rounded-full text-xl font-bold">
              🎯
            </div>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver efficient, secure, and customer-focused logistics
              solutions through professionalism, innovation, and integrity.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;
