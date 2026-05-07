import { Link } from "react-router";
import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Building2 className="h-8 w-8 text-[var(--gold)]" />
              <div>
                <div className="text-xl tracking-wide" style={{ fontWeight: 600 }}>DATUM</div>
                <div className="text-xs text-[var(--gold)] tracking-wider">REALTORS</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Turning Dreams into Addresses. Your trusted partner in real estate excellence.
            </p>
          </div>

          <div>
            <h4 className="text-[var(--gold)] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-[var(--gold)] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[var(--gold)] transition-colors">About Us</Link></li>
              <li><Link to="/properties" className="hover:text-[var(--gold)] transition-colors">Properties</Link></li>
              <li><Link to="/services" className="hover:text-[var(--gold)] transition-colors">Services</Link></li>
              <li><Link to="/blog" className="hover:text-[var(--gold)] transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--gold)] mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">123 Marine Drive, Mumbai, India 400002</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-[var(--gold)]" />
                <span className="text-gray-300">+91 22 1234 5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-[var(--gold)]" />
                <span className="text-gray-300">info@datumrealtors.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--gold)] mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[var(--gold)] transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-[var(--gold)] transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-[var(--gold)] transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-[var(--gold)] transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--gold)]/20 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} DATUM REALTORS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
