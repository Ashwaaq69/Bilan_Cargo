import { Phone, Mail, MapPin } from "lucide-react";

function Contact() {
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="text-gray-600 mt-4">
            Get in touch with BILAN CARGO for reliable logistics solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-14">

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="text-blue-600" />
              <span className="text-gray-700">+252 XXX XXX XXX</span>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-blue-600" />
              <span className="text-gray-700">info@bilancargo.com</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-blue-600" />
              <span className="text-gray-700">
                Mogadishu, Somalia
              </span>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-50 p-8 rounded-2xl shadow space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;
