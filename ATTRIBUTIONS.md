import { Home, Building2, TrendingUp, Settings, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Residential Sales & Rentals",
      description: "Find your dream home or perfect rental property with our comprehensive residential services.",
      features: [
        "Luxury apartments and villas",
        "Affordable housing solutions",
        "Rental property management",
        "Home valuation services",
        "Virtual property tours",
      ],
      image: "https://images.unsplash.com/photo-1639405091806-01e8ab3cd13a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    },
    {
      icon: Building2,
      title: "Commercial Real Estate",
      description: "Strategic commercial property solutions for businesses looking to expand or relocate.",
      features: [
        "Office space leasing",
        "Retail property solutions",
        "Industrial warehousing",
        "Co-working space options",
        "Build-to-suit developments",
      ],
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description: "Expert guidance to help you make informed real estate investment decisions.",
      features: [
        "Market analysis and trends",
        "Portfolio diversification",
        "ROI projections and modeling",
        "Risk assessment",
        "Exit strategy planning",
      ],
      image: "https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    },
    {
      icon: Settings,
      title: "Property Management",
      description: "Comprehensive property management services to maximize your investment returns.",
      features: [
        "Tenant screening and placement",
        "Rent collection and accounting",
        "Maintenance coordination",
        "Legal compliance management",
        "Regular property inspections",
      ],
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-[var(--navy)] to-[var(--navy-light)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Comprehensive real estate solutions tailored to your unique needs
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                <div className="bg-[var(--gold)]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-[var(--gold)]" />
                </div>
                <h2 className="text-3xl mb-4 text-[var(--navy)]">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 bg-[var(--navy)] text-white px-6 py-3 rounded-lg hover:bg-[var(--navy-light)] transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              <div className={`rounded-xl overflow-hidden shadow-2xl ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-[var(--navy)]">Why Choose Our Services?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide end-to-end real estate solutions with unmatched expertise and dedication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-5xl text-[var(--gold)] mb-4" style={{ fontWeight: 700 }}>24/7</div>
              <h3 className="text-xl mb-3 text-[var(--navy)]">Client Support</h3>
              <p className="text-gray-600">
                Round-the-clock assistance for all your real estate needs and queries
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-5xl text-[var(--gold)] mb-4" style={{ fontWeight: 700 }}>100%</div>
              <h3 className="text-xl mb-3 text-[var(--navy)]">Transparency</h3>
              <p className="text-gray-600">
                Complete transparency in all transactions with no hidden costs
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-5xl text-[var(--gold)] mb-4" style={{ fontWeight: 700 }}>50+</div>
              <h3 className="text-xl mb-3 text-[var(--navy)]">Expert Agents</h3>
              <p className="text-gray-600">
                Certified professionals dedicated to finding your perfect property
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[var(--navy)] to-[var(--navy-light)] text-white rounded-2xl p-12 text-center">
            <h2 className="text-4xl mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our expert team guide you through your real estate journey. Schedule a free consultation today.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[var(--gold)] text-white px-8 py-3 rounded-lg hover:bg-[var(--gold-light)] transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
