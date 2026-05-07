import { Link } from "react-router";
import { Home, Building2, Briefcase, FileText, Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home", icon: Home },
    { to: "/about", label: "About Us", icon: Building2 },
    { to: "/properties", label: "Properties", icon: Building2 },
    { to: "/services", label: "Services", icon: Briefcase },
    { to: "/blog", label: "Blog", icon: FileText },
    { to: "/contact", label: "Contact", icon: Phone },
  ];

  return (
    <nav className="bg-[var(--navy)] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <Building2 className="h-10 w-10 text-[var(--gold)]" />
            <div>
              <div className="text-2xl tracking-wide" style={{ fontWeight: 600 }}>DATUM</div>
              <div className="text-xs text-[var(--gold)] tracking-wider">REALTORS</div>
            </div>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-[var(--gold)] transition-colors duration-300 flex items-center space-x-2"
              >
                <span>{link.label}</span>
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-[var(--gold)] transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 px-4 hover:bg-[var(--navy-light)] hover:text-[var(--gold)] transition-colors rounded"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
