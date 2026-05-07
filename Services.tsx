import { Award, Target, Heart, Shield, Users, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

export default function About() {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1770199105692-9e52ff137cad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
      bio: "20+ years of experience in luxury real estate development",
    },
    {
      name: "Priya Sharma",
      role: "Head of Sales",
      image: "https://images.unsplash.com/photo-1763479169474-728a7de108c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
      bio: "Expert in residential property solutions across Mumbai",
    },
    {
      name: "Amit Patel",
      role: "Commercial Specialist",
      image: "https://images.unsplash.com/photo-1770199105714-a5a349546346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
      bio: "Specializes in commercial real estate and investment advisory",
    },
    {
      name: "Sneha Desai",
      role: "Property Manager",
      image: "https://images.unsplash.com/photo-1763478958776-ebd04b6459ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
      bio: "Dedicated to exceptional property management services",
    },
  ];

  const testimonials = [
    {
      name: "Vikram Singh",
      role: "Business Owner",
      text: "DATUM REALTORS helped us find the perfect commercial space for our expanding business. Their market knowledge is unparalleled!",
      rating: 5,
    },
    {
      name: "Anjali Mehta",
      role: "Homeowner",
      text: "Professional, attentive, and truly cared about finding us our dream home. Couldn't be happier with their service!",
      rating: 5,
    },
    {
      name: "Rahul Kapoor",
      role: "Investor",
      text: "Their investment advisory service has helped me build a profitable real estate portfolio. Highly recommended!",
      rating: 5,
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div>
      <section className="bg-gradient-to-r from-[var(--navy)] to-[var(--navy-light)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-6">About DATUM REALTORS</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building trust and delivering excellence in real estate since 1995
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl mb-6 text-[var(--navy)]">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 1995, DATUM REALTORS has grown from a small local agency to one of India's most
                respected real estate firms. Our journey is built on trust, integrity, and an unwavering
                commitment to our clients.
              </p>
              <p className="text-gray-600 mb-4">
                With over 28 years of experience, we've helped thousands of families find their dream homes
                and assisted countless businesses in securing the perfect commercial spaces. Our expertise
                spans residential sales, commercial real estate, property management, and investment advisory.
              </p>
              <p className="text-gray-600">
                Today, we're proud to be recognized as industry leaders, but we've never forgotten our roots
                or the personal touch that made us successful. Every client is family to us.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                alt="DATUM REALTORS office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-[var(--gold)]">
              <Target className="h-12 w-12 text-[var(--gold)] mx-auto mb-4" />
              <h3 className="text-xl mb-3 text-[var(--navy)]">Our Mission</h3>
              <p className="text-gray-600">
                To provide exceptional real estate services that exceed expectations and turn dreams into reality.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-[var(--gold)]">
              <Heart className="h-12 w-12 text-[var(--gold)] mx-auto mb-4" />
              <h3 className="text-xl mb-3 text-[var(--navy)]">Our Values</h3>
              <p className="text-gray-600">
                Integrity, transparency, and client satisfaction are the cornerstones of everything we do.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-[var(--gold)]">
              <Shield className="h-12 w-12 text-[var(--gold)] mx-auto mb-4" />
              <h3 className="text-xl mb-3 text-[var(--navy)]">Our Promise</h3>
              <p className="text-gray-600">
                Professional guidance, market expertise, and unwavering support throughout your real estate journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-[var(--navy)]">Meet Our Expert Team</h2>
            <p className="text-gray-600">Dedicated professionals committed to your success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-80 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl mb-1 text-[var(--navy)]">{member.name}</h3>
                  <div className="text-[var(--gold)] mb-3">{member.role}</div>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-[var(--navy)]">Our Achievements</h2>
            <p className="text-gray-600">Recognized excellence in the industry</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl text-[var(--gold)] mb-3" style={{ fontWeight: 700 }}>50+</div>
              <div className="text-[var(--navy)]">Industry Awards</div>
            </div>
            <div className="text-center">
              <div className="text-5xl text-[var(--gold)] mb-3" style={{ fontWeight: 700 }}>5000+</div>
              <div className="text-[var(--navy)]">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl text-[var(--gold)] mb-3" style={{ fontWeight: 700 }}>1000+</div>
              <div className="text-[var(--navy)]">Properties Sold</div>
            </div>
            <div className="text-center">
              <div className="text-5xl text-[var(--gold)] mb-3" style={{ fontWeight: 700 }}>28+</div>
              <div className="text-[var(--navy)]">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--navy)] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">What Our Clients Say</h2>
            <p className="text-gray-300">Real experiences from real people</p>
          </div>

          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((testimonial, idx) => (
                  <div key={idx} className="flex-[0_0_100%] min-w-0 px-4">
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-[var(--gold)] text-2xl">★</span>
                        ))}
                      </div>
                      <p className="text-lg mb-6 italic">"{testimonial.text}"</p>
                      <div>
                        <div className="text-[var(--gold)]" style={{ fontWeight: 600 }}>{testimonial.name}</div>
                        <div className="text-gray-300 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-[var(--navy)]">Certifications & Memberships</h2>
            <p className="text-gray-600">Accredited and trusted in the industry</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Award className="h-16 w-16 text-[var(--gold)] mx-auto mb-4" />
              <h3 className="text-xl mb-2 text-[var(--navy)]">RERA Certified</h3>
              <p className="text-gray-600">Fully compliant with Real Estate Regulatory Authority</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Users className="h-16 w-16 text-[var(--gold)] mx-auto mb-4" />
              <h3 className="text-xl mb-2 text-[var(--navy)]">CREDAI Member</h3>
              <p className="text-gray-600">Member of Confederation of Real Estate Developers</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <TrendingUp className="h-16 w-16 text-[var(--gold)] mx-auto mb-4" />
              <h3 className="text-xl mb-2 text-[var(--navy)]">ISO 9001:2015</h3>
              <p className="text-gray-600">Quality management system certification</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
