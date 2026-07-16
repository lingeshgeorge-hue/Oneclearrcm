import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, TrendingUp, Shield, Globe, Users } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const HomePage = () => {
  const { toast } = useToast();

  const handleAuditClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const stats = [
    { value: '98%', label: 'Collection Rate' },
    { value: '30%', label: 'Revenue Increase' },
    { value: '50%', label: 'Faster AR Recovery' }
  ];

  const features = [
    {
      icon: <TrendingUp className="w-8 h-8 text-[#0066CC]" />,
      title: 'Maximize Revenue',
      description: 'Comprehensive RCM solutions designed to optimize your collections and reduce denial rates.'
    },
    {
      icon: <Shield className="w-8 h-8 text-[#0066CC]" />,
      title: 'HIPAA Compliant',
      description: 'Full compliance with healthcare regulations ensuring data security and patient privacy.'
    },
    {
      icon: <Globe className="w-8 h-8 text-[#0066CC]" />,
      title: 'Global Delivery Model',
      description: 'US-based management with offshore delivery centers for cost-effective, 24/7 operations.'
    },
    {
      icon: <Users className="w-8 h-8 text-[#0066CC]" />,
      title: 'Dedicated Support',
      description: 'Experienced RCM specialists and dedicated account managers for personalized service.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>OneClearRCM - Healthcare Revenue Cycle Management Services</title>
        <meta name="description" content="OneClearRCM provides end-to-end healthcare revenue cycle management services. Maximize collections, reduce denials, and simplify billing with our expert RCM solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#003366] via-[#004080] to-[#0066CC] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                OneClearRCM – Simplifying Healthcare Revenue. Maximizing Your Collections.
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                End-to-end revenue cycle management services designed to boost your practice's financial performance. From billing to collections, we handle it all.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-[#003366] hover:bg-blue-50 font-semibold text-base px-8 py-6 h-auto"
                  onClick={handleAuditClick}
                >
                  Request a Free Revenue Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#003366] font-semibold text-base px-8 py-6 h-auto w-full sm:w-auto"
                  >
                    Talk to an RCM Expert
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <img alt="Healthcare professionals analyzing revenue data" className="rounded-lg shadow-2xl" src="https://images.unsplash.com/photo-1666214277657-e60f05c40b04" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#003366] mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Why Healthcare Providers Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine industry expertise, advanced technology, and a proven global delivery model to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#003366] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
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
              Comprehensive RCM Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From patient registration to final payment, we manage every step of your revenue cycle.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              'Medical Billing & Coding',
              'Denial Management',
              'AR Follow-Up',
              'Eligibility Verification',
              'Charge Entry & Payment Posting',
              'Provider Credentialing'
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-100"
              >
                <CheckCircle className="w-6 h-6 text-[#0066CC] flex-shrink-0" />
                <span className="text-[#003366] font-medium">{service}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button
                size="lg"
                className="bg-[#003366] hover:bg-[#004080] text-white font-semibold px-8"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#003366] to-[#0066CC] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Optimize Your Revenue Cycle?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how OneClearRCM can help your practice achieve its financial goals.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-[#003366] hover:bg-blue-50 font-semibold text-base px-8 py-6 h-auto"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;