import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on making stunning
          <br /> landing pages!
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Webpage
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>
            <a href="#Services">WHAT I DO?</a>
          </button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Frontend(React.js)</h2>
          <p>
            <ul>
              <li>
                <motion.b>React Specialist:</motion.b> Expert in modular
                components, API integration, and user-centric design.
              </li>
              <li>
                <motion.b>API Integration Guru:</motion.b> Seamless integration
                of RESTful APIs with a focus on robust testing.
              </li>
              <li>
                <motion.b>UX Advocate:</motion.b> Prioritizing user experience
                through clean, optimized code and intuitive design.
              </li>
            </ul>
          </p>
          <button>
            <a href="#Contact">Get Yours NOW 🥳!</a>
          </button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Backend (Node.js and Express.js)</h2>
          <p>
            <ul>
              <li>
                <motion.b>MERN API Developer:</motion.b> Express.js proficiency
                with robust middleware.
              </li>
              <li>
                <motion.b>MongoDB Authentication:</motion.b> Specialized in
                secure user authentication using JWT.
              </li>
              <li>
                <motion.b>Documentation Pro:</motion.b> Emphasizes clear and
                concise API documentation.
              </li>
            </ul>
          </p>
          <button>
            <a href="#Contact">Get Yours NOW 🥳!</a>
          </button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Rust System Design</h2>
          <p>
            <ul>
              <li>
                <motion.b>Rust Systems Architect:</motion.b> Designs efficient,
                concurrent systems for general-purpose applications.
              </li>
              <li>
                <motion.b>Concurrency Expert:</motion.b> Maximizes performance
                through Rust concurrent and parallel programming features.
              </li>
              <li>
                <motion.b>Low-Level Specialist:</motion.b> Utilizes Rust control
                for optimal, resource-efficient system design.
              </li>
            </ul>
          </p>
          <button>
            <a href="#Contact">Get Yours NOW 🥳!</a>
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
