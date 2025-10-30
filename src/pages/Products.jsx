import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';
import ProductCard from '../components/ProductCard';
import { Stethoscope } from "lucide-react";
import { Bot } from "lucide-react";
import { Microscope } from "lucide-react";
import { Rocket } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: 'robotic-vacuum',
      title: 'AI-Powered Robotic Vacuum Cleaners',
      description: 'Advanced robotic vacuum cleaners with AI navigation and smart home integration.',
      icon: <Bot size={44} color="#ffffff" />,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'ai-stethoscope',
      title: 'AI-Powered Stethoscope with Remote Monitoring',
      description: 'Smart stethoscope with AI-powered diagnosis and remote patient monitoring capabilities.',
      icon: <Stethoscope size={44} color="#ffffff" />,
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'nanobots-cancer',
      title: 'Precise Drug Delivery',
      description: 'Revolutionary nanobots designed for targeted cancer treatment and drug delivery.',
      icon: <Microscope size={44} color="#ffffff" />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'placeholder',
      title: 'Coming Soon',
      description: 'We are working on exciting new products. Stay tuned for more innovations.',
      icon: <Rocket size={44} color="#ffffff" />,
      color: 'from-gray-500 to-gray-600'
    }
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
            Our Products
          </h1>
          <p className="font-manrope text-xl text-gray-600 leading-relaxed">
            Discover our range of AI-powered solutions designed to revolutionize healthcare and household automation
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Products Grid */}
      <SectionWrapper className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              {...product}
              delay={index * 0.1}
            />
          ))}
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
            Ready to Transform Your World?
          </h2>
          <p className="font-manrope text-xl text-primary-100 mb-8 leading-relaxed">
            Join the revolution in AI-powered robotics and experience the future of healthcare and automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@logicboots.com"
              className="font-geist btn-secondary bg-white text-primary-600 hover:bg-gray-100"
            >
              Get in Touch
            </a>
            <Link
              to="/about"
              className="font-geist btn-secondary bg-transparent border-2 border-white text-white hover:bg-white/10"
            >
              Learn More About Us
            </Link>
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
};

export default Products;
