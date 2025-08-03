import React from "react";
import { motion } from "framer-motion";

// Faster animation settings
const cardVariant = {
  hidden: { y: 60, scale: 0.95, opacity: 0 },
  visible: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 180, damping: 12, duration: 0.4 },
  },
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // reduced from 0.2 to 0.1
    },
  },
};

const Education = () => {
  const items = [
    {
      heading: "10th",
      subtitle: "Inter High School",
      location: "Kishanganj",
      state: "Bihar",
      desc: "The roots of discipline and discovery. A chapter where dreams formed under chalk dust and morning bells in the gentle heartland of Kishanganj.",
    },
    {
      heading: "Intermediate",
      subtitle: "Insan Inter College",
      location: "Kishanganj",
      state: "Bihar",
      desc: "A scholarly rite of passage where youth was sculpted with choice and clarity. The place that sharpened purpose and invited deeper reflection.",
    },
    {
      heading: "B.COM",
      subtitle: "Purnia University",
      location: "Purnia",
      state: "Bihar",
      desc: "Beneath the academic archways of Purnia, commerce was embraced like a craft. Here, balance sheets and ambitions were equally honored.",
    },
    {
      heading: "Frontend Development",
      subtitle: "W3s School",
      location: "Hamburg",
      state: "Germany",
      desc: "A canvas of pixels and code. In W3s School’s realm, interfaces took form, and the visual soul of the web began to breathe.",
    },
    {
      heading: "Backend Development",
      subtitle: "Apna College",
      location: "Delhi",
      state: "India",
      desc: "The unseen workings of the web revealed their secrets. Through Apna College’s light, logic and structure flourished in code behind the curtains.",
    },
  ];

  const skills = [
    "html5",
    "css3",
    "javascript",
    "sass",
    "react",
    "nodejs",
    "redux",
    "mongodb",
    "typescript",
    "jquery",
    "vuejs",
    "python",
    "flask",
    "postgresql",
    "bootstrap",
    "netlify",
    "github",
    "git",
    "visual-studio",
    "terminal",
  ];

  return (
    <div className="edu-container">
      {/* Academic Journey Section */}
      <motion.div
        className="heading-inf"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Academic Journey
      </motion.div>

      <motion.div
        className="sch-container"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {items.map((item, index) => (
          <motion.div className="sch-contain" key={index} variants={cardVariant}>
            <div className="sch-logo-contain">
              <i className="sch-icon bx bxs-graduation"></i>
              <div className="sch-heading">{item.heading}</div>
            </div>
            <div className="sch-subtitle">{item.subtitle}</div>
            <div className="sch-add">
              {item.location} <span className="sch-state">{item.state}</span>
            </div>
            <p className="sch-desc">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Learning Section */}
      <motion.div
        className="heading-inf"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Learning
      </motion.div>

      <motion.div
        className="uni-container"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div className="uni-contain" variants={cardVariant}>
          <div className="uni-logo-contain">
            <i className="bx bxs-bank"></i>
            <div className="uni-title">Master in C.</div>
          </div>
          <div className="uni-subtitle">Sradha Khanpra</div>
          <div className="uni-status">currently</div>
          <p className="uni-desc">
            With quiet perseverance, Sradha Khanpra delves into the elegant
            precision of C—where logic flows like a river through valleys of
            memory. In every function, she chisels mastery, weaving clarity and
            power into the codebase.
          </p>
        </motion.div>

        <motion.div className="uni-contain" variants={cardVariant}>
          <div className="uni-logo-contain">
            <i className="bx bxs-bank"></i>
            <div className="uni-title">Master in MongoDB</div>
          </div>
          <div className="uni-subtitle">Haris Ali Khan</div>
          <div className="uni-status">currently</div>
          <p className="uni-desc">
            In the dynamic heart of NoSQL, Haris Ali Khan studies the vast
            forests of MongoDB. Document by document, he deciphers the art of
            flexible data. His journey is one of modern mastery.
          </p>
        </motion.div>
      </motion.div>

      {/* Language Skills Section */}
      <motion.div
        className="heading-inf"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Language Skills.
      </motion.div>

      <motion.div
        className="lang-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="lang-contain"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {skills.map((icon, i) => (
            <motion.i
              className={`bx ${icon.startsWith("bxs") ? icon : `bxl-${icon}`}`}
              key={i}
              variants={cardVariant}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Education;
