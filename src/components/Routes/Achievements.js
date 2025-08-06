import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 14,
    },
  },
};

const Achievements = () => {
  const Certificates = [
    { certificate: "DCA", subititle: "OXFORD Education",image: require('../assets/Pictures/Certificates/dca-seeklogo.png') , imgClass: 'dca' ,date: "10-9-2019" },
    { certificate: "TallyERP 9", subititle: "OXFORD Education",image: require('../assets/Pictures/Certificates/tally-solutions-pvt-ltd-seeklogo.png') , imgClass: 'tally' ,date: "5-5-2020" },
    { certificate: "Master in EXCEL", subititle: "OXFORD Education",image: require('../assets/Pictures/Certificates/microsoft-excel-seeklogo.png') , imgClass: 'excel' ,date: "7-4-2020" },
    { certificate: "Amazon Machie", subititle: "Amazon Web Services",image: require('../assets/Pictures/Certificates/amazon-seeklogo.png') , imgClass: 'amazon' ,date: "14-9-2024" },
    { certificate: "Cloud for CEOs", subititle: "Amazon Web Services",image: require('../assets/Pictures/Certificates/aws-amazon-web-services-seeklogo.png') , imgClass: 'aws' ,date: "13-3-2024" },
    { certificate: "AWS Cloud Quest", subititle: "Amazon Web Services",image: require('../assets/Pictures/Certificates/aws-amazon-web-services-seeklogo.png') , imgClass: 'aws' ,date: "15-3-2024" },
    { certificate: "Master in Scss", subititle: "W3S School",image: require('../assets/Pictures/Certificates/BrandLogo.org-W3Schools-Logo-2020.png') , imgClass: 'w3s' ,date: "16-4-2024" },
    { certificate: "Prevent RSI", subititle: "Page Industries Limited",image: require('../assets/Pictures/Certificates/PAGEIND.NS.png') , imgClass: 'pageind' ,date: "20-4-2025" },
    { certificate: "Intro to Page by Ganesh VS", subititle: "Page Industries Limited",image: require('../assets/Pictures/Certificates/PAGEIND.NS.png') , imgClass: 'pageind' ,date: "07-01-2025" },
    { certificate: "Jockey Life Mens", subititle: "Page Industries Limited",image: require('../assets/Pictures/Certificates/jockey-underwear-seeklogo.png') , imgClass: 'jockey' ,date: "14-02-2025" },
    { certificate: "New Arrival and Changes M11", subititle: "Page Industries Limited",image: require('../assets/Pictures/Certificates/jockey-underwear-seeklogo.png') , imgClass: 'jockey' ,date: "06-04-2025" },
    { certificate: "New Arrival and Changes M09", subititle: "Page Industries Limited",image: require('../assets/Pictures/Certificates/jockey-underwear-seeklogo.png') , imgClass: 'jockey' ,date: "03-01-2025" },
    { certificate: "M12 Boxers Shorts Refreshers", subititle: "Page Industries Limited",image: require('../assets/Pictures/Certificates/jockey-underwear-seeklogo.png') , imgClass: 'jockey' ,date: "14-02-2024" },
    { certificate: "New Arrivals M2 2022", subititle: "Page Industries Limited",image: require('../assets/Pictures/Certificates/jockey-underwear-seeklogo.png') , imgClass: 'jockey' ,date: "25-06-2022" },
  ];

  return (
    <>
    <motion.div
      className="certificates"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      >
      {Certificates.map((e, i) => (
        <motion.div key={i} className="cert-container" variants={cardVariants}>
          <div className="uni-logo-contain-c">
            <img src={e.image} alt="Brand_Image" className={`img-cert ${e.imgClass}`} />
            <div className="uni-title-c">{e.certificate}</div>
          </div>
          <h3 className="subtitle-cert">{e.subititle}</h3>
          <div className="certi-date">{e.date}</div>
        </motion.div>
      ))}
    </motion.div>
      </>
  );
};

export default Achievements;