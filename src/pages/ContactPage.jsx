import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    specialty: '',
    message: ''
  });

  const specialties = [
    'Primary Care',
    'Behavioral Health',
    'Urgent Care',
    'Physical Therapy',
    'Diagnostic Labs',
    'Cardiology',
    'Orthopedics',
    'Gastroenterology',
    'Multi-Specialty Practice',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Store form data in localStorage
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    submissions.push({
      ...formData,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting OneClearRCM. Our team will reach out to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      organization: '',
      email: '',
      phone: '',
      specialty: '',
      message: ''
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact OneClearRCM - Request a Free Revenue Audit</title>
        <meta name="description" content="Contact OneClearRCM for a free revenue audit and consultation. Our RCM experts are ready to help optimize your healthcare practice's financial performance." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#003366] to-[#0066CC] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Ready to optimize your revenue cycle? Contact our RCM experts for a free consultation and revenue audit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-[#003366] mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium mb-2 block">
                      Full Name *
                    </Label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/20 outline-none transition-all"
                      placeholder="Dr. John Smith"
                    />
                  </div>

                  <div>
                    <Label htmlFor="organization" className="text-gray-700 font-medium mb-2 block">
                      Organization/Practice Name *
                    </Label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      required
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/20 outline-none transition-all"
                      placeholder="ABC Medical Group"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block">
                        Email Address *
                      </Label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/20 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-gray-700 font-medium mb-2 block">
                        Phone Number *
                      </Label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/20 outline-none transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="specialty" className="text-gray-700 font-medium mb-2 block">
                      Healthcare Specialty *
                    </Label>
                    <select
                      id="specialty"
                      name="specialty"
                      required
                      value={formData.specialty}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select your specialty</option>
                      {specialties.map((specialty) => (
                        <option key={specialty} value={specialty}>
                          {specialty}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium mb-2 block">
                      Message *
                    </Label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/20 outline-none transition-all resize-none"
                      placeholder="Tell us about your practice and how we can help..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#003366] hover:bg-[#004080] text-white font-semibold"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-[#003366] mb-6">Contact Information</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Our team is ready to answer your questions and help you optimize your revenue cycle. Reach out today for a free consultation.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-[#0066CC]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#003366] mb-1">Email Us</h3>
                      <a href="mailto:info@oneclearrcm.com" className="text-gray-700 hover:text-[#0066CC] transition-colors">
                        info@oneclearrcm.com
                      </a>
                      <p className="text-sm text-gray-600 mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-[#0066CC]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#003366] mb-1">Call Us</h3>
                      <a href="tel:+18001234567" className="text-gray-700 hover:text-[#0066CC] transition-colors">
                        +1 (800) 123-4567
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Monday - Friday, 9AM - 6PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-[#0066CC]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#003366] mb-1">Our Locations</h3>
                      <p className="text-gray-700">US & India Delivery Centers</p>
                      <p className="text-sm text-gray-600 mt-1">Global coverage, local expertise</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
                <h3 className="text-xl font-bold text-[#003366] mb-4">What Happens Next?</h3>
                <ol className="space-y-4">
                  {[
                    {
                      step: '1',
                      title: 'Initial Contact',
                      description: 'Our team will reach out within 24 hours to schedule a consultation.'
                    },
                    {
                      step: '2',
                      title: 'Free Assessment',
                      description: "We'll analyze your current revenue cycle and identify opportunities."
                    },
                    {
                      step: '3',
                      title: 'Custom Proposal',
                      description: 'Receive a tailored solution with transparent pricing and projected ROI.'
                    },
                    {
                      step: '4',
                      title: 'Seamless Onboarding',
                      description: 'Our dedicated team will ensure a smooth transition with minimal disruption.'
                    }
                  ].map((item) => (
                    <li key={item.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#0066CC] text-white rounded-full flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#003366] mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-700">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img alt="OneClearRCM customer support team" className="rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1678458536113-839133647b4a" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;