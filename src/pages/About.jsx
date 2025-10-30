import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const About = () => {
  const services = [
    {
      icon: '🏥',
      title: 'Healthcare Robotics',
      description: 'AI-powered medical devices and robotic systems for enhanced patient care and surgical precision.'
    },
    {
      icon: '🏠',
      title: 'Household Automation',
      description: 'Smart home solutions with robotic assistance for daily household tasks and maintenance.'
    },
    {
      icon: '🤖',
      title: 'AI Development',
      description: 'Custom AI solutions and machine learning models for various industry applications.'
    },
    {
      icon: '🔬',
      title: 'Research & Innovation',
      description: 'Cutting-edge research in robotics, AI, and their applications in healthcare and automation.'
    }
  ];

  const expertise = [
    'Artificial Intelligence & Machine Learning',
    'Robotics & Automation',
    'Healthcare Technology',
    'Computer Vision',
    'IoT & Smart Systems',
    'Product Development',
    'Patent & IP Management',
    'Clinical Trials & Validation'
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <SectionWrapper className="bg-gradient-to-br from-primary-50 to-blue-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="font-geist text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About Logicboots
          </h1>
          <p className="font-manrope text-xl text-gray-600 leading-relaxed">
            Pioneering the future of AI-powered robotics to transform healthcare and household automation
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Company Introduction */}
      <SectionWrapper className="bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="font-geist text-3xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="font-manrope text-gray-600 mb-6 leading-relaxed">
              Logicboots was founded with a vision to bridge the gap between cutting-edge AI technology and practical, 
              life-changing applications. We recognized the immense potential of combining artificial intelligence with 
              robotics to solve real-world challenges in healthcare and household automation.
            </p>
            <p className="font-manrope text-gray-600 mb-6 leading-relaxed">
              As a dynamic startup based in India, we've assembled a team of passionate engineers, researchers, and 
              healthcare professionals who share our commitment to innovation and excellence. Our journey began with 
              a simple question: "How can we make AI and robotics more accessible and beneficial to everyday life?"
            </p>
            <p className="font-manrope text-gray-600 leading-relaxed">
              Today, we're proud to be at the forefront of this technological revolution, developing solutions that 
              not only meet current needs but anticipate future challenges in healthcare delivery and home automation.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Mission & Vision */}
      <SectionWrapper className="bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="font-geist text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="font-manrope text-gray-600 leading-relaxed">
                To revolutionize healthcare delivery and household automation through innovative AI-powered robotics, 
                making advanced technology accessible and beneficial to everyone while improving quality of life 
                and operational efficiency.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🔮</span>
              </div>
              <h3 className="font-geist text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="font-manrope text-gray-600 leading-relaxed">
                To be the global leader in AI-powered robotics for healthcare and household automation, creating 
                a future where intelligent machines work seamlessly with humans to enhance our capabilities and 
                improve our daily lives.
              </p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Services */}
      <SectionWrapper className="bg-white">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-geist text-3xl font-bold text-gray-900 mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-manrope text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive solutions across healthcare robotics and household automation
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                <span className="text-3xl">{service.icon}</span>
              </div>
              <h3 className="font-geist text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="font-manrope text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Expertise */}
      <SectionWrapper className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-geist text-3xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="font-manrope text-lg text-gray-600 max-w-2xl mx-auto">
              Deep knowledge and experience across multiple domains of technology and healthcare
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {expertise.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="font-manrope text-gray-700 font-medium">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Call to Action */}
      <SectionWrapper className="bg-primary-600">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-geist text-3xl font-bold text-white mb-6">
            Ready to Transform the Future?
          </h2>
          <p className="font-manrope text-xl text-primary-100 mb-8 leading-relaxed">
            Join us in revolutionizing healthcare and automation with AI-powered robotics. 
            Let's build a smarter, healthier future together.
          </p>
          <div className="font-geist flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@logicboots.com"
              className="btn-secondary bg-white text-primary-600 hover:bg-gray-100"
            >
              Get in Touch
            </a>
            <a
              href="/products"
              className="font-geist btn-secondary bg-transparent border-2 border-white text-white hover:bg-white/10"
            >
              Explore Products
            </a>
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
};

export default About;
