
import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          {/* Logo and Description */}
          <div className="flex flex-col">
            <h3 className="font-trajan text-2xl mb-4">HISTORY DIARIES</h3>
            <p className="text-gray-300 mb-6 font-raleway">
              Bringing Social Sciences to Life Through Theatre and Innovation
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/history.diaries/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-hd-orange transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/historydiaries/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-hd-orange transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.youtube.com/@HistoryDiaries" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-hd-orange transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
 
       
          {/* Contact */}
          <div>
            <h4 className="font-garamond text-xl mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-hd-orange" />
                <a 
                  href="mailto:historydiaries2016@gmail.com"
                  className="hover:text-hd-orange transition-colors"
                >
                  historydiaries2016@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-hd-orange" />
                <a 
                  href="tel:+919968483564"
                  className="hover:text-hd-orange transition-colors"
                >
                  +91 – 99684 83564
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-hd-orange mt-1" />
                <span>Delhi NCR, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} History Diaries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
