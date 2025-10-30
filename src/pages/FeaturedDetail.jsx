import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import SectionWrapper from '../components/SectionWrapper';

const FeaturedDetail = () => {
  const { id } = useParams();

  const featuredData = {
    homedesign: {
      title: 'HomeDesign',
      subtitle: 'AI-Powered Home Design Solution',
      description: 'HomeDesign is a futuristic AI powered solution for home design. Provides real-time inputs to assist designers during the design process.',
      longDescription: `Our AI-powered home design system leverages advanced algorithms to analyze user preferences and spatial constraints, generating optimized design layouts in real-time. `,
      features: [
        'Real-time AI-powered design suggestions',
        'Intelligent space planning tools',
        'Integration with AR/VR for immersive design',
        'Collaborative design environment',
        'Extensive material and furniture database'
      ],
      applications: [
        'Residential interior design',
        'Commercial space planning',
        'Architectural visualization',
        'Home renovation projects',
        'Real estate marketing'
      ],
      tagline: 'First in the world. IP (Patents) under filing.',
      icon: '🏡',
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-50'
    },
    aiicu: {
      title: 'AI in ICU',
      subtitle: 'AI-Powered Intensive Care Unit Monitoring',
      description: 'AI in ICU is a revolutionary solution that leverages artificial intelligence to enhance patient monitoring and care in intensive care units.',
      longDescription: `AI in ICU represents a significant advancement in critical care, utilizing real-time data analysis and machine learning algorithms to provide clinicians with actionable insights. By continuously monitoring patient vitals and predicting potential complications, this system empowers healthcare providers to make informed decisions and deliver timely interventions.`,
      features: [
        'Real-time AI-powered defect detection',
        'High-resolution imaging and analysis',
        'Automated reporting and documentation',
        'Integration with existing maintenance systems',
        'Scalable deployment across multiple infrastructure types'
      ],
      applications: [
        'Metro bridge inspections',
        'Railway infrastructure monitoring',
        'Highway bridge assessments',
        'Building facade inspections',
        'Industrial facility monitoring'
      ],
      tagline: 'First in the world. IP (Patents) under filing.',
      icon: '🚁',
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-50'
    },
    
  };

  const data = featuredData[id];

  if (!data) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Featured Solution Not Found</h1>
          <Link to="/" className="btn-primary">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <SectionWrapper className={`${data.bgColor}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Link 
              to="/" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6 transition-colors"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            
            <div className={`w-24 h-24 bg-gradient-to-br ${data.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
              <span className="text-4xl">{data.icon}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              {data.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto">
              {data.subtitle}
            </p>
            
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200">
              <span className="text-sm font-medium text-gray-700">{data.tagline}</span>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Description Section */}
      <SectionWrapper className="bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About {data.title}
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {data.description}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {data.longDescription}
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Features Section */}
      <SectionWrapper className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced capabilities that set {data.title} apart from traditional solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <div className={`w-8 h-8 bg-gradient-to-br ${data.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Applications Section */}
      <SectionWrapper className="bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Versatile deployment across various industries and use cases
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.applications.map((application, index) => (
              <motion.div
                key={application}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors"
              >
                <div className="text-center">
                  <div className={`w-12 h-12 bg-gradient-to-br ${data.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-xl">{data.icon}</span>
                  </div>
                  <h3 className="text-gray-700 font-medium text-center">{application}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Call to Action */}
      <SectionWrapper className={`bg-gradient-to-br ${data.color}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Experience {data.title}?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join the revolution in {id === 'dinkarai' ? 'infrastructure monitoring' : 'surgical assistance'} with our cutting-edge AI technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@logicboots.com"
              className="btn-secondary bg-white text-gray-900 hover:bg-gray-100"
            >
              Get in Touch
            </a>
            <Link
              to="/about"
              className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white/10"
            >
              Learn More About Us
            </Link>
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
};

export default FeaturedDetail;
