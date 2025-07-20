import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAlert } from "../../context/AlertDialogueContext";

const AlertMessage = ({heading, description}) => {
  const { isAlertOpen, openAlert, closeAlert } = useAlert();
  const [delayPassed, setDelayPassed] = useState(false);
  const [isManuallyClosed, setIsManuallyClosed] = useState(false);

  // Show alert after 5 seconds — only if not closed in this session
  useEffect(() => {
    if (!isManuallyClosed) {
      const timer = setTimeout(() => {
        setDelayPassed(true);
        openAlert();
      }, 2000); // 5 seconds delay
      return () => clearTimeout(timer);
    }
  }, [openAlert, isManuallyClosed]);

  const handleClose = () => {
    setIsManuallyClosed(true); // Track manual close
    closeAlert();
  };



  const containerVariants = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, duration: 2 },
    },
    exit: { y: "-100vh", opacity: 0, transition: { duration: 1 } },
  };

  return (
    <AnimatePresence>
      {isAlertOpen && delayPassed && !isManuallyClosed && (
        <motion.div
          className="alert-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
            <div className="alert-contain">
              <div className="upper-alert-contain">
                <h3 className="heading-alert">{heading}</h3>
                <i onClick={handleClose} className="icon-alert bx bx-x"></i>
              </div>
              <p className="text-alert">{description}</p>
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AlertMessage;