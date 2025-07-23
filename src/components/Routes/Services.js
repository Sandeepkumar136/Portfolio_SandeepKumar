import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from '../contents/Loader';
import AlertMessage from '../contents/AlertMessage';
import FormServices from '../contents/FormServices';
import services from '../Data/Json/Services';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const AlertData = [
    {
      heading: "Privacy Notice & Legal Assurance",
      description:
        "Your information is securely handled with utmost confidentiality. By submitting, you agree to our privacy terms, ensuring lawful use and protection of your personal data with integrity and respect.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, type: "spring", bounce: 0.3 } },
  };

  return (
    <div>
      <Loader />
      <AlertMessage
        heading={AlertData[0].heading}
        description={AlertData[0].description}
      />

      <motion.div
        className="services-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((e, i) => (
          <motion.div
            key={i}
            className="services-wrapper"
            variants={cardVariants}
            data-aos="fade-up"
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.4}
              glareColor="#ffffff"
              glarePosition="all"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              scale={1.05}
              transitionSpeed={2000}
            >
              <div className="services-contain glass-effect">
                <i className={`services-card-icon ${e.icon}`}></i>
                <h3 className="heading-services">{e.name}</h3>
                <p className="text-services">{e.alt}</p>
                <motion.button
                  type="button"
                  onClick={() => window.open(e.link, "_blank")}
                  className="services-card-btn sparkle-btn"
                  whileHover={{
                    scale: 1.1,
                    transition: { yoyo: Infinity, duration: 0.4 }
                  }}
                >
                  Book Now
                </motion.button>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>

      <FormServices />
    </div>
  );
};

export default Services;
