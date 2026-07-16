import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Building2, Globe2, Shield, Award, Users2, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Shield className="w-10 h-10 text-[#0066CC]" />,
      title: 'HIPAA Compliance',
      description: 'We maintain strict adherence to HIPAA regulations, ensuring complete data security and patient privacy protection across all our operations.'
    },
    {
      icon: <Award className="w-10 h-10 text-[#0066CC]" />,
      title: 'Industry Expertise',
      description: 'Our team consists of certified medical billing specialists with extensive experience across multiple healthcare specialties.'
    },
    {
      icon: <Users2 className="w-10 h-10 text-[#0066CC]" />,
      title: 'Client-Centric Approach',
      description: 'We provide dedicated account managers and personalized service tailored to meet your unique practice requirements.'
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-[#0066CC]" />,
      title: 'Proven Results',
      description: 'Our clients experience measurable improvements in collections, reduced denials, and enhanced cash flow performance.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About OneClearRCM - Healthcare RCM Division of OneClearGroup</title>
        <meta name="description" content="OneClearRCM is a division of OneClearGroup, providing HIPAA-compliant revenue cycle management services with a US and India global delivery model." />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About OneClearRCM</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              A trusted division of OneClearGroup, delivering world-class revenue cycle management solutions to healthcare providers across the United States.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                OneClearRCM is a specialized division of OneClearGroup, dedicated exclusively to providing comprehensive revenue cycle management services for healthcare providers. We understand the complexities of medical billing, coding, and reimbursement in today's healthcare landscape.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                With years of industry experience and a commitment to excellence, we help practices of all sizes optimize their financial performance while maintaining full compliance with healthcare regulations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is simple: to simplify healthcare revenue management so providers can focus on what matters most – delivering exceptional patient care.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img alt="OneClearRCM team collaboration" className="rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1666214277657-e60f05c40b04" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Delivery Model */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-4">
              <Globe2 className="w-16 h-16 text-[#0066CC]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
              US + India Global Delivery Model
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our unique global delivery model combines the best of both worlds – US-based management and quality oversight with cost-effective offshore delivery centers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-md border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-8 h-8 text-[#0066CC]" />
                <h3 className="text-2xl font-bold text-[#003366]">US Operations</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#0066CC] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Strategic management and client relationships</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#0066CC] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Quality assurance and compliance oversight</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#0066CC] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Dedicated account management teams</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#0066CC] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Direct communication during business hours</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <Globe2 className="w-8 h-8 text-[#0066CC]" />
                <h3 className="text-2xl font-bold text-[#003366]">India Delivery Centers</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#0066CC] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">24/7 operational coverage and support</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#0066CC] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Highly trained billing and coding specialists</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#0066CC] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Cost-effective service delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#0066CC] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Secure, HIPAA-compliant infrastructure</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and ensure exceptional service delivery to our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-[#003366] mb-3">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HIPAA Compliance Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img alt="HIPAA compliance and data security" className="rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1662890459081-87e680bb1b00" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-12 h-12 text-[#0066CC]" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#003366]">
                  HIPAA Compliance & Security
                </h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Data security and patient privacy are our top priorities. We maintain comprehensive HIPAA compliance protocols across all our operations, both in the US and at our offshore delivery centers.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#0066CC] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Regular security audits and compliance assessments</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#0066CC] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Encrypted data transmission and secure storage systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#0066CC] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Comprehensive employee training on HIPAA regulations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#0066CC] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Business Associate Agreements (BAA) with all clients</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;