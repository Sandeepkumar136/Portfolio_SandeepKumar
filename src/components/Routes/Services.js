import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
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
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.8, 0.25, 1], // soft ease-in-out
      },
    },
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
            data-aos="fade-down"
          >
            <div className="services-contain">
              <i className={`services-card-icon ${e.icon}`}></i>
              <h3 className="heading-services">{e.name}</h3>
              <p className="text-services">{e.alt}</p>
              <motion.button
                type="button"
                onClick={() => window.open(e.link, "_blank")}
                className="services-card-btn sparkle-btn"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                Book Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <FormServices />
    </div>
  );
};

export default Services;
