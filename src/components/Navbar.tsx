
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
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100/50 py-2 md:py-3"
          : "bg-gradient-to-b from-black/30 to-transparent backdrop-blur-sm py-3 md:py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo - Responsive sizing */}
        <Link to="/" className="flex items-center group">
          <div className="relative">
            <img 
              src="/lovable-uploads/8289c4ca-e166-40b3-a77b-b60722904d08.png" 
              alt="History Diaries Logo"
              className={`h-8 md:h-11 w-auto transition-all duration-300 group-hover:scale-105 ${
                isScrolled ? 'brightness-100' : 'brightness-100 drop-shadow-lg'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-hd-orange/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
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

        {/* Mobile Menu Button - Better styling */}
        {isMobile && (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden focus:outline-none z-50 p-2 rounded-lg transition-all duration-300 relative ${
              isMenuOpen 
                ? 'text-gray-800 hover:bg-gray-100' 
                : isScrolled 
                  ? 'text-gray-800 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? (
              <X size={28} className="transition-transform duration-300" />
            ) : (
              <Menu size={24} className="transition-transform duration-300" />
            )}
          </button>
        )}

        {/* Mobile Menu - Full screen overlay */}
        {isMobile && isMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col pt-20">
            {/* Close button in top right */}
            <div className="absolute top-6 right-6 z-50">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={28} />
              </button>
            </div>
            
            {/* Menu content centered with full white background */}
            <div className="flex-1 flex flex-col justify-center items-center px-8 bg-white min-h-screen">
              <div className="flex flex-col space-y-6 text-center w-full max-w-sm">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`font-raleway text-xl font-bold tracking-wider uppercase transition-all duration-300 py-4 px-6 rounded-xl w-full ${
                      location.pathname === link.path
                        ? "text-white bg-hd-orange shadow-lg"
                        : "text-gray-800 hover:text-white hover:bg-hd-orange/80 bg-gray-100 hover:shadow-md"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;