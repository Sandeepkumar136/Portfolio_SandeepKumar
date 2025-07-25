import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { useLocation} from "react-router-dom";
import Complitation from "./Complitation";

// Moved outside to prevent redefinition on every render
const serviceNames = [
  "Frontend",
  "Backend",
  "Accounts Management",
  "Digital Card",
  "Content writing / Copywriting",
  "Social media Management",
  "Transcription / Captioning",
  "Virtual Assistance",
  "Language Tutoring or Translation",
  "Graphic Design (Using Free Tools)",
  "Blogging / Affiliate Marketing",
  "Data Entry / Typing Jobs",
  "Open Source Contribution",
  "YouTube or Podcast Creation",
  "Voice Acting / Voiceover Work",
  "Proofreading & Editing",
  "Online Surveys & Microtasks",
  "Search Engine Evaluation",
  "Online Course Creation",
  "Online Counseling",
  "Resume Writing & LinkedIn Optimization",
  "Ebook Writing",
  "None",
];

const FormServices = () => {
  const navigate = useLocation();
  const ourServicesRef = useRef(null);
  
  useEffect(() => {
    if (navigate.state?.scrollTo === "service") {
      setTimeout(() => {
        ourServicesRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [navigate]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [message, setMessage] = useState("");

  const [submissionDone, setSubmissionDone] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [dialogLoading, setDialogLoading] = useState(false);
  const [finalIcon, setFinalIcon] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !selectedService || !message) {
      setAlert({ type: "error", message: "Please fill all the fields." });
      setSubmissionDone(true);
      prepareDialogIcon("error");
      return;
    }

    const templateParams = {
      from_name: name,
      email: email,
      phone: phone,
      service: selectedService,
      message: message,
    };

    setLoading(true);
    setDialogLoading(true);
    setSubmissionDone(true);

    emailjs
      .send(
        "service_uro8zbs",
        "template_w9wro4c",
        templateParams,
        "CY9OzP5uATTExwVyV"
      )
      .then(() => {
        setAlert({ type: "success", message: "Message sent successfully!" });
        clearForm();
        prepareDialogIcon("success");
      })
      .catch(() => {
        setAlert({ type: "error", message: "Something went wrong." });
        prepareDialogIcon("error");
      })
      .finally(() => setLoading(false));
  };

  const prepareDialogIcon = (type) => {
    setDialogLoading(true);
    setFinalIcon(null);

    setTimeout(() => {
      setDialogLoading(false);
      setFinalIcon(
        <span
          style={{
            color: type === "success" ? "green" : "red",
            fontSize: "3rem",
          }}
        >
          <i
            className={
              type === "success" ? "bx bx-check-circle" : "bx bx-x-circle"
            }
          ></i>
        </span>
      );
    }, 3000);
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setSelectedService("");
    setMessage("");
  };

  const fadeVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="services"
      initial="hidden"
      animate="visible"
      variants={fadeVariant}
      transition={{ duration: 0.5 }}
    >
      <div className="sr-overlay">
        <motion.div
          className="em-logo-contain"
          variants={fadeVariant}
          transition={{ delay: 0.2, duration: 0.5 }}
        >

          <div className="em-title">Requirement Submission</div>
          <p className="em-subtitle">
            We offer a wide range of services tailored to your needs.
          </p>
        </motion.div>

        <motion.div ref={ourServicesRef}
          className="services-content"
          variants={fadeVariant}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <form className="form-ser" onSubmit={handleSubmit}>
            <motion.div className="form-align-hand" variants={fadeVariant}>
              <motion.input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                whileFocus={{ scale: 1.02 }}
              />
              <motion.input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                whileFocus={{ scale: 1.02 }}
              />
              <motion.input
                type="tel"
                placeholder="Your Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                whileFocus={{ scale: 1.02 }}
              />

              <motion.textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                whileFocus={{ scale: 1.02 }}
              ></motion.textarea>
            </motion.div>
            <motion.div className="form-align-hand-r" variants={fadeVariant}>
              <motion.div
                className="ser-btn-form"
                variants={fadeVariant}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="em-fm-sr">
                  <label>Choose a Service</label>
                  <div className="em-services">
                    {serviceNames.map((srv) => (
                      <motion.button
                        key={srv}
                        type="button"
                        aria-pressed={selectedService === srv}
                        className={selectedService === srv ? "active" : ""}
                        onClick={() => setSelectedService(srv)}
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {srv}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
              <motion.button
                className="f-submit-btn"
                type="submit"
                disabled={loading}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                {loading ? (
                  <div className="loader">
                    <i className="bx bx-dots-horizontal-rounded"></i>
                  </div>
                ) : (
                  "Submit"
                )}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>

        <Complitation
          openDialog={submissionDone}
          setOpenDialog={setSubmissionDone}
          icon={
            dialogLoading ? (
              <div className="popup-loader">
                <i className="bx bx-loader-circle bx-spin"></i>
              </div>
            ) : (
              finalIcon
            )
          }
          text={alert.message}
        />
      </div>
    </motion.section>
  );
};

export default FormServices;