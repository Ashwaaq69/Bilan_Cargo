import heroImage from "../assets/hero-cargo.png";

const Contact = () => {
  return (
    <div className="bg-gray-50">

      {/* HERO SECTION */}
      <section className="relative h-[40vh] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="absolute inset-0 bg-blue-900/70"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Contact Bilan Cargo
          </h1>
          <p className="text-lg">
            We’re here to support your cargo and logistics needs.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* CONTACT INFO */}
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8">
            Reach out to Bilan Cargo for reliable logistics solutions.
            Our team is ready to assist you with your cargo requirements.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-900 flex items-center justify-center rounded-full font-bold">
                📧
              </div>
              <div>
                <h4 className="font-semibold text-blue-900">Email</h4>
                <p className="text-gray-600">info@bilancargo.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-900 flex items-center justify-center rounded-full font-bold">
                📞
              </div>
              <div>
                <h4 className="font-semibold text-blue-900">Phone</h4>
                <p className="text-gray-600">+252 XXX XXX</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-900 flex items-center justify-center rounded-full font-bold">
                📍
              </div>
              <div>
                <h4 className="font-semibold text-blue-900">Office Address</h4>
                <p className="text-gray-600">
                  Mogadishu, Somalia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">
            Send Us a Message
          </h3>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-14 text-center">
        <h3 className="text-3xl font-bold mb-3">
          Let’s Move Your Cargo With Confidence
        </h3>
        <p>
          Bilan Cargo — your trusted logistics partner.
        </p>
      </section>

    </div>
  );
};

export default Contact;
