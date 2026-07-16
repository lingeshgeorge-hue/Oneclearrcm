import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Brain, Activity, Dumbbell, FlaskConical, Stethoscope, Building2, Users } from 'lucide-react';

const IndustriesPage = () => {
  const industries = [
    {
      icon: <Stethoscope className="w-12 h-12 text-[#0066CC]" />,
      title: 'Primary Care',
      description: 'Comprehensive RCM solutions for family medicine, internal medicine, and pediatric practices.',
      specialties: [
        'Family Medicine',
        'Internal Medicine',
        'Pediatrics',
        'Geriatrics'
      ],
      challenges: [
        'High patient volume management',
        'Complex preventive care billing',
        'Chronic care management coding',
        'Multiple payer coordination'
      ]
    },
    {
      icon: <Brain className="w-12 h-12 text-[#0066CC]" />,
      title: 'Behavioral Health',
      description: 'Specialized billing expertise for mental health and substance abuse treatment providers.',
      specialties: [
        'Psychiatry',
        'Psychology',
        'Counseling & Therapy',
        'Addiction Treatment'
      ],
      challenges: [
        'Session-based billing complexity',
        'Prior authorization requirements',
        'Telehealth coding nuances',
        'Sliding scale payment management'
      ]
    },
    {
      icon: <Activity className="w-12 h-12 text-[#0066CC]" />,
      title: 'Urgent Care',
      description: 'Fast-paced billing solutions for urgent care and walk-in clinic environments.',
      specialties: [
        'Urgent Care Centers',
        'Walk-In Clinics',
        'Occupational Health',
        'After-Hours Care'
      ],
      challenges: [
        'High-volume claim processing',
        'Same-day charge entry requirements',
        'Workers compensation billing',
        'E/M level optimization'
      ]
    },
    {
      icon: <Dumbbell className="w-12 h-12 text-[#0066CC]" />,
      title: 'Physical Therapy',
      description: 'Specialized RCM services for rehabilitation and physical therapy practices.',
      specialties: [
        'Outpatient PT',
        'Occupational Therapy',
        'Speech Therapy',
        'Sports Medicine'
      ],
      challenges: [
        'Unit-based billing and modifiers',
        'Medical necessity documentation',
        'Authorization management',
        'Functional outcomes reporting'
      ]
    },
    {
      icon: <FlaskConical className="w-12 h-12 text-[#0066CC]" />,
      title: 'Diagnostic Labs',
      description: 'Comprehensive billing solutions for clinical laboratories and diagnostic testing facilities.',
      specialties: [
        'Clinical Laboratories',
        'Pathology Services',
        'Radiology Centers',
        'Imaging Facilities'
      ],
      challenges: [
        'Complex test panel coding',
        'ABN and waiver management',
        'Medical necessity compliance',
        'Technical vs. professional billing'
      ]
    },
    {
      icon: <Heart className="w-12 h-12 text-[#0066CC]" />,
      title: 'Physician Practices',
      description: 'Tailored RCM services for single and multi-specialty physician groups.',
      specialties: [
        'Cardiology',
        'Orthopedics',
        'Gastroenterology',
        'Multi-Specialty Groups'
      ],
      challenges: [
        'Specialty-specific coding requirements',
        'Procedure-based billing complexity',
        'Multiple location management',
        'Provider credentialing coordination'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Healthcare Industries We Serve - OneClearRCM</title>
        <meta name="description" content="OneClearRCM provides specialized revenue cycle management services for primary care, behavioral health, urgent care, physical therapy, diagnostic labs, and physician practices." />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Specialized revenue cycle management expertise across diverse healthcare specialties, each with unique billing requirements and challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-12 h-12 text-[#0066CC]" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#003366]">
                  Specialty-Specific Expertise
                </h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Every healthcare specialty has unique billing requirements, coding complexities, and reimbursement challenges. Our team includes specialists with deep expertise across multiple healthcare domains.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We understand the nuances of specialty-specific documentation requirements, payer policies, and coding guidelines that impact your revenue cycle performance.
              </p>
              <div className="bg-blue-50 border-l-4 border-[#0066CC] p-6 rounded">
                <p className="text-gray-700 font-medium">
                  "Our industry-specific approach ensures accurate coding, faster reimbursement, and optimal revenue capture for your practice."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img alt="Healthcare specialties collaboration" className="rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1579684288452-b334934f845f" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-[#003366] to-[#0066CC] p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                      {industry.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{industry.title}</h3>
                  </div>
                  <p className="text-blue-100 leading-relaxed">{industry.description}</p>
                </div>

                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-[#003366] mb-3">Specialties We Support</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {industry.specialties.map((specialty, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#0066CC] rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-[#003366] mb-3">Common Challenges We Address</h4>
                    <ul className="space-y-2">
                      {industry.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 bg-[#0066CC] rounded-full"></div>
                          </div>
                          <span className="text-sm text-gray-700">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Delivery Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-4">
              <Users className="w-16 h-16 text-[#0066CC]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
              Global Delivery Model Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our US + India delivery model provides unique advantages for every specialty we serve.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '24/7 Operations',
                description: 'Round-the-clock support ensures faster claim turnaround and continuous AR follow-up regardless of specialty.'
              },
              {
                title: 'Cost Efficiency',
                description: 'Reduce operational costs by up to 40% while maintaining premium quality service delivery.'
              },
              {
                title: 'Scalable Resources',
                description: 'Easily scale your billing team up or down based on practice volume without hiring headaches.'
              },
              {
                title: 'Specialty Expertise',
                description: 'Dedicated teams trained specifically in your healthcare specialty and its unique requirements.'
              },
              {
                title: 'Quality Assurance',
                description: 'US-based oversight and quality control ensures accuracy and compliance across all services.'
              },
              {
                title: 'Technology Integration',
                description: 'Seamless integration with your existing practice management and EHR systems.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-blue-50 p-6 rounded-lg border border-blue-100"
              >
                <h3 className="text-xl font-bold text-[#003366] mb-3">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#003366] to-[#0066CC] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don't See Your Specialty Listed?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We serve many additional healthcare specialties. Contact us to discuss how we can support your unique practice needs.
            </p>
            <a href="/contact" className="inline-block bg-white text-[#003366] px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg">
              Contact Our Team
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default IndustriesPage;