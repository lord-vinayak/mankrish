import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import SectionWrapper from "../components/SectionWrapper";
import FeaturedCard from "../components/FeaturedCard";
import ProductCard from "../components/ProductCard";
import { Drone } from "lucide-react";
import { Stethoscope } from "lucide-react";
import { House } from "lucide-react";
import { Bot } from "lucide-react";
import { Microscope } from "lucide-react";
import { Rocket } from "lucide-react";
import { Marquee } from "../components/Marquee";
import Divider from "@mui/material/Divider";
import { Carousel } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import logo1 from "../assets/tides.png";
import logo2 from "../assets/iitrLogo.png";
import logo3 from "../assets/stpi.png";
import logo4 from "../assets/electropreneurial.png";
import logo5 from "../assets/medtech.png";

const Home = () => {
  const featuredItems = [
    {
      id: "atharvaai",
      title: "HomeDesign",
      description:
        "A futuristic AI powered solution for home design. Provides real-time inputs to assist designers during the design process.",
      color: "from-blue-500 to-blue-700",
      icon: <House size={44} color="#ffffff" />,
    },
    {
      id: "ai-stethoscope",
      title: "Stethoscope",
      description:
        "Smart stethoscope with AI-powered diagnosis and remote patient monitoring capabilities.",
      color: "from-purple-500 to-purple-700",
      icon: <Stethoscope size={44} color="#ffffff" />,
    },
  ];

  const products = [
    {
      id: "home-design",
      title: "Home Design",
      description: "A futuristic AI powered solution for home design.",
      icon: <Microscope size={44} color="#ffffff" />,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: "ai-icu",
      title: "AI in ICU",
      description:
        "Realtime monitoring and diagnostics of ICU patients using AI.",
      icon: <Drone size={44} color="#ffffff" />,
      color: "from-red-500 to-red-600",
    },

    {
      id: "robotic-vacuum",
      title: "AI-Powered Robotic Vacuum Cleaners",
      description:
        "Advanced robotic vacuum cleaners with AI navigation and smart home integration.",
      icon: <Bot size={44} color="#ffffff" />,
      color: "from-green-500 to-green-600",
    },
    {
      id: "dinkarai",
      title: "Bridge Inspection",
      description:
        "Civil infrastructure inspection using drones + AI in real time",
      icon: <Rocket size={44} color="#ffffff" />,
      color: "from-gray-500 to-gray-600",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <Banner />
      <SectionWrapper className="bg-gray-50 font-manrope">
        <Marquee repeat={4} className="[--duration:20s]">
          <span>Robotics</span>
          <Divider orientation="vertical" flexItem />
          <span>Artificial Intelligence</span>
          <Divider orientation="vertical" flexItem />
          <span>Internet of Things</span>
          <Divider orientation="vertical" flexItem />
          <span>Drones</span>
          <Divider orientation="vertical" flexItem />
          <span>Medical Devices</span>
          <Divider orientation="vertical" flexItem />
          <span>Healthcare</span>
          <Divider orientation="vertical" flexItem />
        </Marquee>
      </SectionWrapper>

      {/* About Teaser Section */}
      <SectionWrapper className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-geist font-bold text-gray-900 mb-6">
            Revolutionizing Healthcare & Automation
          </h2>
          <p className="text-lg font-manrope text-gray-600 mb-8 leading-relaxed">
            At Mankrish Global, we're pioneering the future of AI-powered
            robotics, creating solutions that transform healthcare delivery and
            household automation. Our cutting-edge technology combines
            artificial intelligence with robotics to solve real-world
            challenges.
          </p>
          <Link to="/about" className="font-geist btn-primary">
            Learn More About Us
          </Link>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <Carousel
            className="rounded-xl h-96"
            autoplay={true}
            loop={true}
            autoplayDelay={2000}>
            <img
              src="/v1.jpg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="/v2.jpg"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <img
              src="/v3.jpg"
              alt="image 3"
              className="h-full w-full object-cover"
            />
            <img
              src="/v4.jpg"
              alt="image 4"
              className="h-full w-full object-cover"
            />
            <img
              src="/v5.jpg"
              alt="image 5"
              className="h-full w-full object-cover"
            />
            <img
              src="/v6.jpg"
              alt="image 6"
              className="h-full w-full object-cover"
            />
            <img
              src="/v7.jpg"
              alt="image 7"
              className="h-full w-full object-cover"
            />
            <img
              src="/v8.jpg"
              alt="image 8"
              className="h-full w-full object-cover"
            />
          </Carousel>
        </div>
      </SectionWrapper>

      {/* Featured Section */}
      <SectionWrapper className="bg-white">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-geist text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured in Global Industry
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-manrope text-lg text-gray-600 max-w-2xl mx-auto">
            Our innovative solutions are making waves in the global market
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 p-4">
          <Card className="w-96">
            <CardHeader color="blue-gray" className="relative h-56">
              <img src="/home.png" alt="card-image" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                HomeDesign
              </Typography>
              <Typography>
                A futuristic AI assisted website for designing houses as per
                requirements.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <a href="https://homedesign.mankrishglobal.com">
                <Button>Read More</Button>
              </a>
            </CardFooter>
          </Card>
          <Card className="w-96">
            <CardHeader color="blue-gray" className="relative h-56">
              <img src="/q6.jpg" alt="card-image" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                AI Stethoscope
              </Typography>
              <Typography>
                Smart stethoscope with AI-powered diagnosis and remote
                monitoring capability.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <a href="https://coeurai.net/">
                <Button>Read More</Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      </SectionWrapper>

      {/* Products Section */}
      <SectionWrapper className="bg-gray-50">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-geist text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-manrope text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our range of AI-powered solutions designed to improve lives
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} {...product} delay={index * 0.1} />
          ))}
        </div>
      </SectionWrapper>

      {/* Industries Marquee */}
      <SectionWrapper className="bg-gray-50">
        <Marquee repeat={4} className="[--duration:20s] font-manrope">
          <span>Healthcare</span>
          <Divider orientation="vertical" flexItem />
          <span>Railways</span>
          <Divider orientation="vertical" flexItem />
          <span>Metro</span>
          <Divider orientation="vertical" flexItem />
          <span>Bridge</span>
          <Divider orientation="vertical" flexItem />
          <span>Health Monitoring</span>
          <Divider orientation="vertical" flexItem />
          <span>Civil Infrastructure Inspection</span>
          <Divider orientation="vertical" flexItem />
          <span>Industrial Robotics</span>
          <Divider orientation="vertical" flexItem />
        </Marquee>
      </SectionWrapper>
    </div>
  );
};

export default Home;
