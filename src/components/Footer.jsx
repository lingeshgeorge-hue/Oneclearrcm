import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#003366] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">OneClear</span>
              <span className="text-2xl font-bold text-[#0066CC]">RCM</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              A division of OneClearGroup, delivering comprehensive revenue cycle management solutions with a global delivery model.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Quick Links</span>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-blue-200 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Our Services</span>
            <ul className="space-y-2">
              <li className="text-blue-200 text-sm">Medical Billing & Coding</li>
              <li className="text-blue-200 text-sm">Denial Management</li>
              <li className="text-blue-200 text-sm">AR Follow-Up</li>
              <li className="text-blue-200 text-sm">Eligibility Verification</li>
              <li className="text-blue-200 text-sm">Provider Credentialing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Contact Us</span>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail size={18} className="text-[#0066CC] mt-0.5 flex-shrink-0" />
                <span className="text-blue-200 text-sm">info@oneclearrcm.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={18} className="text-[#0066CC] mt-0.5 flex-shrink-0" />
                <span className="text-blue-200 text-sm">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-[#0066CC] mt-0.5 flex-shrink-0" />
                <span className="text-blue-200 text-sm">US & India Delivery Centers</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-200 text-sm text-center md:text-left">
            © 2026 OneClearRCM. All rights reserved. HIPAA Compliant.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;