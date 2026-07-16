import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText, XCircle, TrendingUp, CheckCircle, DollarSign, UserCheck, Shield, BarChart3 } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <FileText className="w-12 h-12 text-[#0066CC]" />,
      title: 'Medical Billing & Coding',
      description: 'Accurate coding and timely claim submission to maximize reimbursements and minimize errors.',
      features: [
        'ICD-10, CPT, and HCPCS coding',
        'Claims submission and tracking',
        'Electronic and paper claims processing',
        'Coding audits and compliance reviews'
      ]
    },
    {
      icon: <XCircle className="w-12 h-12 text-[#0066CC]" />,
      title: 'Denial Management',
      description: 'Comprehensive denial analysis and resolution to recover lost revenue and prevent future denials.',
      features: [
        'Root cause analysis of denials',
        'Appeals and resubmission management',
        'Payer-specific denial patterns tracking',
        'Preventive measures implementation'
      ]
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-[#0066CC]" />,
      title: 'AR Follow-Up',
      description: 'Proactive accounts receivable management to accelerate collections and improve cash flow.',
      features: [
        'Aging report analysis and prioritization',
        'Systematic follow-up on outstanding claims',
        'Payer communication and negotiation',
        'Payment posting and reconciliation'
      ]
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-[#0066CC]" />,
      title: 'Eligibility Verification',
      description: 'Real-time insurance verification to prevent claim denials and ensure timely reimbursement.',
      features: [
        'Pre-visit insurance verification',
        'Benefits and coverage confirmation',
        'Authorization and referral management',
        'Patient responsibility estimation'
      ]
    },
    {
      icon: <DollarSign className="w-12 h-12 text-[#0066CC]" />,
      title: 'Charge Entry & Payment Posting',
      description: 'Accurate and efficient charge capture and payment posting for optimal revenue tracking.',
      features: [
        'Timely charge entry from encounter forms',
        'Payment posting from all sources',
        'Adjustment and write-off management',
        'Daily reconciliation and reporting'
      ]
    },
    {
      icon: <UserCheck className="w-12 h-12 text-[#0066CC]" />,
      title: 'Provider Credentialing',
      description: 'Complete credentialing and re-credentialing services to ensure uninterrupted practice operations.',
      features: [
        'Initial provider enrollment with payers',
        'CAQH profile management',
        'Re-credentialing and updates',
        'Contracting and fee schedule negotiation'
      ]
    },
    {
      icon: <Shield className="w-12 h-12 text-[#0066CC]" />,
      title: 'Compliance & Auditing',
      description: 'Comprehensive compliance monitoring and auditing to mitigate risk and ensure regulatory adherence.',
      features: [
        'HIPAA compliance monitoring',
        'Coding and billing audits',
        'Documentation review and improvement',
        'Regulatory updates and training'
      ]
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-[#0066CC]" />,
      title: 'Revenue Optimization',
      description: 'Strategic analysis and recommendations to identify revenue opportunities and eliminate leakage.',
      features: [
        'Revenue cycle performance analysis',
        'KPI tracking and reporting',
        'Process improvement recommendations',
        'Custom reporting and dashboards'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Healthcare RCM Services - OneClearRCM</title>
        <meta name="description" content="Comprehensive revenue cycle management services including medical billing, coding, denial management, AR follow-up, eligibility verification, and provider credentialing." />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our RCM Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              End-to-end revenue cycle management solutions designed to optimize your practice's financial performance at every touchpoint.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">{service.icon}</div>
                <h2 className="text-2xl font-bold text-[#003366] mb-3">{service.title}</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-[#0066CC] rounded-full"></div>
                      </div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Service Delivery Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to ensure seamless integration and optimal results for your practice.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery & Analysis', description: 'We analyze your current processes and identify optimization opportunities' },
              { step: '02', title: 'Onboarding & Setup', description: 'Seamless integration with your systems and workflow training' },
              { step: '03', title: 'Ongoing Management', description: 'Daily operations, monitoring, and continuous improvement' },
              { step: '04', title: 'Reporting & Optimization', description: 'Regular performance reviews and strategic recommendations' }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#0066CC]"
              >
                <div className="text-4xl font-bold text-blue-100 mb-4">{phase.step}</div>
                <h3 className="text-xl font-bold text-[#003366] mb-3">{phase.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
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
                Technology-Driven Solutions
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We leverage cutting-edge technology and industry-leading practice management systems to deliver efficient, accurate, and transparent RCM services.
              </p>
              <ul className="space-y-4">
                {[
                  'Integration with all major EHR/PM systems',
                  'Real-time claim status tracking and reporting',
                  'Advanced analytics and performance dashboards',
                  'Automated workflows and error detection',
                  'Secure cloud-based infrastructure',
                  'Mobile access to reports and metrics'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#0066CC] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img alt="Advanced healthcare technology dashboard" className="rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;