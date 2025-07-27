import React from "react";
import { motion } from "framer-motion";
import Images_Exported from "../assets/Pictures/ImageExporter";
import Loader from "../contents/Loader";

const Books = () => {
  return (
    <>
      <Loader />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="book-container"
      >
        <motion.img
          src={Images_Exported.bookAvailabile}
          alt="Book Not Available"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="images-book"
        />

        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", delay: 0.6 }}
          className="heading-book"
        >
          Books not Available right Now.
        </motion.h1>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.8, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
          className="subtitle-book"
        >
          It will be Available Later.
        </motion.span>
      </motion.div>
    </>
  );
};

export default Books;
