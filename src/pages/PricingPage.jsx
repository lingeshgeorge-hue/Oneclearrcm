import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, User, Percent, Clock, HelpCircle, ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const PricingPage = () => {
  const { toast } = useToast();

  const handleConsultClick = () => {
    toast({
      title: "Pricing Consultation Request Received!",
      description: "A specialist will contact you shortly to discuss your specific needs."
    });
  };

  const pricingModels = [
    {
      title: "FTE Model",
      subtitle: "Full-Time Equivalent",
      icon: <User className="w-10 h-10 text-[#0066CC]" />,
      description: "Dedicated staff members working exclusively for your practice as an extension of your team.",
      idealFor: "Large practices, hospitals, and billing companies needing consistent, dedicated resources.",
      features: [
        "Dedicated RCM specialist(s)",
        "Fixed monthly cost per resource",
        "Direct control over daily tasks",
        "Seamless integration with your team",
        "Scalable team size as needed",
        "Time zone aligned working hours"
      ],
      ctaText: "Get FTE Quote"
    },
    {
      title: "Percentage Model",
      subtitle: "Performance Based",
      icon: <Percent className="w-10 h-10 text-[#0066CC]" />,
      description: "Pay a small percentage of your monthly collections. We only get paid when you get paid.",
      idealFor: "Small to medium practices looking for a complete RCM solution with aligned incentives.",
      features: [
        "End-to-end RCM management",
        "No upfront fixed costs",
        "Incentivized performance",
        "Includes denial management",
        "Transparent reporting dashboard",
        "Account manager included"
      ],
      ctaText: "Get Rate Analysis",
      isPopular: true
    },
    {
      title: "Hourly Model",
      subtitle: "Flexible Support",
      icon: <Clock className="w-10 h-10 text-[#0066CC]" />,
      description: "Flexible support for specific projects, backlog clearance, or temporary staffing needs.",
      idealFor: "Projects like AR cleanup, credentialing, or covering short-term staff shortages.",
      features: [
        "Pay only for hours worked",
        "No long-term commitment",
        "Ideal for AR clean-up projects",
        "Flexible scheduling",
        "Detailed time tracking logs",
        "Quick deployment"
      ],
      ctaText: "Get Hourly Rates"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing Plans - OneClearRCM Healthcare Revenue Cycle Management</title>
        <meta name="description" content="Transparent pricing models for healthcare RCM services. Choose from FTE, Percentage-based, or Hourly rates to suit your practice needs." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#003366] to-[#0066CC] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Transparent, Flexible Pricing</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We offer multiple engagement models designed to fit the unique financial and operational needs of your healthcare practice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Models Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {pricingModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-xl shadow-lg border overflow-hidden flex flex-col ${
                  model.isPopular ? 'border-[#0066CC] ring-2 ring-[#0066CC]/10' : 'border-gray-200'
                }`}
              >
                {model.isPopular && (
                  <div className="absolute top-0 right-0 bg-[#0066CC] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="p-8 flex-grow">
                  <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    {model.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#003366]">{model.title}</h3>
                  <p className="text-[#0066CC] font-medium mb-4">{model.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {model.description}
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-8">
                    <p className="text-sm font-semibold text-gray-900 mb-1">Best For:</p>
                    <p className="text-sm text-gray-600 italic">{model.idealFor}</p>
                  </div>

                  <ul className="space-y-4">
                    {model.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 pt-0 mt-auto">
                  <Link to="/contact">
                    <Button 
                      className={`w-full font-semibold ${
                        model.isPopular 
                          ? 'bg-[#0066CC] hover:bg-[#0055aa]' 
                          : 'bg-white border-2 border-[#003366] text-[#003366] hover:bg-blue-50'
                      }`}
                      size="lg"
                    >
                      {model.ctaText}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-blue-50 rounded-2xl p-8 md:p-12 border border-blue-100">
            <HelpCircle className="w-12 h-12 text-[#0066CC] mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-4">
              Not Sure Which Model Fits You Best?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Every practice is different. Our RCM experts can analyze your current volume, challenges, and goals to recommend the most cost-effective solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="bg-[#003366] hover:bg-[#004080] text-white" size="lg">
                  Schedule Free Consultation
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="border-[#003366] text-[#003366] hover:bg-blue-50" 
                size="lg"
                onClick={handleConsultClick}
              >
                Request Custom Quote <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;