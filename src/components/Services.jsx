import { Ship, Plane } from "lucide-react";

function Services() {
  return (
    <section className="py-24 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p className="text-gray-600 mt-4">
            Professional cargo solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Container Shipping */}
          <div className="bg-white p-10 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-6">
              <Ship className="w-10 h-10 text-blue-600" />
              <h3 className="text-2xl font-semibold">
                Container Shipping (90%)
              </h3>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Our core service focuses on secure and cost-effective container
              shipping for commercial and bulk cargo.
            </p>

            <ul className="space-y-3 text-gray-600">
              <li>• Full Container Load (FCL)</li>
              <li>• Less than Container Load (LCL)</li>
              <li>• Import & Export handling</li>
              <li>• Door-to-Door delivery</li>
            </ul>
          </div>

          {/* Air Cargo */}
          <div className="bg-white p-10 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-6">
              <Plane className="w-10 h-10 text-green-600" />
              <h3 className="text-2xl font-semibold">
                Air Cargo (10%)
              </h3>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Fast and secure air freight solutions for urgent and
              time-sensitive shipments.
            </p>

            <ul className="space-y-3 text-gray-600">
              <li>• Express delivery</li>
              <li>• High-value cargo</li>
              <li>• International routes</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;
