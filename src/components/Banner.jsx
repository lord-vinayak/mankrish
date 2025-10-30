import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min";
// import LetterGlitch from "../components/LetterGlitch";
// import { Boxes } from "../components/Boxes";
import Flipper from "../components/Flipper";

const Banner = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xff3f81,
          backgroundColor: 0x171a3b,
          size: 0.7,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center rounded-lg">
      {/* Vanta Globe background container */}
      <div ref={vantaRef} className="absolute inset-0" />

      {/* Overlay to reduce Globe effect opacity */}
      <div className="absolute inset-0 bg-slate-900/60 z-10 pointer-events-none" />

      <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text">
            <Flipper>Mankrish</Flipper>
            <Flipper className="mt-2">Global</Flipper>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-manrope text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            A dynamic startup revolutionizing healthcare and household
            automation with AI-powered robotics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/about"
              className="font-geist btn-primary text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20">
              Learn More
            </Link>
            <Link
              to="/products"
              className="font-geist btn-secondary text-lg px-8 py-4 bg-transparent border-2 border-white/30 text-white hover:bg-white/10">
              Our Products
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
