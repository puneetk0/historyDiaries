
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "PROGRAMS", path: "/programs" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" }
  ];

  

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100/50 py-3"
          : "bg-gradient-to-b from-black/30 to-transparent backdrop-blur-sm py-3"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-5 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 group">
          <div className="relative">
            <img 
              src="/lovable-uploads/8289c4ca-e166-40b3-a77b-b60722904d08.png" 
              alt="History Diaries Logo"
              className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-hd-orange/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </div>
          
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-raleway text-sm font-bold tracking-wider uppercase transition-all duration-300 py-2 px-1 group ${
                  location.pathname === link.path
                    ? "text-hd-orange"
                    : isScrolled ? "text-gray-700 hover:text-hd-orange" : "text-white hover:text-hd-orange drop-shadow-sm"
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-hd-orange transform transition-all duration-300 ${
                  location.pathname === link.path 
                    ? 'scale-x-100' 
                    : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
          </nav>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden focus:outline-none z-50 p-2 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            } ${isMenuOpen ? 'bg-white text-gray-700' : ''}`}
          >
            {isMenuOpen ? (
              <X size={24} className="transition-transform duration-300 rotate-90" />
            ) : (
              <Menu size={24} className="transition-transform duration-300" />
            )}
          </button>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <div
            className={`fixed inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50 backdrop-blur-xl z-40 transform transition-all duration-500 ease-in-out ${
              isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-raleway text-2xl font-bold tracking-wider uppercase transition-all duration-300 transform hover:scale-110 ${
                    location.pathname === link.path
                      ? "text-hd-orange"
                      : "text-gray-700 hover:text-hd-orange"
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: isMenuOpen ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            {/* Decorative elements for mobile menu */}
            <div className="absolute top-20 right-10 w-20 h-20 bg-hd-orange/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-32 left-8 w-16 h-16 bg-hd-blue/10 rounded-full blur-lg"></div>
            <div className="absolute top-1/2 right-4 w-12 h-12 bg-hd-teal/10 rounded-full blur-md"></div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
