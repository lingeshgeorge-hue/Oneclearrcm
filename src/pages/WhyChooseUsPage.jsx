import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Shield, DollarSign, TrendingUp, Users, Clock, Target, CheckCircle } from 'lucide-react';

const WhyChooseUsPage = () => {
  const benefits = [
    {
      icon: <Award className="w-12 h-12 text-[#0066CC]" />,
      title: 'Industry Specialists',
      description: 'Our team consists of certified medical billing professionals with extensive experience across multiple healthcare specialties and payer requirements.'
    },
    {
      icon: <Shield className="w-12 h-12 text-[#0066CC]" />,
      title: 'HIPAA Compliance',
      description: 'Full compliance with healthcare regulations ensuring complete data security, patient privacy protection, and peace of mind for your practice.'
    },
    {
      icon: <DollarSign className="w-12 h-12 text-[#0066CC]" />,
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprise charges. Our pricing model is straightforward, competitive, and designed to deliver exceptional value for your investment.'
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-[#0066CC]" />,
      title: 'Faster Collections',
      description: 'Proven methodologies and proactive follow-up processes result in significantly reduced days in A/R and improved cash flow for your practice.'
    },
    {
      icon: <Users className="w-12 h-12 text-[#0066CC]" />,
      title: 'Dedicated Account Management',
      description: 'Each client receives a dedicated account manager who serves as your single point of contact for personalized service and support.'
    },
    {
      icon: <Clock className="w-12 h-12 text-[#0066CC]" />,
      title: '24/7 Operations',
      description: 'Our global delivery model ensures round-the-clock operations, faster turnaround times, and continuous monitoring of your revenue cycle.'
    }
  ];

  const stats = [
    { value: '98%', label: 'First Pass Resolution Rate', description: 'Clean claims submitted on first attempt' },
    { value: '30%', label: 'Average Revenue Increase', description: 'Within first 6 months of partnership' },
    { value: '50%', label: 'Faster AR Recovery', description: 'Reduced days in accounts receivable' },
    { value: '15+', label: 'Years of Experience', description: 'Industry expertise and proven track record' }
  ];

  const differentiators = [
    'Specialty-specific expertise across 15+ healthcare specialties',
    'Advanced technology integration with all major EHR systems',
    'Proactive denial prevention strategies and analytics',
    'Transparent real-time reporting and performance dashboards',
    'Flexible engagement models tailored to your practice needs',
    'No long-term contracts or hidden cancellation fees',
    'Comprehensive training and ongoing support',
    'Regular performance reviews and optimization recommendations'
  ];

  return (
    <>
      <Helmet>
        <title>Why Choose OneClearRCM - Healthcare Revenue Cycle Management Benefits</title>
        <meta name="description" content="Choose OneClearRCM for industry specialists, HIPAA compliance, transparent pricing, faster collections, and dedicated account management for your healthcare practice." />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Choose OneClearRCM</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Partner with a trusted RCM provider that delivers measurable results, exceptional service, and unwavering commitment to your practice's success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
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
              What Sets Us Apart
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the OneClearRCM difference with services designed to maximize your revenue and minimize your administrative burden.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-[#003366] mb-3">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#003366] to-[#0066CC] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proven Results That Speak for Themselves
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our clients consistently achieve exceptional financial outcomes with our RCM services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20"
              >
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-blue-100">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img alt="Healthcare revenue optimization success" className="rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-12 h-12 text-[#0066CC]" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#003366]">
                  The OneClearRCM Advantage
                </h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We go beyond basic billing services to deliver comprehensive revenue cycle solutions that drive measurable improvements in your practice's financial performance.
              </p>
              <ul className="space-y-3">
                {differentiators.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#0066CC] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from healthcare providers who have transformed their revenue cycle with OneClearRCM.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "OneClearRCM transformed our billing process. Our collections increased by 35% in the first year, and their team is incredibly responsive.",
                author: "Dr. Sarah Johnson",
                role: "Primary Care Physician"
              },
              {
                quote: "The transparency and reporting are exceptional. We finally have real-time visibility into our revenue cycle and can make informed decisions.",
                author: "Michael Chen",
                role: "Practice Administrator"
              },
              {
                quote: "Their denial management expertise has been game-changing. We've seen a 60% reduction in claim denials since partnering with OneClearRCM.",
                author: "Dr. Emily Martinez",
                role: "Behavioral Health Specialist"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md border border-gray-200"
              >
                <div className="text-4xl text-[#0066CC] mb-4">"</div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">{testimonial.quote}</p>
                <div>
                  <div className="font-bold text-[#003366]">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUsPage;